import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ProfileAvatar from '../../Components/ProfileAvatar/ProfileAvatar';
import IconButton from '../../Components/Buttons/IconButton/IconButton';
import './ProjectPostPage.css';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Project_PlaceHolder from '../../Assets/Images/Project_TheOuterBase.png';
import CollaboratorList from '../../Components/Lists/CollaboratorList/CollaboratorList';

function ProjectPostPage() {
  return (
    <div className='wrapper ProjectPostPage-Wrapper'>
      <NavBar />
      <div className='ProjectPostPage-ContentContainer'>
        <div className='ProjectPostPage-Content'>
          <div className='ProjectPostPage-PostHeader'>
            <div className='ProjectPostPage-AuthorInformationContainer'>
              <ProfileAvatar userClassName='ProjectPostPage-UserAvatar' defaultClassName='ProjectPostPage-DefaultUserAvatar' />
              <div className='ProjectPostPage-AuthorInformation'>
                <p className='heading-3 ProjectPostPage-AuthorName'>Walker Tran</p>
                <p className='paragraph-1 ProjectPostPage-PostedDate'>2 days ago</p>
              </div>
            </div>
            <IconButton icon={faHeart} className='ProjectPostPage-Love'/>
          </div>
          <div className='ProjectPostPage-PostBannerContainer'>
            <img src={Project_PlaceHolder} alt='Project Banner'className='ProjectPostPage-PostBanner'/>
          </div>
          <div className='ProjectPostPage-PostContentContainer'>
            <p className='heading-3 ProjectPostPage-PostTitle'>The Outer Base</p>
            <div className='ProjectPostPage-ProjectDescriptionContainer'>
              <p className='paragraph-1 ProjectDescription'>A 2D sci-fi top down pixel game built on a self-designed planet renovation story line in which humanity will eventually fly to another planet for life after the Earth's destruction. Upon landing this liveable planet - the Oatis, they met another alien civilization living here. Even though it is a planet with civilization, however, the life quality here and the infrastructure of the cities here has not advanced to high-level technology as humanity. In order to stay alive, humanity had decided to live and grow with the Oatisians, help them achieve higher life quality. The player will be part of the community that helps the Oatisian rebuild and improve the planet, farming, building business, amusement centers, or renovating and rebuilding cities, exporing new areas and adventure quests.</p>
            </div>
            <p className='heading-3 ProjectPostPage-PostTitle'>Collaborators</p>
              <CollaboratorList userClassName='ProjectPostPage-UserAvatar' defaultClassName='ProjectPostPage-DefaultUserAvatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPostPage