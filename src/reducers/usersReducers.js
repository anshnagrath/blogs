export default (state=[],action)=>{
    //reducer can not return  undefined 
    //reducer can not mutate the orignal state object
    switch(action.type){
        case 'FETCH_USER':
            return [...state,action.payload]
           default:
           return state 
    }
}


