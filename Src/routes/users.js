const router = require('koa-router')()

const mongo= require('../util/db')
const user = mongo.db.get('userinfo');


router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/Update', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json11'
  }
})

router.post('/Add', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json11'
  }
})


router.post('/Delete', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json11'
  }
})



router.get('/Get', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json11'
  }
})



router.get('/GetAll', async (ctx, next) => {
  let st =  await user.find();
  ctx.response.type = `application/json`;
  ctx.body = st;
})


module.exports = router
