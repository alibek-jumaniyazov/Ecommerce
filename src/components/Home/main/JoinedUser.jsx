import React from 'react'
import avatar from '../../../assets/icons/Avatar.png'

export default function JoinedUser() {
  return (
    <div className='JoinedUser'>
      <div className="joinderUser-header">
        <img src={avatar} alt="" />
        <div className="joined-header__infos">
          <p>Hi, user</p>
          <p>let's get stated</p>
        </div>
      </div>
      <div className="joined-buttons">
        <button className='joinNow'>Join now</button>
        <button className='joinNow login'>Log in</button>
      </div>
    </div>
  )
}