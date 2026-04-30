var COLOR_NAMES = [
  "white",
  "orange",
  "magenta",
  "light_blue",
  "yellow",
  "lime",
  "pink",
  "gray",
  "light_gray",
  "cyan",
  "purple",
  "blue",
  "brown",
  "green",
  "red",
  "black",
];

var OVERWORLD_WOODS = [
  "oak",
  "birch",
  "spruce",
  "jungle",
  "acacia",
  "dark_oak",
  "cherry",
  "mangrove",
];

var NETHER_STEMS = ["warped", "crimson"];
var WOOD_TAG_PREFIXES = ["#chipped:"];

function buildTags(tagPrefix, names, suffixes) {
  var tags = [];

  names.forEach(function (name) {
    suffixes.forEach(function (suffix) {
      tags.push(tagPrefix + name + "_" + suffix);
    });
  });

  return tags;
}

function formatPathName(path) {
  return path
    .split("_")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function buildWoodGroup(tagPrefixes, woodName, paths) {
  var tags = [];

  tagPrefixes.forEach(function (tagPrefix) {
    paths.forEach(function (path) {
      tags.push(tagPrefix + path);
    });
  });

  return {
    id: "kubejs:rei_groups/wood/" + woodName,
    name: formatPathName(woodName),
    tags: tags,
  };
}

function buildWoodGroups(tagPrefixes) {
  var groups = [];

  OVERWORLD_WOODS.forEach(function (woodName) {
    groups.push(
      buildWoodGroup(tagPrefixes, woodName, [
        woodName + "_planks",
        woodName + "_log",
        "stripped_" + woodName + "_log",
        woodName + "_leaves",
        woodName + "_door",
        woodName + "_trapdoor",
      ]),
    );
  });

  NETHER_STEMS.forEach(function (woodName) {
    groups.push(
      buildWoodGroup(tagPrefixes, woodName, [
        woodName + "_planks",
        woodName + "_stem",
        "stripped_" + woodName + "_stem",
        woodName + "_roots",
        woodName + "_door",
        woodName + "_trapdoor",
      ]),
    );
  });

  groups.push(
    buildWoodGroup(tagPrefixes, "bamboo", [
      "bamboo_planks",
      "bamboo_door",
      "bamboo_trapdoor",
    ]),
  );

  return groups;
}

var WOOD_GROUPS = buildWoodGroups(WOOD_TAG_PREFIXES);

var GROUPS = {
  OVERWORLD: [
    "#chipped:prismarine",
    "#chipped:sea_lantern",
    "#chipped:blue_ice",
    "#chipped:packed_ice",
    "#chipped:ice",
    "#chipped:snow_block",
    "#chipped:packed_mud",
    "#chipped:dirt",
    "#chipped:clay",
    "#chipped:mud",
    "#chipped:andesite",
    "#chipped:diorite",
    "#chipped:granite",
    "#chipped:cobblestone",
    "#chipped:stone",
    "#chipped:tuff",
    "#chipped:calcite",
    "#chipped:smooth_stone",
    "#chipped:dark_prismarine",
    "#chipped:dripstone_block",
    "#chipped:mossy_stone",
    "#chipped:red_sandstone",
    "#chipped:sandstone",
    "#chipped:bricks",
    "#chipped:mud_bricks",
    "#chipped:mossy_stone_bricks",
    "#chipped:borderless_bricks",
    "#chipped:deepslate",
    "#chipped:mossy_cobblestone",
    "#chipped:sand",
    "#chipped:gravel",
    "#chipped:moss_block",
    "#minecraft:walls",
    "#minecraft:stairs",
    "#minecraft:slabs",
    "#minecraft:trapdoors",
    "#minecraft:boats",
  ],

  NETHER: [
    "#chipped:crying_obsidian",
    "#chipped:obsidian",
    "#chipped:glowstone",
    "#chipped:nether_bricks",
    "#chipped:quartz_block",
    "#chipped:ochre_froglight",
    "#chipped:pearlescent_froglight",
    "#chipped:verdant_froglight",
    "#chipped:soul_sand",
    "#chipped:ancient_debris",
    "#chipped:basalt",
    "#chipped:blackstone",
    "#chipped:magma_block",
    "#chipped:netherrack",
    "#chipped:gilded_blackstone",
    "#chipped:red_nether_bricks",
    "#chipped:nether_sprouts",
    "#chipped:warped_wart_block",
    "#chipped:crimson_wart_block",
    "#chipped:nether_wart_block",
    "#chipped:crimson_fungus",
    "#chipped:warped_fungus",
  ],

  END: ["#chipped:purpur_block", "#chipped:end_stone"],

  RESOURCES: [
    "#chipped:amethyst_block",
    "#chipped:coal_block",
    "#chipped:lodestone",
    "#chipped:lapis_block",
    "#chipped:diamond_block",
    "#chipped:emerald_block",
    "#chipped:gold_block",
    "#chipped:iron_block",
    "#chipped:netherite_block",
    "#chipped:waxed_copper_block",
    "#chipped:waxed_exposed_copper_block",
    "#chipped:waxed_weathered_copper",
    "#chipped:waxed_oxidized_copper",
    "#chipped:raw_iron_block",
    "#chipped:raw_gold_block",
    "#chipped:raw_copper_block",
    "#chipped:redstone_block",
  ],

  WOOD: ["#chipped:ladder", "#chipped:stem", "#chipped:mangroove_roots"],

  COLORS: [
    "#chipped:terracotta",
    "#chipped:glazed_terracotta",
    "#chipped:concrete",
    "#chipped:glass_pane",
  ].concat(
    buildTags("#chipped:", COLOR_NAMES, [
      "stained_glass",
      "stained_glass_pane",
      "wool",
      "carpet",
      "concrete",
      "terracotta",
      "glazed_terracotta",
    ]),
  ),

  MISC: [
    "#chipped:sponge",
    "#chipped:red_mushroom_block",
    "#chipped:brown_mushroom_block",
    "#chipped:mushroom_stem",
    "#chipped:red_mushroom",
    "#chipped:brown_mushroom",
    "#chipped:melon",
    "#chipped:bone_block",
    "#chipped:hay_block",
    "#chipped:carved_pumpkin",
    "#chipped:lily_pad",
    "#chipped:pumpkin",
    "#chipped:torch",
    "#chipped:lantern",
    "#chipped:soul_lantern",
    "#chipped:redstone_lamp",
    "#chipped:iron_bars",
    "#chipped:pointed_dripstone",
    "#chipped:vine",
    "#chipped:redstone_torch",
    "#chipped:dried_kelp_block",
    "#chipped:shroomlight",
    "#chipped:jack_o_lantern",
    "#chipped:glass",
    "#chipped:barrel",
    "#chipped:bookshelf",
    "#chipped:cobweb",
    "#minecraft:painting",
    "#minecraft:beds",
    "#c:foods",
    "#c:skulls",
  ],
};

var GROUPED_TAGS = []
  .concat(GROUPS.OVERWORLD)
  .concat(GROUPS.NETHER)
  .concat(GROUPS.END)
  .concat(GROUPS.RESOURCES)
  .concat(GROUPS.WOOD)
  .concat(GROUPS.COLORS)
  .concat(GROUPS.MISC);

function stripTagPrefix(tagId) {
  return tagId.indexOf("#") === 0 ? tagId.slice(1) : tagId;
}

function formatGroupName(tagId) {
  var normalizedTagId = stripTagPrefix(tagId);
  var parts = normalizedTagId.split(":");
  var path = parts.length > 1 ? parts[1] : normalizedTagId;

  return path ? formatPathName(path) : path;
}

RecipeViewerEvents.groupEntries("item", function (event) {
  GROUPED_TAGS.forEach(function (tagId) {
    var normalizedTagId = stripTagPrefix(tagId);
    var parts = normalizedTagId.split(":");
    var path = parts.length > 1 ? parts[1] : normalizedTagId;

    event.group(tagId, "kubejs:rei_groups/" + path, formatGroupName(tagId));
  });

  WOOD_GROUPS.forEach(function (group) {
    group.tags.forEach(function (tagId) {
      event.group(tagId, group.id, group.name);
    });
  });
});
