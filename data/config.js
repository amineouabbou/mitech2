const config = {
  defaultTitle: 'Mitech - MoneyInternational',
  url:
    process.env.NODE_ENV !== 'development'
      ? 'https://moneyinternational.be/'
      : 'http://localhost:8888/resamane',
  apiUrl: 'https://moneyinternational.be/api/',
  defaultDescription: 'Mitech - MoneyInternational',
  googleAnalyticsID: 'G-PE8QW0ZGTZ2',
  GRAPHQL_URL:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_GRAPHQL_URL
      : 'https://moneyinternational.be/api/graphql',
}

export default config
