import React, { useState } from 'react';

import './NavBar.css'

import Logo from '../../Components/Logo/Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';

import { faBell, faIdBadge, faSquarePlus, faUser } from '@fortawesome/free-regular-svg-icons';
import NavBarButton from '../Buttons/NavBarButton/NavBarButton';
import IconButton from '../Buttons/IconButton/IconButton';

function NavBar() {
  const [userAvatarBase64, setUserAvatarBase64] = useState('');
  return (
    <div className='NavBar-Container'>
        <div className='NavBar-TopContainer'>
          <div className='NavBar-UserProfileContainer'>
            <div className='NavBar-UserAvatarContainer'>
              {userAvatarBase64 ? 
                (<>
                  <img src={`data:image/jpeg;base64,${userAvatarBase64}
  `} alt='User Avatar'className='NavBar-UserAvatar'/>
              </>)
              : (
                <>
                  <div className='NavBar-DefaultUserAvatar'>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                </>
              )}
            </div>
            <div className='NavBar-UserInformationContainer'>
              <p className='heading-3 NavBar-UserName'>Walker Tran</p>
              <p className='paragraph-1 NavBar-UserMajor'>Computer Science</p>
            </div>
          </div>
          <div className='NavBar-SearchBoxContainer'>
            <FontAwesomeIcon icon={faSearch} className="NavBar-SearchIcon" />
            <input type='text' placeholder='Search other profiles...' className='NavBar-SearchBox'/>
          </div>
          <NavBarButton icon={faSquarePlus} title='Post Project' onClick={()=>{}}/>
          <NavBarButton icon={faBell} title='Notifications'onClick={()=>{}}/>
          <NavBarButton icon={faIdBadge} title='Profile' onClick={()=>{}}/>
        </div>
        <div className='NavBar-BottomContainer'>
          <div className='NavBar-LogoContainer'>
            <Logo className='NavBar-Logo'/>
            <p className='paragraph-2'><em>"Projects by Peers, Passion in Progress."</em></p>
          </div>
          <IconButton icon={faArrowRightFromBracket}/>
        </div>
    </div>
  )
}

export default NavBar