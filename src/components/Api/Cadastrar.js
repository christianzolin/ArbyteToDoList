const axios = require('axios')

const cadastrar = (name, email) => {
    return axios.post(' https://arbyte-todo-list-api.herokuapp.com/users',{
        "fullName": name,
        "email": email
    })
    .then(resposta => {
        return resposta.data
    })
}

export default cadastrar