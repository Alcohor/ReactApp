import * as types from './actionTypes'
import axios from 'axios'

export default{
    asyncGetGoodsInfo(_params){
        return{
            type:types.ASYNC_GET_GOODS_INFO,
            payload:axios.get("/yyt/details",{ params:_params })
        }
    }
}