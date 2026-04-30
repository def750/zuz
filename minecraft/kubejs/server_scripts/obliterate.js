const BLACKLISTED_ITEM_PATTERNS = [
  /^justhammers:(stone|iron|gold|diamond|netherite)_(reinforced_)?(impact|destructor)_hammer$/,
  /^ae2:.*spatial.*$/,
  /^supplementaries:cannon$/,
  /^supplementaries:cannon_boat_.*$/,
  /^supplementaries:.+\/cannon_boat_.*$/,
]

function isBlacklistedItemId(itemId) {
  return BLACKLISTED_ITEM_PATTERNS.some((pattern) => pattern.test(`${itemId}`))
}

function clearBlacklistedStacks(player) {
  let changed = false

  player.inventory.allItems.forEach((stack) => {
    if (!stack.isEmpty() && isBlacklistedItemId(stack.id)) {
      stack.count = 0
      changed = true
    }
  })

  if (changed) {
    player.inventory.setChanged()
  }
}

ServerEvents.recipes((event) => {
  BLACKLISTED_ITEM_PATTERNS.forEach((pattern) => {
    event.remove({ output: pattern })
  })
})

PlayerEvents.loggedIn((event) => {
  clearBlacklistedStacks(event.player)
})

PlayerEvents.inventoryChanged((event) => {
  clearBlacklistedStacks(event.player)
})

PlayerEvents.pickedUp((event) => {
  if (isBlacklistedItemId(event.item.id)) {
    event.item.count = 0
    clearBlacklistedStacks(event.player)
  }
})
