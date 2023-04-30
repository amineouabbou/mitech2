import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        databaseId
        title
        ACFPage {
          acfFlex {
            ... on Page_Acfpage_AcfFlex_Hero {
              fieldGroupName
              title
              advantagesRep {
                label
              }
              callToAction {
                label
                slug
              }
            }
            ... on Page_Acfpage_AcfFlex_WhatMitech {
              fieldGroupName
              title
              description
              shema {
                mediaItemUrl
              }
              schemaMobile {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_FrontBrandSolution {
              fieldGroupName
              subTitle
              title
              description
              illustration {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_OpenCloudSolution {
              fieldGroupName
              subTitle
              title
              description
              illustration {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_Features {
              fieldGroupName
              featuredListRep {
                title
                listeRep {
                  title
                  iconGroup {
                    icone {
                      mediaItemUrl
                    }
                  }
                }
              }
            }
            ... on Page_Acfpage_AcfFlex_Monitor {
              fieldGroupName
              title
              pointsList {
                label
              }
              logos {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_WhyMitech {
              fieldGroupName
              title
              advantagesListRep {
                icone {
                  mediaItemUrl
                }
                label
                description
              }
            }
            ... on Page_Acfpage_AcfFlex_Mtos {
              fieldGroupName
              title
              description
              blocsListRep {
                titleGroup {
                  icone {
                    mediaItemUrl
                  }
                  title
                }
                listeRep {
                  label
                }
                bottomText
              }
            }
            ... on Page_Acfpage_AcfFlex_Newsletter {
              fieldGroupName
              title
              inputLabel
              button {
                label
                slug
              }
            }
            ... on Page_Acfpage_AcfFlex_DiasporaCentric {
              fieldGroupName
              title
              description
            }
          }
        }
      }
    }
  }
`

export const GET_FEATURES = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        databaseId
        title
        ACFPage {
          acfFlex {
            ... on Page_Acfpage_AcfFlex_FeaturesDetailed {
              fieldGroupName
              listeFeaturesRep {
                fieldGroupName
                iconeGroup {
                  icone {
                    mediaItemUrl
                  }
                  size
                }
                title
                description
              }
            }
          }
        }
        pagesHero {
          subTitle
          intro
        }
      }
    }
  }
`

export const GET_FAQ = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        databaseId
        title
        ACFPage {
          acfFlex {
            ... on Page_Acfpage_AcfFlex_Faq {
              fieldGroupName
              listCategoriesRep {
                category
                questionSanswerRep {
                  answer
                  question
                }
              }
            }
          }
        }
        pagesHero {
          subTitle
          intro
        }
      }
    }
  }
`

export const GET_FRONT_BRAND = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        databaseId
        title
        ACFPage {
          acfFlex {
            ... on Page_Acfpage_AcfFlex_HeroSolution {
              fieldGroupName
              title
              subtitle
              description
              photo {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_SolutionAdvantages {
              fieldGroupName
              title
              advantagesRepeater {
                texte
              }
            }
            ... on Page_Acfpage_AcfFlex_ReThink {
              fieldGroupName
              title
              photo {
                mediaItemUrl
              }
              listeRepeater {
                title
                description
              }
            }
            ... on Page_Acfpage_AcfFlex_SolutionFeatured {
              fieldGroupName
              title
              advantagesRepeater {
                logo {
                  mediaItemUrl
                }
                title
                description
              }
            }
            ... on Page_Acfpage_AcfFlex_BuildAndMonitor {
              fieldGroupName
              title
              advantagesRepeater {
                texte
              }
              ilustration {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_ComparisonTable {
              fieldGroupName
              title
              brandsRepeater {
                texte
              }
              comparisonRepeater {
                title
                classicDescription
                mitechDescription
              }
            }
            ... on Page_Acfpage_AcfFlex_HowWeOperate {
              fieldGroupName
              title
              subtitle
              listRepeater {
                title
                logo {
                  mediaItemUrl
                }
                detailsListRepeater {
                  texte
                }
              }
            }
            ... on Page_Acfpage_AcfFlex_PopIn {
              fieldGroupName
              description
              label
              logo {
                mediaItemUrl
              }
              slug
              background {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`

export const GET_OPEN_REMIT = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        databaseId
        title
        ACFPage {
          acfFlex {
            __typename
            ... on Page_Acfpage_AcfFlex_HeroSolution {
              fieldGroupName
              title
              subtitle
              description
              photo {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_SolutionAdvantages {
              fieldGroupName
              title
              advantagesRepeater {
                texte
              }
            }
            ... on Page_Acfpage_AcfFlex_PlugAndImprove {
              fieldGroupName
              title
              photo {
                mediaItemUrl
              }
              advantagesRepeater {
                texte
              }
              watermark
              mapBackground {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_SolutionFeatured {
              fieldGroupName
              title
              advantagesRepeater {
                logo {
                  mediaItemUrl
                }
                title
                description
              }
            }
            ... on Page_Acfpage_AcfFlex_BuildAndMonitor {
              fieldGroupName
              title
              ilustration {
                mediaItemUrl
              }
              advantagesRepeater {
                texte
              }
              ilustration {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_ComparisonTable {
              fieldGroupName
              title
              brandsRepeater {
                texte
              }
              comparisonRepeater {
                title
                classicDescription
                mitechDescription
              }
            }
            ... on Page_Acfpage_AcfFlex_HowWeOperate {
              fieldGroupName
              title
              subtitle
              listRepeater {
                title
                logo {
                  mediaItemUrl
                }
                detailsListRepeater {
                  texte
                }
              }
            }
            ... on Page_Acfpage_AcfFlex_PopIn {
              fieldGroupName
              description
              label
              logo {
                mediaItemUrl
              }
              slug
              background {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`

export const GET_ABOUT_PAGE = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        title
        ACFPage {
          acfFlex {
            __typename
            ... on Page_Acfpage_AcfFlex_HeroSolution {
              fieldGroupName
              title
              subtitle
              description
              photo {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_AboutOurVision {
              fieldGroupName
              title
              listPointsRepeater {
                texte
              }
              photo {
                mediaItemUrl
              }
            }
            ... on Page_Acfpage_AcfFlex_AboutOurDna {
              fieldGroupName
              title
              subtitle
              cardsRepeater {
                icone {
                  mediaItemUrl
                }
                title
                description
              }
            }
            ... on Page_Acfpage_AcfFlex_AboutOurTechnology {
              fieldGroupName
              title
              subtitle
              cardsListRepeater {
                title
                description
              }
            }
            ... on Page_Acfpage_AcfFlex_AboutConformity {
              fieldGroupName
              title
              subtitle
              preDescription
              advantagesListRepeater {
                preDescription
                icone {
                  mediaItemUrl
                }
                title
                descriptions {
                  texte
                }
                photo {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  }
`
