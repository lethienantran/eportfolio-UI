import React from 'react';

import './EditProfilePage.css';
import NavBar from '../../Components/NavBar/NavBar';
import ProfileAvatar from '../../Components/ProfileAvatar/ProfileAvatar';
import StandardTextInputField from '../../Components/InputFields/StandardTextInputField';
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton';

import { useNavigate } from 'react-router-dom';

function EditProfilePage() {

  const navigate = useNavigate();

  const OnUpdate = () => {
    navigate('/Profile');
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
          <div className='EditProfilePage-EditForm'>
            <StandardTextInputField placeholder='Full Name'/>
            <StandardTextInputField placeholder='Major'/>
            <StandardTextInputField placeholder='School/University'/>
            <StandardTextInputField placeholder='Email Address'/>
          </div>
          <StandardButton title='Update' onClick={OnUpdate}/>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage