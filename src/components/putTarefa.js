const axios = require('axios')

const putTarefa = (id,completed, token) => {
       axios({
        method: 'put',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,
        headers: {'Authorization': `Bearer ${token}`},
        data : {
            "completed": completed
        }
    })
    .then(resposta => {
        console.log(resposta.data)
    
    })
    .catch(e => console.log('erro', e))
}

export default putTarefa

