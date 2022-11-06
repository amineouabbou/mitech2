import client from '../apollo-client'

export const getPageData = async (query, pageId, locale) => {
  let lang = ''
  if (locale == 'fr') {
    lang = 'FR'
  } else {
    lang = 'EN'
  }

  const { data } = await client.query({
    query,
    variables: { id: pageId, lang },
  })

  return data
}
