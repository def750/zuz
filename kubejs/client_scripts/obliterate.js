// const BLACKLIST_PATTERNS = new Set(["justen"]);

// REIEvents.hide("item", (event) => {
//   BLACKLIST_PATTERNS.forEach((element) => {
//     event.hide("example:ingredient");
//   });
// });

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  global.ITEM_BLACKLIST.forEach((item) => {
    event.remove(item);
  });
});
