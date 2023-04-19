import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'
const data = require('./data.json')
const app: Express = express()
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

const router: Router = express.Router() // Roter的作用是方便更好的根据路由去分模块，避免将所有路由写在入口文件中

app.use('/api', router)

router.get('/list', async (req: Request, res: Response) => {
  // const result = await axios.post()
  res.json({
    ...data
  })
})

app.listen(3333, () => {
  console.log('success server http://localhost:3333')
})
