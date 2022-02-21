import styled from "styled-components";

export const LogoutBox = styled.div`
    margin: 0 1.2em;
    color: white;

    @media screen and (max-width: 1050px){
        margin: auto;
        text-align: center;
    }


    button{
        padding: 0 15px;
        background-color: #4A90E2;
        color: white;
        border: none;
        outline: none;
        font-size: 14px;
        cursor: pointer;
        font-weight: lighter;
        border-radius: 5px;

        @media screen and (max-width: 1050px){
            width: 60%;
            padding: 0;
        }
    }
`

export const Icon = styled.div`
    color: white;
    font-size: 25px;
`;

export const LogModal = styled.div`
    position: absolute;
    top: 65px;
    right: 20px;
    width: 115px;

    p{
        text-align: center;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
    }
`;

// LOGOUT DROPDOWN
// <>
// <LogoutBox onClick={openLogout}>
//       <button>
//           <Icon>
//               <HiUserCircle />
//           </Icon>

//           <h4>Logout</h4>
          
//           <Icon>
//               <IoMdArrowDropdown />
//           </Icon>
//       </button>
// </LogoutBox>

// <LogoutModal showLogout={showLogout} setShowLogout={setShowLogout} />
// </>