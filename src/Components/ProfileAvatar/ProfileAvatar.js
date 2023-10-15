import React, { useState } from 'react';

import './ProfileAvatar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function ProfileAvatar(props) {

  const userClassName = `${props.userClassName} ProfileAvatar-User`;
  const defaultClassName = `${props.defaultClassName} ProfileAvatar-Default`  

  const [userAvatarBase64, setUserAvatarBase64] = useState('');
  
  return (
    <>
        {userAvatarBase64 ? 
        (<>
          <img src={`data:image/jpeg;base64,${userAvatarBase64}
`} alt='User Avatar'className={userClassName} />
      </>)
      : (
        <>
          <div className={defaultClassName}>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </>
      )}
    </>
  )
}

export default ProfileAvatar