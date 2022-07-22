const redux=require('redux');


const counterReduer=(state={counter:0},action)=>{

    if (action.type=='decrement')
    {
        return{
            counter:state.counter-1
        }
    }
else
    return{
        counter:state.counter+1
    };

}
const store=redux.createStore(counterReduer);


const counterSubsriber=()=>{
    const latestState=store.getState();
    console.log(latestState);
}

store.subscribe(counterSubsriber);

store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});