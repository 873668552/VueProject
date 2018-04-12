import Vue from 'vue'

Vue.filter('change',function(value){
    return Object.keys(value)[0];
    // console.log(Object.keys(value))
})