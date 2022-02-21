import React from 'react'
import {LogModal} from './Logoutstyle'
import { useHistory } from 'react-router-dom'

function LogoutModal({showLogout, setShowLogout}) {

    let history = useHistory();

    return (
        <>
          {showLogout ? 
        
            <LogModal>
                <p onClick={history.push("/")} >FUDGE</p>
            </LogModal>
        
            : null
        }  
        </>
    )
}

export default LogoutModal
