import React, { useState } from 'react';

import './EditProfilePage.css';
import NavBar from '../../Components/NavBar/NavBar';
import ProfileAvatar from '../../Components/ProfileAvatar/ProfileAvatar';
import StandardTextInputField from '../../Components/InputFields/StandardTextInputField';
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton';

import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import axios from 'axios';
import { API } from '../../Constants';
import { setUserData } from '../../storage';

function EditProfilePage({ userData }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);
  
  const [errorMessage, setErrorMessage] = useState('');

  //populate
  const [userInformation, setUserInformation] = useState ({
    encodePhoto: userData.userImage,
    fullname: userData.fullname,
    major: userData.major,
    school: userData.school,
    email: userData.email,

  });

  const HandleInputChange = (propertyName, inputValue) => {
    if (isError) {
      setIsError(false);
    }
    setUserInformation({...userInformation, [propertyName]: inputValue});
  }

  const OnUpdate = () => {
    if (IsValid()) {
      const requestBody = {
        userId: userData.userId,
        encodePhoto: userInformation.encodePhoto,
        fullname: userInformation.fullname,
        major: userInformation.major,
        school: userInformation.school,
        email: userInformation.email,
        photoOGWidth: '',
        photoOGHeight: '',
      };
      console.log(requestBody);
      axios
        .put(API.editUserInformationURL, requestBody, {
          headers: {
            'X-API-KEY': API.key,
          },
        })
        .then(response => {
          const newUserData = {
            userId: userData.userId,
            fullname: requestBody.fullname,
            major: requestBody.major,
            school: requestBody.school,
            userImage: requestBody.encodePhoto,
            email: requestBody.email,
            username: userData.username,
          }
          dispatch(setUserData(newUserData));
          navigate('/Profile');
        })
        .catch(error => {
          setIsError(true);
          setErrorMessage(error.response.data.message);
        })
    }
  }

  const IsValid = () => {
    if (!userInformation.fullname || !userInformation.major
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
                                    onChange={HandleInputChange}
                                    value={userInformation.fullname}/>
            <StandardTextInputField placeholder='Major'
                                    name='major'
                                    onChange={HandleInputChange}
                                    value={userInformation.major}/>
            <StandardTextInputField placeholder='School/University'
                                    name='school'
                                    onChange={HandleInputChange}
                                    value={userInformation.school}/>
            <StandardTextInputField placeholder='Email Address'
                                    name='email'
                                    onChange={HandleInputChange}
                                    value={userInformation.email}/>
          </div>

          <StandardButton title='Update' onClick={OnUpdate} className='EditProfilePage-Update'/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.user.userData,
});
export default connect(mapStateToProps)(EditProfilePage)