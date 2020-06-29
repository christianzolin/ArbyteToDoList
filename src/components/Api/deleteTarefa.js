const axios = require('axios')

const deletaTarefa = (id, token) => {
     return axios({
        method: 'delete',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then(resposta => {
        console.log(resposta.data)
    
    })
    .catch(e => console.log('erro delete', e.response.data))
}

export default deletaTarefa

