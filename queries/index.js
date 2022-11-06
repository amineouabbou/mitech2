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
            }
            ... on Page_Acfpage_AcfFlex_WhatMitech {
              fieldGroupName
              title
              description
              shema {
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
                    size
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
