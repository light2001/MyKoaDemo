const router = require('koa-router')()

const mongo= require('../util/db')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!来了老弟'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

const user = mongo.db.get('userinfo');
router.get(`/test`, async (ctx) => {
    // let st =  await user.find({"Name":"张三"});
    let st =  await user.find();
    ctx.response.type = `application/json`;
    console.log(st)
    ctx.body = st;
})
module.exports = router
