const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.post('/verify', async (request, response) => {
  const { captchaValue } = request.body
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_SECRET}&response=${captchaValue}`,
  )
  response.send(data)
})

//todo : remove before pushing to production
app.listen(port, () => {
  console.log(`Server listening at ${port}`)
})
