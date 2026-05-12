// Script to change loot tables for our stuff

// Sharpnel Makiba
EntityEvents.death((event) => {
  const entity = event.entity;
  const source = String(event.source);

  if (!source.includes("create.crush")) return;

  if (entity.type !== "minecraft:cat") return;

  if (Math.random() < 0.001) {
    entity.block.popItem("osurooms:makiba");
  }
});

// Craftable Discs
ServerEvents.recipes((event) => {
  event.shaped(
    Item.of("osurooms:cocodrilo_music", 1), // arg 1: output
    [
      "AAA",
      "ABA", // arg 2: the shape (array of strings)
      "AAA",
    ],
    {
      A: "minecraft:cocoa_beans",
      B: "create:mechanical_drill",
    },
  );
});
