export const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`
}

export const filterFaqlist = (faqlist, searchQuery) => {
  const filtered = faqlist
    .filter((item) => {
      return item.questionSanswerRep.some((item) =>
        item.question.toLowerCase().includes(searchQuery)
      )
    })
    .map((item) => {
      const filteredSubs = item.questionSanswerRep.filter((item) =>
        item.question.toLowerCase().includes(searchQuery)
      )
      return {
        category: item.category,
        questionSanswerRep: filteredSubs,
      }
    })

  return filtered
}
