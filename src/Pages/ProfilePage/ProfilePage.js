import React, { useEffect, useState } from 'react';

import './ProfilePage.css';
import NavBar from '../../Components/NavBar/NavBar';
import ProfileAvatar from '../../Components/ProfileAvatar/ProfileAvatar';
import IconButton from '../../Components/Buttons/IconButton/IconButton';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import UserStatsButton from '../../Components/Buttons/UserStatsButton/UserStatsButton';

import ProjectList from '../../Components/Lists/ProjectList';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import { API } from '../../Constants';

function ProfilePage({ userData }) {

  const navigate = useNavigate();

  const apiURL = `/api/users/${userData.userId}/information`;

  const [userProfileData, setUserProfileData] = useState({});

  const [projectListsData, setProjectListsData] = useState([]);

  const OnCollaborationsClicked = () => {
    setProjectListsData(userProfileData.collaborateProjects);
  }

  const OnProjectsClicked = () => {
    setProjectListsData(userProfileData.personalProjects);
  }

  useEffect(()=> {
    axios
      .get(apiURL, {
        headers: {
          'X-API-KEY': API.key,
        }
      })
      .then(response => {
        const JSONFormat = JSON.stringify(response.data.responseObject);
        setUserProfileData(JSON.parse(JSONFormat));
      })
  }, [apiURL]);

  useEffect(()=> {
    setProjectListsData(userProfileData.personalProjects);
  }, [userProfileData]);

  return (
    <div className='wrapper ProfilePage-Wrapper'>
      <NavBar />
      <div className='ProfilePage-ContentContainer'>
        <div className='ProfilePage-Content'>
          <div className='ProfilePage-ProfileHeader'>
            <div className='ProfilePage-UserAvatarContainer'>
              <ProfileAvatar userClassName='ProfilePage-UserAvatar' defaultClassName='ProfilePage-DefaultUserAvatar' userAvatar={userProfileData?.userImage?.photoEncode64}/>
            </div>
            <div className='ProfilePage-UserFullNameContainer'>
              <p className='heading-3 ProfilePage-UserFullName'>{userProfileData.fullname}</p>
              <IconButton icon={faPen} className='ProfilePage-EditProfile' onClick={() => {navigate('/EditProfile')}}/>
            </div>
            <div className='ProfilePage-UserInformationContainer'>
              <p className='paragraph-1 ProfilePage-UserMajor'>{userProfileData.major}</p>
              <p className='paragraph-1 ProfilePage-UserSchool'>@ {userProfileData.school}</p>
            </div>
          </div>
          <div className='ProfilePage-ProfileSocialStats'>
            <UserStatsButton StatsCounter={userProfileData.personalProjects?.length || 0} StatsTitle={'Projects'} onClick={OnProjectsClicked} />
            <UserStatsButton StatsCounter={userProfileData.collaborateProjects?.length || 0} StatsTitle={'Collaborations'} onClick={OnCollaborationsClicked} />
            <UserStatsButton StatsCounter={userProfileData.userFollowers?.length || 0} StatsTitle={'Followers'} onClick={()=>{}} />
          </div>
          <ProjectList className='ProfilePage-ProjectListContainer' ProjectListsData={projectListsData}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.user.userData,
});

export default connect(mapStateToProps)(ProfilePage)