
import { CHANGE_PASSWORD,CHANGE_USERNAME,CHANGE_KEY,ADD} from './const'

export default {
    [CHANGE_PASSWORD](state, val){
        state.password = val;
    },
    [CHANGE_USERNAME](state, val){
        state.username = val;
    },
    [CHANGE_KEY](state,obj){
        state[obj.key] = obj.value;
    },
    [ADD] (state,obj){
        state.newUer.push(obj)
    }
}