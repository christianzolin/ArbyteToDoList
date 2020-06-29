const axios = require('axios')

const putTarefa = (id,completed, token, description) => {
    console.log('description aqui: ', description);
    console.log('token: ', token);
    console.log('completed: ', completed);
    console.log('id: ', id);
       axios({
        method: 'put',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,
        headers: {'Authorization': `Bearer ${token}`},
        data : {
            "description" : description,
            "completed": completed
        }
    })
    .then(resposta => {
        console.log('resposta: ', resposta.data);
        return resposta.data
    
    })
    .catch(e => console.log('erro', e.response.data))
}

export default putTarefa

