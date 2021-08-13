import React, {useState, useRef} from "react";
import useInput from '../hooks/use-input-state';
import '../index.css';

const SimpleInput = (props) => {

  const {
    value:name,
    enteredValueIsValid:nameIsValid, 
    valueInputIsInvalid:nameInputIsInvalid,
    valueChangeHandler:nameChangeHandler,
    valueBlurHandler:nameBlurHandler,
    reset: nameSubmitHandler
  } = useInput((val)=>val.trim().length>0);

  const {
    value:email,
    enteredValueIsValid:emailIsValid, 
    valueInputIsInvalid:emailInputIsInvalid,
    valueChangeHandler:emailChangeHandler,
    valueBlurHandler:emailBlurHandler,
    reset: emailSubmitHandler
  } = useInput((val)=>val.includes('@'));

  const formSubmissionHandler = (event)=>{
    event.preventDefault();

    if(nameInputIsInvalid)
      return;
    nameSubmitHandler();
    emailSubmitHandler();
  }

  const nameInputClasses = nameInputIsInvalid
  ? 'form-control invalid'
  : 'form-control';

const emailInputClasses = emailInputIsInvalid
  ? 'form-control invalid'
  : 'form-control';

let formIsValid = nameIsValid && emailIsValid;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};


export default SimpleInput;
