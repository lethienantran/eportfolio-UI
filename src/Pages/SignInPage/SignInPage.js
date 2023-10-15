import React, { useState } from 'react';
import StandardTextInputField from '../../Components/InputFields/StandardTextInputField'

import './SignInPage.css';

import StandardTextButton from '../../Components/Buttons/StandardTextButton/StandardTextButton';
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton';
import Logo from '../../Components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

function SignInPage() {

  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  
  const [errorMessage, setErrorMessage] = useState('');

  const [userInformation, setUserInformation] = useState ({
    username: '',
    password: '',
  });

  const requestBody = {
    username: userInformation.username,
    password: userInformation.password,
  };

  const HandleInputChange = (propertyName, inputValue) => {
    if (isError) {
      setIsError(false);
    }
    setUserInformation({...userInformation, [propertyName]: inputValue});
  }

  const NavigateSignUp = () => {
    navigate('/SignUp');
  }

  const OnSignIn = () => {
    if(IsValid()){
      console.log(requestBody);
      navigate('/Profile');
    }
  }

  const IsValid = () => {
    if (!userInformation.username || !userInformation.password) {
      setIsError(true);
      setErrorMessage('Please enter username or password.');
      return false;
    }
    setErrorMessage('');
    return true;
  }

  return (
    <div className='wrapper SignInPage-Wrapper'>
      <div className='SignInPage-FormContainer'>
        <Logo className='SignInPage-Logo'/>
        <div className='SignInPage-InputFieldsContainer'>
          <StandardTextInputField placeholder='Username' 
                                  name='username'
                                  onChange={HandleInputChange}/>
          <StandardTextInputField placeholder='Password' 
                                  name='password'
                                  type='password'
                                  onChange={HandleInputChange}/>
        </div>
        {isError && (
          <>
            <p className='paragraph-2 SignInPage-ErrorMessage'>{errorMessage}</p>
          </>
        )}
        <div className='SignInPage-PromptContainer'>
            <p className='paragraph-2'>Don't have an account?</p>
            <StandardTextButton text='Sign Up' onClick={NavigateSignUp}/>
        </div>
        <StandardButton title='Sign In' onClick={OnSignIn}/>
      </div>
    </div>
  )
}

export default SignInPage 