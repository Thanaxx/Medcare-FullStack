import React, {useState} from 'react'
import LogoutModal from './LogoutModal';
import {LogoutBox} from './Logoutstyle'

function Logout() {

    const [showLogout, setShowLogout] = useState(false);

    const show = () => {
        setShowLogout(true);
    }

    return (
        <>
          <LogoutBox>
                <div className='logBtn'>
                    <button onClick={show}>
                        <h4>LOGOUT</h4>
                    </button>
                </div>
          </LogoutBox>

          <LogoutModal showLogout={showLogout} setShowLogout={setShowLogout} />
        </>
    )
}

export default Logout