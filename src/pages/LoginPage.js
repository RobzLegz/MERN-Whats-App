import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';
import useStateValue from '../StateProvider';

const LoginPage = () => {

    const [{user}, dispatch] = useStateValue();

    const login = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: "SET_USER",
                user: result.user,
            });
        }).catch((error) => alert(error.message));
    }

    return (
        <StyledLogin>
            <StyledLoginWindow>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="logo"/>
                <Button onClick={login}>Sign In</Button>
            </StyledLoginWindow>
        </StyledLogin>
    )
}
const StyledLogin = styled.div`
    width: 100%;
    height:100vh;
    display: grid;
    place-items: center;
    background-color:#ededed;
`;
const StyledLoginWindow = styled.div`
    width: 500px;
    height: 500px;
    background-color:#fff;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    >img{
        width: 200px;
        margin-bottom: 100px;
    }
    >button{
        width: 100px;
        height: 40px;
        background-color:#43C553;
        color:#fff;
        font-size:1rem;
        :hover{
            background-color:#2FB944;
        }
    }
`;

export default LoginPage
