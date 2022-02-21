import styled from "styled-components";

export const FormWrapper = styled.div`
    min-height: auto;
`;

export const FormContainer = styled.div`
    width: 60%;
    margin: 20px auto;
    padding: 20px 40px;
    border-radius: 3px;
    background-color: #ECECEC;

    @media screen and (max-width: 1050px){
        width: 90%;
        padding: 10px;
    }
`;

export const FormHeader = styled.div`
    h1{
        color: gray;
    }
`;

export const FormBody = styled.div`

`;

export const Forms = styled.div`
            width: 100%;
        margin: auto;

        input, select{
            width: 47%;
            padding: 10px 3px;
            margin: 7px;
            background-color: transparent;
            border: 1px solid #D2D2D2;
            outline: none;
            border-radius: 4px;

            @media screen and (max-width: 1050px){
                width: 97%;
            }
        }

        input[type="email"], input[type="password"], input[type="address"]{
            width: 97%;
            padding: 10px 3px;
        }

        input[type="password"]{
            margin-bottom: 20px;
        }

        Button{
            margin: 20px 10px;
        }
`;
export const ApptBtn = styled.div`
    text-align: right;

    button{
        background-color: #4A90E2;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid #fff;
        padding: 10px 15px;
        font-size: 17px;

        :hover{
            color: #4A90E2;
            background-color: #fff;
            border: 1px solid #4A90E2;
        }
    }
`;

// Appointments display style
export const Appointments = styled.div`

    .appA{
        background-color: #D2D2D2;
        margin: 20px;
    }

`;


// <Appointments> 
// {appList.map((app, key) => {
//     return(
//         <>
//             <div key={key} className="appA">
//                 <p>{app.fname}</p>
//                 <p>{app.lname}</p>
//                 <p>{app.mobile}</p>
//                 <p>{app.gender}</p>
//                 <p>{app.birthday}</p>
//                 <p>{app.health}</p>
//                 <p>{app.address}</p>
//                 <p>{app.email}</p>
//                 <button onClick={() => {deleteAppt(app.id)}}>DELETE</button>
//             </div>
//         </>
//     )
// })}

// </Appointments>