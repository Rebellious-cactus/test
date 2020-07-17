import axios from 'axios'
//第一种封装的方式：
export function request(config,success,failure) {
  const instance=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  instance(config)
    .then(res=>{
      success(res)
    }).catch(err=>{
      failure(err)
  })

}
//第二种，可以把参数封装为一个对象
export function request1(config) {
  const instance=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:4000
  })
  instance(config.baseconfig)
    .then(res=>config.success(res))
    .catch(err=>config.failure(err))


}
//第三种，使用promise
export function request2(config) {
  return new Promise((resolve, reject) => {
    const instance=axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })

    instance(config)
      .then(res=>{
        resolve(res)
      }).catch(err=>{
      reject(err)
    })
  })
}
//第四种   最推荐的封装方式

export function request3(config) {
  const instance=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //请求截断
  // instance.interceptors.request.use(config=>{
  //   //做相应的处理
  //   console.log(config);
  //   return config
  //
  // },err => {
  //   console.log(err);
  // })
  //响应截断
  instance.interceptors.response.use(config => {
    console.log(config);
    return config.data
  },error => {
    console.log(error);
  })
  //instance 的返回值本来就是一个对象
  return instance(config)
}
