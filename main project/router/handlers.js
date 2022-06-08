const {Router} = require('express')
const router = Router()

router.get('/home', async(req, res) => {
    res.render('index',{ title: 'Hey', message: 'Hello there!'})
  })

module.exports = router


