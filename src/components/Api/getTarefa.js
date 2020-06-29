const axios = require('axios')

const getTarefa = (token) => {
      return axios({
        method: 'get',
        url: 'https://arbyte-todo-list-api.herokuapp.com/tasks',
        headers: {'Authorization': `Bearer ${token}`},
    })
    .then(resposta => {
       return resposta.data
    })
    .catch(e => console.log('erro ao buscar', e.response.data))
}

export default getTarefa

