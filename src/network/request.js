import axios from "axios";
import qs from 'qs';
const instance = axios.create({
    baseURL:'https://api.shop.eduwork.cn/api/',
    timeout:5000,
})
export function get(url,params){
    return instance.get(url,{params});
}
export function post(url,data){
    return instance.post(url,qs.stringify(data));
}