const axios = require('axios')

export const addTarefa = (descricao, token) => {
     return axios({
        method: 'post',
        url: 'https://arbyte-todo-list-api.herokuapp.com/tasks',
        headers: {'Authorization': `Bearer ${token}`},
        data : {
            "description": descricao,
            "completed": false
        }
    })
    .then(resposta => {
        return resposta.data
    })
}



