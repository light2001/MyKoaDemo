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
     //获取参数见
     let postParam = ctx.request.body
     //根据参数查询
     let obj =new Object
     obj.Name=postParam.Name
     let old= await user.findOne(obj)
     console.log(old)
     let newData= old
     newData.Sex=postParam.Sex
     console.log(newData)
     let st =  await user.update(old,newData);
     ctx.response.type = `application/json`;
     console.log(st)
     ctx.body = st;
})


router.post('/UpdateById', async (ctx, next) => {
  //获取参数见
  let postParam = ctx.request.body
  //根据参数查询
  console.log(postParam)
  let st =  await user.updateById(postParam._id,postParam);
  ctx.response.type = `application/json`;
  console.log(st)
  ctx.body = st;
})

router.post('/Add', async (ctx, next) => {
   //获取参数见
   let postParam = ctx.request.body
   //根据参数查询
   let st =  await user.insert(postParam);
   ctx.response.type = `application/json`;
   // console.log(st)
   ctx.body = st;
})


router.post('/Delete', async (ctx, next) => {
    //获取参数见
    let postParam = ctx.request.body
    //根据参数查询
    let st =  await user.remove(postParam);
    ctx.response.type = `application/json`;
    // console.log(st)
    ctx.body = st;
})



router.post('/Get', async (ctx, next) => {
  //获取参数见
  let postParam = ctx.request.body
  console.log(postParam)
  //根据参数查询
  let st =  await user.find(postParam);
  ctx.response.type = `application/json`;
  // console.log(st)
  ctx.body = st;
})



router.get('/GetAll', async (ctx, next) => {
  let st =  await user.find();
  ctx.response.type = `application/json`;
  ctx.body = st;
})


module.exports = router
