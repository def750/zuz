const GROUPED_TAGS = [
  '#chipped:crying_obsidian',
  // '#chipped:amethyst_block',
]

function normalizeTagId(tagId) {
  return tagId.startsWith('#') ? tagId.slice(1) : tagId
}

function formatGroupName(tagId) {
  const normalizedTagId = normalizeTagId(tagId)
  const path = normalizedTagId.split(':')[1] ?? normalizedTagId

  return path
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

REIEvents.groupEntries(event => {
  GROUPED_TAGS.forEach(tagId => {
    const normalizedTagId = normalizeTagId(tagId)
    const path = normalizedTagId.split(':')[1] ?? normalizedTagId

    event.groupItemsByTag(
      `kubejs:rei_groups/${path}`,
      formatGroupName(tagId),
      normalizedTagId
    )
  })
})
