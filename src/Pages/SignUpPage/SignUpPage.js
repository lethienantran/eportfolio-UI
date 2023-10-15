import React from 'react';
import Logo from '../../Components/Logo/Logo';
import StandardTextInputField from '../../Components/InputFields/StandardTextInputField';
import StandardTextButton from '../../Components/Buttons/StandardTextButton/StandardTextButton';
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton';

import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {

  const navigate = useNavigate();
  
  const NavigateSignIn = () => {
    navigate('/');
  }

  const OnSignUp = () => {
    
  }

  return (
    <div className='wrapper SignUpPage-Wrapper'>
      <div className='SignUpPage-FormContainer'>
        <Logo className='SignUpPage-Logo'/>
        <div className='SignUpPage-HeadlineContainer'>
          <p className='paragraph-2'>Sign up to showcase and catch up with other projects by your peers!</p>
        </div>
        <div className='SignUpPage-InputFieldsContainer'>
          <StandardTextInputField placeholder='Email Address'/>
          <StandardTextInputField placeholder='Full Name'/>
          <StandardTextInputField placeholder='School/University'/>
          <StandardTextInputField placeholder='Major'/>
          <StandardTextInputField placeholder='Username'/>
          <StandardTextInputField placeholder='Password'/>
        </div>
        <div className='SignUpPage-PromptContainer'>
          <p className='paragraph-2'>Already have an account?</p>
          <StandardTextButton text='Sign In' onClick={NavigateSignIn}/>
        </div>
        <StandardButton title='Sign Up' onClick={OnSignUp}/>
      </div>
    </div>
  )
}

export default SignUpPage