import {useState} from 'react';

const useInput = (validate)=>{
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState();

    const enteredValueIsValid = validate(value);
    const valueInputIsInvalid = isTouched && !enteredValueIsValid;

    const valueChangeHandler = (event)=>{
        event.preventDefault();
        setValue(event.target.value);
    }

    const valueBlurHandler = (event)=>
    {
        event.preventDefault();
        setIsTouched(true);
    }

    const reset = ()=>{
        console.log(value);
        setValue('');
        setIsTouched(false);
    }
    
    return {value,enteredValueIsValid, valueInputIsInvalid, valueChangeHandler, valueBlurHandler, reset};
};

export default useInput;