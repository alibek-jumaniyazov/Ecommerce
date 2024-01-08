import React from 'react'

export default function JoinedUser() {
    return (
    <div className='JoinedUser'>
        <div className="joinderUser-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="#C7E1FF"/>
  <mask id="mask0_235_4822" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-1" y="-1" width="46" height="46">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="white" stroke="white"/>
  </mask>
  <g mask="url(#mask0_235_4822)">
    <path d="M17.1512 33.8012L11.3456 36.9234C11.0049 37.1065 8.31186 38.1996 8.02698 38.445C13.4142 42.5016 18.1688 43.4054 22.9428 43.4054C27.6815 43.4054 32.895 40.8254 36.2702 38.05C35.9589 37.7908 34.7485 37.1485 34.3741 36.9647L28.1573 33.9004C27.3541 33.5044 26.8467 32.6951 26.8467 31.8097V29.4049C27.0215 29.2088 27.2212 28.9568 27.4348 28.6593C28.2821 27.4794 28.9231 26.1814 29.3673 24.8197C30.1647 24.5772 30.7521 23.8512 30.7521 22.9883V20.4213C30.7521 19.8567 30.4973 19.3521 30.1016 18.9988V15.2881C30.1016 15.2881 30.8747 9.51355 22.9428 9.51355C15.0109 9.51355 15.784 15.2881 15.784 15.2881V18.9988C15.3876 19.3521 15.1335 19.8567 15.1335 20.4213V22.9883C15.1335 23.6644 15.494 24.2594 16.0337 24.6033C16.6842 27.3954 18.3876 29.4049 18.3876 29.4049V31.7504C18.3869 32.6046 17.9126 33.3915 17.1512 33.8012Z" fill="white"/>
  </g>
</svg>
            <div className="joined-header__infos">
                <p>Hi, user</p>
                <span>let's get stated</span>
            </div>
        </div>
            <div className="joined-buttons">
                <button>Join now</button>
                <button>Log in</button>
            </div>
    </div>
  )  
}