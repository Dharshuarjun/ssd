import axios from "axios";
let instance=axios.create({
    baseURL:"https://62c29fa0876c4700f5292e27.mockapi.io",
headers:{
    domain:"hello"
}
})
instance.interceptors.request.use((config)=>{
    //calculate the token and send new token
    config.headers.auth="new Token"
    return config
})
instance.interceptors.request.use((res)=>{
    return res
})
export default instance;