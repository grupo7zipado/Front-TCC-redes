import axios from "axios"
const ConnApi = axios.create({
    baseURL: "http://10.67.23.44:3333"
})
export default ConnApi