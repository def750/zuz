const VANILLA_MODEL_HEIGHT_CM = 190.93;

const setHeight = (player, cm) => {
  console.log(player, cm);
  let scale = cm / VANILLA_MODEL_HEIGHT_CM;
  // player.server.runCommandSilent(
  //   `attribute ${player.username} minecraft:generic.scale base set ${scale}`,
  // );
};

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("height").then(
      Commands.argument("cm", Arguments.INTEGER.create(event)).executes(
        (ctx) => {
          const player = ctx.source.player;
          const cm = Arguments.INTEGER.getResult(ctx, "cm");

          if (!player) return 0;
          if (cm < 162 || cm > 200) {
            player.tell(
              "Nie uwierzę ci że masz mniej niż 162cm lub więcej niż 2 metry wzorstu, sorry xD",
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
