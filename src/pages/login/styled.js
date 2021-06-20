import styled from "styled-components";

export const ContainerMain = styled.div 
`
    body
    {
        background-color: white;
        height: 100%;
    }
    

    
    
    .container-main
    {
        margin-top: 10%;
        width: 80%;
        height: 560px;
        background-image:  radial-gradient(ellipse farthest-corner at 105px 104px , #75dbfa, #4365cc, #2d66b5, #f77ced, #8f00ff);
        border-radius: 0% 10% 10% 10%;
    }

    .login-google
    {
        margin-top: 1%;
        padding-top: 1%;
        height: 55px;
        border-radius: 0% 50px 50px 50px;
        background-color: #a3daf0;
        color: black;
        text-transform: none;
        font-size: 16px; 
        font-weight: bold;
        vertical-align: middle;
    }

    .icon-login-google
    {
        padding-right: 1%;
        vertical-align: middle;
    }
    

    .btn-log-in
    {
        border-radius: 0% 50px 50px 50px;
        height: 50px;
        background-color: black;
    }

    
    .sign-up-grid
    {
        margin-top: 2%;
    }

    .sign-up-message
    {
        color: black;
    }


    `;