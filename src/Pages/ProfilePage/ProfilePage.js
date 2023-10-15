import React, { useEffect, useState } from 'react';

import './ProfilePage.css';
import Logo from '../../Components/Logo/Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';

import { faSquarePlus, faUser } from '@fortawesome/free-regular-svg-icons';
import NavBar from '../../Components/NavBar/NavBar';

function ProfilePage() {

  return (
    <div className='wrapper ProfilePage-Wrapper'>
      <NavBar />
    </div>
  )
}

export default ProfilePage