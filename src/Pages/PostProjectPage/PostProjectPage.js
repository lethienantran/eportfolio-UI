import React from 'react';
import './PostProjectPage.css';

import StandardDropDown from '../../Components/DropDowns/StandardDropDown/StandardDropDown';

import NavBar from '../../Components/NavBar/NavBar';
import IconButton from '../../Components/Buttons/IconButton/IconButton';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton';
import StandardTextInputField from '../../Components/InputFields/StandardTextInputField';
import StandardTextAreaInputField from '../../Components/InputFields/StandardTextAreaInputField/StandardTextAreaInputField';

function PostProjectPage() {

  return (
    <div className='wrapper PostProjectPage-Wrapper'>
      <NavBar />
      <div className='PostProjectPage-ContentContainer'>
        <div className='PostProjectPage-Content'>
          <p className='heading-1 PostProjectPage-Title'>Post Your Project</p>
          <div className='PostProjectPage-UploadPhotoContainer'>
            <IconButton icon={faImage} className='PostProjectPage-UploadPhoto'onClick={()=>{}}/>
          </div>
          <div className='PostProjectPage-Form'>
            <StandardTextInputField placeholder='Project Title'/>
            <StandardDropDown placeholder='Add Collaborators' isMulti={true}/>
            <StandardTextAreaInputField placeholder='Project Description' />
          </div>
          <StandardButton title='Post' onClick={()=>{}} />
        </div>
      </div>
    </div>
  )
}

export default PostProjectPage