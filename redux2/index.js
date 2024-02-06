const { configureStore, combineReducers,applyMiddleware } = require("@reduxjs/toolkit")
// const { createStore } = require("redux")
const logger=require("redux-logger")

const initialState = {
    numOfLaptops: 100
}



const initialMobile = {
    numOfLaptops: 100
}

const buyLaptop = () => {
    return {
        type: "BUY_LAPTOP"
    }
}

const buyMobile = () => {
    return {
        type: "BUY_MOBILE"
    }
}

const laptopreducer = (state = initialState, action) => {
    // if(action.type==="BUY_LAPTOP"){
    //     return{numOfLaptops:state.numOfLaptops-1}
    // }else{
    //     return state;
    // }

    switch (action.type) {
        case "BUY_LAPTOP":
            return { numOfLaptops: state.numOfLaptops - 1 }
        default:
            return state;
    }

}


const mobilereducer = (state = initialMobile, action) => {

switch (action.type) {
    case "BUY_MOBILE":
        return { numOfMobiles: state.numOfLaptops - 1 }
    default:
        return state;
}

}

const rootReducer=combineReducers({laptopreducer,mobilereducer});
const store=configureStore({reducer:rootReducer,reducer:applyMiddleware(logger)});
//console.log(store)
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
