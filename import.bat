chcp 65001 >nul
@echo off
setlocal enabledelayedexpansion

REM ================================================================
REM Set below paths to your prism launcher instance and packwiz repo
REM ================================================================
REM Path to your live Minecraft instance .minecraft folder
set "MC_DIR=C:\Users\def750\AppData\Roaming\PrismLauncher\instances\ŻUŻ\minecraft"

REM Path to your packwiz repo root
set "PACKWIZ_DIR=C:\Users\def750\Desktop\żuż"

REM Name of the test world used for serverconfig import
set "WORLD_NAME=TestWorld"

REM ================================================================

REM Dont touch below unless you know what you're doing
echo.
echo Minecraft instance:
echo   %MC_DIR%
echo.
echo Packwiz repo:
echo   %PACKWIZ_DIR%
echo.
echo Test world:
echo   %WORLD_NAME%
echo.

if not exist "%MC_DIR%" (
    echo ERROR: MC_DIR does not exist.
    pause
    exit /b 1
)

if not exist "%PACKWIZ_DIR%" (
    echo ERROR: PACKWIZ_DIR does not exist.
    pause
    exit /b 1
)

:menu
echo ================================
echo What do you want to import?
echo ================================
echo 1. all
echo 2. config
echo 3. kubejs
echo 4. defaultconfigs from saves\%WORLD_NAME%\serverconfig
echo 5. run packwiz refresh only
echo 0. exit
echo.

set /p choice="Choose option: "

if "%choice%"=="1" goto import_all
if "%choice%"=="2" goto import_config
if "%choice%"=="3" goto import_kubejs
if "%choice%"=="4" goto import_defaultconfigs
if "%choice%"=="5" goto refresh
if "%choice%"=="0" goto end

echo Invalid option.
goto menu

:import_config
echo.
echo Importing config...
robocopy "%MC_DIR%\config" "%PACKWIZ_DIR%\config" /E
goto refresh

:import_defaultconfigs
echo.
echo Importing serverconfig as defaultconfigs...
robocopy "%MC_DIR%\saves\%WORLD_NAME%\serverconfig" "%PACKWIZ_DIR%\defaultconfigs" /E
goto refresh

:import_kubejs
echo.
echo Importing kubejs...
robocopy "%MC_DIR%\kubejs" "%PACKWIZ_DIR%\kubejs" /E
goto refresh

:import_all
echo.
echo Importing config...
robocopy "%MC_DIR%\config" "%PACKWIZ_DIR%\config" /E

echo.
echo Importing serverconfig as defaultconfigs...
robocopy "%MC_DIR%\saves\%WORLD_NAME%\serverconfig" "%PACKWIZ_DIR%\defaultconfigs" /E

echo.
echo Importing kubejs...
robocopy "%MC_DIR%\kubejs" "%PACKWIZ_DIR%\kubejs" /E

goto refresh

:refresh
echo.
echo Running packwiz refresh...
cd /d "%PACKWIZ_DIR%"
packwiz refresh

echo.
echo Done.
echo.
git status

goto end

:end
echo.
pause
endlocal
