import React from 'react';

import './ProfilePage.css';
import NavBar from '../../Components/NavBar/NavBar';
import ProfileAvatar from '../../Components/ProfileAvatar/ProfileAvatar';
import IconButton from '../../Components/Buttons/IconButton/IconButton';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import UserStatsButton from '../../Components/Buttons/UserStatsButton/UserStatsButton';

import ProjectList from '../../Components/Lists/ProjectList';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'

function ProfilePage({ userData }) {

  const navigate = useNavigate();

  const OnProjectsClicked = () => {

  }

  const OnCollaborationsClicked = () => {

  }



  return (
    <div className='wrapper ProfilePage-Wrapper'>
      <NavBar userFullName={userData.fullname}
              userMajor={userData.major} />
      <div className='ProfilePage-ContentContainer'>
        <div className='ProfilePage-Content'>
          <div className='ProfilePage-ProfileHeader'>
            <div className='ProfilePage-UserAvatarContainer'>
              <ProfileAvatar userClassName='ProfilePage-UserAvatar' defaultClassName='ProfilePage-DefaultUserAvatar' />
            </div>
            <div className='ProfilePage-UserFullNameContainer'>
              <p className='heading-3 ProfilePage-UserFullName'>{userData.fullname}</p>
              <IconButton icon={faPen} className='ProfilePage-EditProfile' onClick={() => {navigate('/EditProfile')}}/>
            </div>
            <div className='ProfilePage-UserInformationContainer'>
              <p className='paragraph-1 ProfilePage-UserMajor'>{userData.major}</p>
              <p className='paragraph-1 ProfilePage-UserSchool'>@ {userData.school}</p>
            </div>
          </div>
          <div className='ProfilePage-ProfileSocialStats'>
            <UserStatsButton StatsCounter={6} StatsTitle={'Projects'} onClick={OnProjectsClicked} />
            <UserStatsButton StatsCounter={2} StatsTitle={'Collaborations'} onClick={OnCollaborationsClicked} />
            <UserStatsButton StatsCounter={8} StatsTitle={'Followers'} onClick={()=>{}} />
          </div>
          <ProjectList className='ProfilePage-ProjectListContainer'/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.user.userData,
});

export default connect(mapStateToProps)(ProfilePage)