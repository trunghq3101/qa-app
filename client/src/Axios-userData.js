import Axios from 'axios'

const instance = Axios.create({
    baseURL: "https://trung-qa-app.firebaseio.com/"
})

export default instance