import { CHANGE_PASSWORD,CHANGE_USERNAME,CHANGE_KEY,ADD} from './const'
function returnStr(){
    return (Math.random()*1000 >>0) + '00000'
}
function inArray(obj,arr){
//   arr.forEach( (item)=> {
//       if(item.name === val){
//           return true;
//       }
//   })
    for(let i = 0,len = arr.length;i<len;i++){
        if(arr[i].name == obj.name ){
            return true;
        }
    }
  return false;
}
function logConfig(obj,arr){

    // arr.forEach( (item)=> {
    //     console.log(item.name,obj.name)
    //     if(item.name == obj.name && item.word == obj.word){
    //         console.log(123)
    //         return true
    //     }
    // })
    for(let i = 0,len = arr.length;i<len;i++){
        if(arr[i].name == obj.name && arr[i].word == obj.word ){
            return true;
        }
    }
    return false;
}
export default {
    // 解构 $store 中的commit
    sendMsg($store,obj){
        setTimeout( ()=> {
            console.log($store.state.newUer)
            if( logConfig( {name:obj.name,word:obj.word} , $store.state.newUer) ){
                $store.commit(CHANGE_PASSWORD,obj.name)
                $store.commit(CHANGE_USERNAME,obj.word)
                $store.commit(CHANGE_KEY,{key:'title',value:obj.name})
                obj.getRes(true)
            }else{
                obj.getRes(false)
            }
        },1000)
    },
    regUser($store,obj){
        setTimeout( ()=> {
            console.log($store)
            if(obj.name == ''){
                return false;
            }
            if(inArray(obj.name,$store.state.newUer)){
                obj.getRes(false)
            }else{
                // 保存成功
                $store.commit(CHANGE_KEY,{key:'title',value:obj.name});
                $store.commit(ADD,{name:obj.name,word:obj.word});
                obj.getRes(true)
            }
        },1000)
    },
}