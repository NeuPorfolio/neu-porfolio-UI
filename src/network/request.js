import axios from 'axios';
import router from '@/router';

export default function request(config) {
  return new Promise((resolve, reject) => {
    // 创建axios实例
    const instance = axios.create({
      // baseURL: `http://${Global.baseUrl}/api`,
      baseURL: 'http://localhost:8080/api',
      timeout: 5000,
      // responseType: "json",
      headers: {
        'Content-Type': 'application/json',
      },
      // withCredentials: process.env.NODE_ENV === 'production',
      withCredentials: false,
    });

    instance.interceptors.response.use(
      (response) => {
        if (response.status === 200) {
          // console.log(response)
          return Promise.resolve(response.data);
        }
        // console.log(response+res1)
        return Promise.reject(response);
      },
      // todo 更详细的错误判断
      (error) => {
        // console.log(error.response)
        // debugger
        if (error.response) {
          switch (error.response.status) {
            case 400:
              console.log(error.response.data);
              return Promise.reject(error.response);
            case 401:
              router.replace({
                path: '/login',
              });
              break;
            case 500:
              Notification({
                title: '错误！',
                message: '服务器内部错误,请联系管理员！',
              });
              console.log(error.response.data);
              return Promise.reject(error.response);
            default:
              return Promise.reject(error.response);
          }
        } else {
          console.log('未知错误');
          Notification({
            title: '错误!',
            message: error.message,
            type: 'error',
          });
          return Promise.reject(error);
        }
        return Promise.reject(error);
      },
    );
    // 发送网络请求
    instance(config).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

// 封装axios
// export default function (config) {
//   // 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://172.21.129.73:8080/api',
//     timeout: 5000,
//   });
//
//   // 拦截请求
//   instance.interceptors.request.use((request) => {
//     console.log(request);
//     return request;
//   }, (error) => {
//     console.log(error);
//     return error;
//   });
//
//   // 拦截响应
//   instance.interceptors.response.use((response) => {
//     console.log(response);
//     return response;
//   }, (error) => {
//     console.log(error);
//     return error;
//   });
//
//   // 向目标发送请求
//   return instance(config);
// }
