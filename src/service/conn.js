import axios from "axios"
const ConnApi = axios.create({
    // baseURL: "http://10.67.23.26:3333"
    baseURL: "http://localhost:3333"

})
export default ConnApi