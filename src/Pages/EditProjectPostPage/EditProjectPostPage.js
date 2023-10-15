import React from 'react';

import './EditProjectPostPage.css';
import StandardDropDown from '../../Components/DropDowns/StandardDropDown/StandardDropDown';

import NavBar from '../../Components/NavBar/NavBar';
import IconButton from '../../Components/Buttons/IconButton/IconButton';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import StandardButton from '../../Components/Buttons/StandardButton/StandardButton';
import StandardTextInputField from '../../Components/InputFields/StandardTextInputField';
import StandardTextAreaInputField from '../../Components/InputFields/StandardTextAreaInputField/StandardTextAreaInputField';

function EditProjectPostPage() {
  return (
    <div className='wrapper EditPostProjectPage-Wrapper'>
      <NavBar />
      <div className='EditPostProjectPage-ContentContainer'>
        <div className='EditPostProjectPage-Content'>
          <p className='heading-1 EditPostProjectPage-Title'>Edit Your Project</p>
          <div className='EditPostProjectPage-UploadPhotoContainer'>
            <IconButton icon={faImage} className='EditPostProjectPage-UploadPhoto'onClick={()=>{}}/>
          </div>
          <div className='EditPostProjectPage-Form'>
            <StandardTextInputField placeholder='Project Title'/>
            <StandardDropDown placeholder='Add Collaborators' isMulti={true}/>
            <StandardTextAreaInputField placeholder='Project Description' />
          </div>
          <StandardButton title='Update' onClick={()=>{}} className='EditPostProjectPage-Post'/>
          <StandardButton title='Delete' onClick={()=>{}} />
        </div>
      </div>
      
    </div>
  )
}

export default EditProjectPostPage