import React, { useState } from 'react';

import './EditProfilePage.css';
import NavBar from '../../Components/NavBar/NavBar';
import ProfileAvatar from '../../Components/ProfileAvatar/ProfileAvatar';
import StandardTextInputField from '../../Components/InputFields/StandardTextInputField';
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton';

import { useNavigate } from 'react-router-dom';

function EditProfilePage() {

  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  
  const [errorMessage, setErrorMessage] = useState('');

  //populate
  const [userInformation, setUserInformation] = useState ({
    encodePhoto: '',
    fullname: '',
    major: '',
    school: '',
    email: '',
  });

  const requestBody = {
    encodePhoto: userInformation.encodePhoto,
    fullName: userInformation.fullname,
    major: userInformation.major,
    school: userInformation.school,
    email: userInformation.email,
    photoOGWidth: '',
    photoOGHeight: '',
  };

  const HandleInputChange = (propertyName, inputValue) => {
    if (isError) {
      setIsError(false);
    }
    setUserInformation({...userInformation, [propertyName]: inputValue});
  }

  const OnUpdate = () => {
    if (IsValid()) {
      console.log(requestBody);
      navigate('/Profile');
    }
  }

  const IsValid = () => {
    if (!userInformation.encodePhoto || !userInformation.fullname || !userInformation.major
      || !userInformation.school || !userInformation.email) {
      setIsError(true);
      setErrorMessage('All fields are required.');
      return false;
    }
    setErrorMessage('');
    return true;
  }

  return (
    <div className='wrapper EditProfilePage-Wrapper'>
      <NavBar />
      <div className='EditProfilePage-ContentContainer'>
        <div className='EditProfilePage-Content'>
          <p className='heading-1 EditProfilePage-Title'>Edit Profile</p>
          <div className='EditProfilePage-UserAvatarContainer'>
              <ProfileAvatar userClassName='EditProfilePage-UserAvatar' defaultClassName='EditProfilePage-DefaultUserAvatar' />
          </div>
          {isError && (
          <>
            <p className='paragraph-2 EditProfilePage-ErrorMessage'>{errorMessage}</p>
          </>
        )}
          <div className='EditProfilePage-EditForm'>
            <StandardTextInputField placeholder='Full Name'
                                    name='fullname'
                                    onChange={HandleInputChange}/>
            <StandardTextInputField placeholder='Major'
                                    name='major'
                                    onChange={HandleInputChange}/>
            <StandardTextInputField placeholder='School/University'
                                    name='school'
                                    onChange={HandleInputChange}/>
            <StandardTextInputField placeholder='Email Address'
                                    name='email'
                                    onChange={HandleInputChange}/>
          </div>

          <StandardButton title='Update' onClick={OnUpdate} className='EditProfilePage-Update'/>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage