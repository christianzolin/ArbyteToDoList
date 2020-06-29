
import axios from 'axios'

const LoginApi = (login) => {
    return axios.post(' https://arbyte-todo-list-api.herokuapp.com/users/login', {
        "email": login
    })
        .then(resposta => {
            return resposta
        })
}

export default LoginApi

