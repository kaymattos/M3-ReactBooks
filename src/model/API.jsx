import axios from "axios"

const API = axios.create({
  baseURL: "https://m3bibliotecadb.onrender.com",
})

export default API