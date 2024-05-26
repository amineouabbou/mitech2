export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, acf_fields } = req.body

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/wp-json/custom/v1/create-contact`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.WORDPRESS_API_TOKEN}`, // Ensure you have a valid JWT token
        },
        body: JSON.stringify({
          title: title,
          acf_fields, // Replace acfFieldKey with your actual ACF field key
        }),
      }
    )

    if (response.ok) {
      res.status(200).json({ message: 'Post submitted successfully' })
    } else {
      console.log('Response error', response)
      res.status(response.status).json({ message: 'Failed to submit post' })
    }
  } else {
    res.status(200).json({ message: 'Method not allowed' })
  }
}
