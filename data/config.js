const config = {
  defaultTitle: 'Mitech - MoneyInternational',
  url:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_SITE_URL
      : 'http://localhost:8888/resamane',
  apiUrl: 'https://api.residencesamane.ma',
  defaultDescription: 'Mitech - MoneyInternational',
  googleAnalyticsID: 'G-PE8QW0ZGTZ2',
  GRAPHQL_URL:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_GRAPHQL_URL
      : 'https://api.residencesamane.ma/graphql',
}

export default config
