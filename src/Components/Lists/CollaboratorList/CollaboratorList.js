import React from 'react'

import ProfileAvatar from '../../ProfileAvatar/ProfileAvatar'

function CollaboratorList(props) {
  const className = `${props.className} CollaboratorList-Container`
  return (
    <div className={className}>
        <ProfileAvatar userClassName={props.userClassName} defaultClassName={props.defaultClassName} />
    </div>
  )
}

export default CollaboratorList