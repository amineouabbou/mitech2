const config = {
  defaultTitle: 'Mitech Money International',
  url:
    process.env.NODE_ENV !== 'development'
      ? 'https://moneyinternational.be/'
      : 'http://localhost:8888/resamane',
  apiUrl: 'https://moneyinternational.be/api/',
  defaultDescription: `Money International SA - Société de droit Belge qui a débuté ses activités en 2001 en tant qu'établissement de paiement et bureau de change de devise et licencié par la Banque National Belge (BNB).`,
  googleAnalyticsID: 'G-PE8QW0ZGTZ2',
  GRAPHQL_URL:
    process.env.NODE_ENV !== 'development'
      ? 'https://moneyinternational.be/api/graphql'
      : 'https://moneyinternational.be/api/graphql',
}

export default config
