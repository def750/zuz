// Script to change loot tables for our stuff
EntityEvents.death((event) => {
  const entity = event.entity;
  const source = String(event.source);

  if (!source.includes("create.crush")) return;

  if (entity.type !== "minecraft:cat") return;

  entity.block.popItem("osurooms:makiba");
});
