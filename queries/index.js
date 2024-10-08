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
              logoMitech {
                mediaItemUrl
              }
              blocsRep {
                logo {
                  mediaItemUrl
                }
                description
                discover {
                  label
                  slug
                }
                logoSize
              }
            }
            ... on Page_Acfpage_AcfFlex_OpenRemitSolution {
              fieldGroupName
              subTitle
              title
              description
              illustration {
                mediaItemUrl
              }
              cta {
                label
                slug
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
              cta {
                label
                slug
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
              cta {
                label
                slug
              }
            }
            ... on Page_Acfpage_AcfFlex_DataAnalysSolution {
              fieldGroupName
              subTitle
              title
              description
              illustration {
                mediaItemUrl
              }
              cta {
                label
                slug
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
              cta {
                label
                slug
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
        pagesHero {
          subTitle
          intro
        }
        ACFPage {
          acfFlex {
            ... on Page_Acfpage_AcfFlex_FeaturesDetailed {
              fieldGroupName
              listeFeaturesRep {
                title
                iconeGroup {
                  icone {
                    mediaItemUrl
                  }
                  size
                }
                description
              }
            }
          }
        }
      }
    }
  }
`

export const GET_PRIVACY_POLICY = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        databaseId
        title
        content
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
              button {
                label
                ahref
              }
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

export const GLOBAL_DATA = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        databaseId
        title
        ACFGlobal {
          sectionsOthers {
            __typename
            ... on Page_Acfglobal_SectionsOthers_GetInTouch {
              title
              subTitle
              cta {
                label
                slug
              }
            }
            ... on Page_Acfglobal_SectionsOthers_PrimaryMenu {
              __typename
              navRep {
                label
                slug
                submenuRep {
                  label
                  slug
                }
              }
              cta {
                label
                slug
              }
            }
            ... on Page_Acfglobal_SectionsOthers_MegaMenu {
              introTitle
              introDescription
              solutionsRep {
                logo {
                  mediaItemUrl
                }
                title
                subTitle
                slug
              }
              secteursTitle
              listeSecteursRep {
                label
                slug
              }
            }
            ... on Page_Acfglobal_SectionsOthers_Footer {
              blocksRep {
                title
                linksRep {
                  title
                  slug
                }
              }
              blockBesoin {
                title
                linksRep {
                  title
                  slug
                }
                socialRep {
                  icon
                  url
                }
              }
              copyrightsBlock {
                texte
                logosRep {
                  logo
                  slug
                }
              }
            }

            ... on Page_Acfglobal_SectionsOthers_SolutionsSection {
              popinTitle
              logoMitech {
                altText
                mediaItemUrl
              }
              solutionsListRep {
                title
                logo {
                  altText
                  mediaItemUrl
                }
                description
                slug
              }
            }

            ... on Page_Acfglobal_SectionsOthers_FooterLogos {
              footerLogos {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`

export const GET_PRICING_PAGE = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        databaseId
        title
        pagesHero {
          subTitle
          intro
        }
        pagePricing {
          introduction
          solutionsLogos {
            logoDesktop {
              mediaItemUrl
            }
          }
          tableRepeater {
            options {
              label
            }
            texte
          }
        }
        ACFPage {
          acfFlex {
            __typename
            ... on Page_Acfpage_AcfFlex_GetAnOffer {
              fieldGroupName
              title
              subTitle
              cta {
                label
                slug
              }
            }
          }
        }
      }
    }
  }
`

export const GET_CONTACT_PAGE = gql`
  query getPage($id: ID!, $lang: LanguageCodeEnum!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      translation(language: $lang) {
        databaseId
        title
        pagesHero {
          subTitle
          intro
        }
      }
    }
  }
`
