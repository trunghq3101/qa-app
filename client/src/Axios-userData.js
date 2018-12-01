import Axios from 'axios'

const AxiosUserData = Axios.create({
    baseURL: "/api"
})

export default AxiosUserData