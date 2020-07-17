import Vue from 'vue'
import App from './App'
import axios from 'axios'
import {request, request1, request2,request3} from "./network/request";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios(
//   {
//     url:'http://123.207.32.32:8000/home/multidata'
//   }
// ).then(res=>{
//   console.log(res);
// })
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })
// axios({
//          url:'http://152.136.185.210:8000/api/n3/home/data',
//           params:{
//            type:'pop',
//             page:3
//           }
// }).then(res=>{
//   console.log(res);
// })
//
// //同时发送并发请求：
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://152.136.185.210:8000/api/n3/home/data',
//   params:{
//     type:'pop',
//     page:3
//   }
// })]).then(res=>{
//   console.log(res);
// })

//配置全局信息：
//公共的信息可以全局配置
// axios.defaults.baseURL配置全局的baseurl
// axios.defaults.timeout=5000,
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://152.136.185.210:8000/api/n3/home/data',
//   params:{
//     type:'pop',
//     page:3
//   }
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))
//创建实例
// const instance1=axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })
//
// const instance2=axios.create({
//   baseURL:'http://152.136.185.210:8000',
//   timeout:4000
//   })
// instance2({
//   url: '/api/n3/home/data',
//   params: {
//     type: 'pop',
//     page: 2
//   }
// }).then(res=>{
//   console.log(res);
// })
//封装实例的引用：
// request({url:'/home/multidata'},
//   res=>{
//     console.log(res);
//   },err=>{
//     console.log(err);
//   })
// request1({baseconfig:{url:'/home/multidata'},
//   success:res=>{
//   console.log(res)},
//   failure:err=>{
//   console.log(err)}})
//最推荐的调用方式

request3({url:'/home/multidata'})
  .then(res=>{
    console.log(res);
  }).catch(err=>{
  console.log(err);
})
