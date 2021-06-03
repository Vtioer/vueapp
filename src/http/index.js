import axios from "axios";
import qs from "qs";
// 在config.js文件中统一存放一些公共常量，方便之后维护
import { baseURL, timeout } from "./config.js";
// 设置'Content-Type'
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        // 显示loading
        let token = localStorage.getItem("token");
        if (token) {
            config.headers.authorization = token;
        }
        console.log('请求拦截：', config)
        return config;
    },
    (error) => {
        // 请求错误时弹框提示，或做些其他事
        return Promise.reject(error);
    }

);
// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
        // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
        return response.data;
    },
    (error) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }

);
// 封装数据返回失败提示函数
function errorState(response) {
    // 隐藏loading
    // 如果http状态码正常，则直接返回数据
    if (
        response &&
        (response.status === 200 ||
            response.status === 304 ||
            response.status === 400)
    ) {
        // 如果不需要除了data之外的数据，可以直接 return response.data
        return response;
    } else {
        alert("数据获取错误");
    }
}
// 封装数据返回成功提示函数
function successState(res) {
    // 隐藏loading
    // 统一判断后端返回的错误码(错误码与后台协商而定)
    // if (res.data.code === "000000") {
    //   alert("success");
    //   return res;
    // }
    return res;

}
// 封装axios
function axiosHttp(method, url, params) {
    let httpDefault = {
        method: method,
        baseURL: baseURL,
        url: url,
        // `params` 是即将与请求一起发送的 URL 参数
        // `data` 是作为请求主体被发送的数据
        params: method === "GET" || method === "DELETE" ? params : null,
        data: method === "POST" || method === "PUT" ? qs.stringify(params) : null,
        timeout: timeout,
    };

    return new Promise((resolve, reject) => {
        axios(httpDefault)
            .then((res) => {
                successState(res);
                resolve(res);
            })
            .catch((response) => {
                errorState(response);
                reject(response);
            });
    });
}

export default {
    install: function (Vue) {
        Vue.prototype.httpGet = (url, params) => axiosHttp("GET", url, params);
        Vue.prototype.httpPost = (url, params) => axiosHttp("POST", url, params);
        Vue.prototype.httpPut = (url, params) => axiosHttp("PUT", url, params);
        Vue.prototype.httpDelect = (url, params) =>
            axiosHttp("DELECT", url, params);
    },

};