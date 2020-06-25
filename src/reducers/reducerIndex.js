import { combineReducers } from 'redux'
import adicionarTarefa from './tarefa'
import usuario from './usuario'

export default combineReducers({
    adicionarTarefa,
    usuario
})