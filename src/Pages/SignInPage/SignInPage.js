import React from 'react';
import StandardTextInputField from '../../Components/InputFields/StandardTextInputField'

import './SignInPage.css';

import StandardTextButton from '../../Components/Buttons/StandardTextButton/StandardTextButton';
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton';
import Logo from '../../Components/Logo/Logo';

function SignInPage() {
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
          <StandardTextButton text='Sign Up' onClick={()=>{}}/>
        </div>
        <StandardButton title='Sign In' onClick={()=>{}}/>
      </div>
    </div>
  )
}

export default SignInPage 