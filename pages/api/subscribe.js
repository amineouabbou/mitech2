import axios from 'axios'

export default async function handler(req, res) {
  const clientKey = process.env.API_CLIENT_KEY
  const secretKey = process.env.API_CLIENT_SECRET

  if (req.method === 'POST') {
    const body = req.body
    console.log('req body', body)
    try {
      const { data } = await axios.post(
        `https://moneyinternational.be/api/wp-json/newsletter/v2/subscribers?client_key=${clientKey}&client_secret=${secretKey}`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      res.json(data)
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: 'Failed' })
    }
  }

  if (!req.method === 'POST') {
    res.status(200).json({ name: 'Try to make post request' })
  }
}
