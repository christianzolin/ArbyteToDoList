const axios = require('axios')

const deletaTarefa = (completed) => {
       axios({
        method: 'delete',
        url: 'https://arbyte-todo-list-api.herokuapp.com/tasks/4',
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTU5MzAzNjU0MX0.hBXRSSo84YWsk4YbPfHcxsVZXYkqNNJTnMHIyuv9B6Y'},
    })
    .then(resposta => {
        console.log(resposta.data)
    
    })
    .catch(e => console.log('erro', e))
}

deletaTarefa()

