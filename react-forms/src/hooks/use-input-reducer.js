import { useReducer } from "react";

const defaultState = {
    value:'',
    isTouched:false
};

const valueReducer = (state,action)=>{
    //console.log('inside valueHandler, ', action.type);
    if(action.type==='change')
    {
        return{
            value:action.value,
            isTouched:state.isTouched
        };
    }
    else if(action.type==='blur')
    {
        //console.log('inside blur in valueReducer');
        return{
            value:state.value,
            isTouched:true
        };
    }
    else if(action.type==='submit')
    {
        return{
            value:'',
            isTouched:false
        };
    }
}

const useInput = (validate)=>
{
    const [state, dispatch] = useReducer(valueReducer, defaultState);

    const valueIsValid = validate(state.value);
    const valueInputIsInvalid = state.isTouched && !valueIsValid;
    
    const valueChangeHandler = (event)=>{
        dispatch({
            type:'change',
            value:event.target.value
        });
    }

    const valueBlurHandler = ()=>{
        //console.log('inside blur handler in useInput');
        dispatch(
        {
            type:'blur'
        });
    }

    const submitHandler = ()=>{
        console.log('inside submithandler, ', state.value);
        dispatch(
            {
                type:'submit'
            });
    }

    return {value:state.value, valueIsValid, valueInputIsInvalid, valueChangeHandler, valueBlurHandler, submitHandler};
}
export default useInput;