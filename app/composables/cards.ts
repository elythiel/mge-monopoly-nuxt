export const useCards = async () => {
  const { data } = await useAsyncData(() =>
    queryCollection('board').order('id', 'ASC').all(),
  )

  const nextCardId = (index: number) => {
    if (!data.value) {
      return null
    }

    if (index > data.value.length - 1) {
      return nextCardId(-1)
    }

    const nextItem = data.value[index + 1]
    if (nextItem?.card) {
      return nextItem.id
    }

    return nextCardId(index + 1)
  }

  function prevCardId(index: number) {
    if (!data.value) {
      return null
    }

    if (index < 0) {
      return prevCardId(data.value.length)
    }

    const prevItem = data.value[index - 1]
    if (prevItem?.card) {
      return prevItem.id
    }

    return prevCardId(index - 1)
  }

  return { data, prevCardId, nextCardId }
}
