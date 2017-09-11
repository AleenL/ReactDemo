import {SWITCH,Switch} from './actionCounter';
import { combineReducers } from 'redux'

/*
* 初始化state
 */

const initState = {
    ComponentState:[
        {text:'显示时间',component:'timeShow',show:true},
        {text:'未来一周天气',component:'futureShow',show:true},
        {text:'温度设置',component:'tmpStyle',show:true},
        {text:'语言设置',component:'LanguageStyle',show:true},
        {text:'温度感受',component:'feelShow',show:true}
    ]
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type){
        case SWITCH:
            console.log(action.index)
            return Object.assign({},state,{
                ComponentState:state.ComponentState.map((value,index) => {
                    if(index === action.index){
                        return Object.assign({},value,{
                            show:!value.show
                        })
                    }
                    return value
                })
            })
        default:
            return state
            alert(11)
    }
}

