import Axios from 'axios'

const AxiosUserData = Axios.create({
    baseURL: "https://trung-qa-app.firebaseio.com/"
})

export default AxiosUserData