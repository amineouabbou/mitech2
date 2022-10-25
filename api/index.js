import axios from 'axios'
import config from '../data/config'

const { GRAPHQL_URL } = config

export const FethCmsPage = async (pageid) => {
  const res = await axios({
    url: GRAPHQL_URL,
    method: 'post',
    data: {
      query: `
      {
        page(id: "5", idType: DATABASE_ID) {
          title
          AcfHome {
            sectionsFlex {
              __typename
              ... on Page_Acfhome_SectionsFlex_Slideshow {
                slides {
                  sousTitre
                  titre
                  photo {
                    id
                    sourceUrl(size:_1536X1536)
                  }
                }
              }
              ... on Page_Acfhome_SectionsFlex_Presentation {
                title
                intro: introduction
                photo {
                  mediaItemUrl
                }
                phrase
              }
              ... on Page_Acfhome_SectionsFlex_NosAtouts {
                titre
                listeAtoutsRep {
                  icone {
                    sourceUrl
                  }
                  titre
                  description
                }
              }
              ... on Page_Acfhome_SectionsFlex_Visite360 {
                titre
                fieldGroupName
                arrierePlan {
                  sourceUrl(size: _1536X1536)
                }
              }
              
              ... on Page_Acfhome_SectionsFlex_ContactezNous{
                titre
                listeContactRep{
                  icone
                  label
                  valeur
                }
              }
            }
          }
        }
      }
      `,
    },
  })

  const arr = res.data.data.page.AcfHome.sectionsFlex
  const data = arr.reduce(
    (acc, curr) => ((acc[curr.__typename] = { ...curr }), acc),
    {}
  )

  return data
}
