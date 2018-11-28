import {combineReducers}from 'redux'

import goodsInfo from './goodsInfo'
import loading from './loading'
import classifyData from './classifyData'

export default combineReducers({goodsInfo,loading,classifyData})