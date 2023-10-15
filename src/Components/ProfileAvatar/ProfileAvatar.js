import React, { useState } from 'react';

import './ProfileAvatar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import Avatar_Placeholder from '../../Assets/Images/Avatar_WalkerTran.JPG'

function ProfileAvatar(props) {

  const userClassName = `${props.userClassName} ProfileAvatar-User`;
  const defaultClassName = `${props.defaultClassName} ProfileAvatar-Default`  

  const [userAvatarBase64, setUserAvatarBase64] = useState('');
  
  return (
    <>
        {userAvatarBase64 ? 
        (<>
          <button className='ProfileAvatar-Container' onClick={props.onClick}>
            <img src={`data:image/jpeg;base64,${userAvatarBase64}
`} alt='User Avatar'className={userClassName} />
          </button>
      </>)
      : (
        <>
          <button className='ProfileAvatar-Container' onClick={props.onClick}>
            <div className={defaultClassName}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </button>
        </>
      )}
    </>
  )
}

export default ProfileAvatar