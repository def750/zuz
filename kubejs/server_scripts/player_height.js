const VANILLA_MODEL_HEIGHT_CM = 190.93;

const setScale = (player, scale) => {
  player.server.runCommandSilent(
    `attribute ${player.username} minecraft:generic.scale base set ${scale}`,
  );
};

const setHeight = (player, cm) => {
  console.log(player, cm);
  let scale = cm / VANILLA_MODEL_HEIGHT_CM;
  setScale(player, scale);
  player.tell(`Zmieniono twój wzrost na ${cm} cm`);

  if (cm > 191) {
    player.tell(
      "Uwaga: przy wzroście powyżej 190 cm nie możesz już wchodzić z shiftem w przestrzeń o wysokości 1.50. + crawling nie będzie działać w tunelach 1x1",
    );
  }
};

const resetHeight = (player) => {
  setScale(player, "1.00");
  player.tell("Zresetowano twój wzrost.");
};

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("height")
      .then(
        Commands.literal("reset").executes((ctx) => {
          const player = ctx.source.player;

          if (!player) return 0;

          resetHeight(player);
          return 1;
        }),
      )
      .then(
        Commands.argument("cm", Arguments.INTEGER.create(event)).executes(
          (ctx) => {
            const player = ctx.source.player;
            const cm = Arguments.INTEGER.getResult(ctx, "cm");

            if (!player) return 0;
            if (cm < 162 || cm > 200) {
              player.tell(
                "Nie uwierzę ci że masz mniej niż 162cm lub więcej niż 2 metry wzrostu, sorry xD",
              );
              return 1;
            }

            setHeight(player, cm);
            return 1;
          },
        ),
      ),
  );
});
