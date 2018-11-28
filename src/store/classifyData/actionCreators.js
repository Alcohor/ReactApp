import * as types from './actionTypes'
import axios from 'axios'
const actionsCreators ={
    getNewData(_params){
        return{
            type:types.GET_NEW_DATA_ASYNC,
            payload:axios.get('/yyt/api/search/getListGoods.json',{params:_params})
        }
    }
}
export default actionsCreators