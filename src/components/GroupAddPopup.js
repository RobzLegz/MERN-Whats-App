import React from 'react'
import styled from 'styled-components';

const GroupAddPopup = ({setGroupName, setGroupIcon, groupIcon, groupName}) => {
    return (
        <StyledGroupPopup>
            <StyledInnerPopup>
                <input type="text" placeholder="Name of your group"/>
                <input type="url"placeholder="Group icon URL" />
                <button type="submit">OK</button>
            </StyledInnerPopup>
        </StyledGroupPopup>
    )
}
const StyledGroupPopup = styled.div`
    position:absolute;
    width:100%;
    height: 100vh;
    display:grid;
    place-items:center;
    background: rgba(0,0,0,0.3);
    top:0;
    left:0;
`;
const StyledInnerPopup = styled.form`
    width: 30%;
    height:50%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    >input{
        width: 80%;
        height: 40px;
        margin:20px 0;
        outline: none;
        font-size: 16px;
        padding: 0 10px;
    }
    >button{
        width: 100px;
        height: 40px;
        background: #4BEC68;
        color: #fff;
        font-size: 1rem;
        font-weight: 900;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;

export default GroupAddPopup
