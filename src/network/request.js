import axios from 'axios';

// 封装axios
export default function (config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: '#',
    timeout: 5000,
  });

  // 拦截请求
  instance.interceptors.request.use((request) => {
    console.log(request);
    return request;
  }, (error) => {
    console.log(error);
    return error;
  });

  // 拦截响应
  instance.interceptors.response.use((response) => {
    console.log(response);
    return response;
  }, (error) => {
    console.log(error);
    return error;
  });

  // 向目标发送请求
  return instance(config);
}
