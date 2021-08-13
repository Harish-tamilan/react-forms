import useInput from "../hooks/use-input-reducer";

const BasicForm = (props) => {

  const {
    value:fname,
    valueIsValid:fnameIsValid, 
    valueInputIsInvalid:fnameInputIsInvalid,
    valueChangeHandler:fnameChangeHandler,
    valueBlurHandler:fnameBlurHandler,
    submitHandler: fnameSubmitHandler
  } = useInput((val)=>val.trim().length>0);

  const {
    value:lname,
    valueIsValid:lnameIsValid, 
    valueInputIsInvalid:lnameInputIsInvalid,
    valueChangeHandler:lnameChangeHandler,
    valueBlurHandler:lnameBlurHandler,
    submitHandler: lnameSubmitHandler
  } = useInput((val)=>val.trim().length>0);

  const {
    value:email,
    valueIsValid:emailIsValid, 
    valueInputIsInvalid:emailInputIsInvalid,
    valueChangeHandler:emailChangeHandler,
    valueBlurHandler:emailBlurHandler,
    submitHandler: emailSubmitHandler
  } = useInput((val)=>val.includes('@'));

  const formSubmissionHandler = (event)=>{
    event.preventDefault();
    console.log('inside formSubmissionHandler');
    if(fnameInputIsInvalid && lnameInputIsInvalid)
      return;

    fnameSubmitHandler();
    lnameSubmitHandler();
    emailSubmitHandler();
  }

  let formIsValid = fnameIsValid && lnameIsValid && emailIsValid;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={fnameChangeHandler} onBlur={fnameBlurHandler}/>
          {fnameInputIsInvalid && <p className='error-text'>Please enter a valid fname.</p>}
          
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lnameChangeHandler} onBlur={lnameBlurHandler}/>
          {lnameInputIsInvalid && <p className='error-text'>Please enter a valid lname.</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailInputIsInvalid && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
