import React from 'react';
import StandardTextInputField from '../../Components/InputFields/StandardTextInputField'

import './SignInPage.css';

import StandardTextButton from '../../Components/Buttons/StandardTextButton/StandardTextButton';
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton';
import Logo from '../../Components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

function SignInPage() {

  const navigate = useNavigate();

  const NavigateSignUp = () => {
    navigate('/SignUp');
  }

  const OnSignIn = () => {
    navigate('/Profile');
  }

  return (
    <div className='wrapper SignInPage-Wrapper'>
      <div className='SignInPage-FormContainer'>
        <Logo className='SignInPage-Logo'/>
        <div className='SignInPage-InputFieldsContainer'>
          <StandardTextInputField placeholder='Username'/>
          <StandardTextInputField placeholder='Password'/>
        </div>
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