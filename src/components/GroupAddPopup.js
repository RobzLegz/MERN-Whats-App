import React from 'react'
import styled from 'styled-components';
import db from '../firebase';

const GroupAddPopup = ({setPopupState, setGroupName, setGroupIcon, groupIcon, groupName}) => {

    const exitPopup = (e) => {
        e.preventDefault();
        setPopupState(false);
    }

    const submitRoomInfo = (e) => {
        if (groupName){
            db.collection("groups").add({
                groupName: groupName,
                groupIcon: groupIcon,
            });
            setGroupName("");
            setGroupIcon("");
            exitPopup(e);
        }
        return;        
    }

    return (
        <StyledGroupPopup>
            <StyledInnerPopup>
                <input value={groupName} onChange={(e) => setGroupName(e.target.value)} required type="text" placeholder="Name of your group"/>
                <input value={groupIcon} onChange={(e) => setGroupIcon(e.target.value)} type="url"placeholder="Group icon URL" />
                <button onClick={submitRoomInfo} className="submit__button" type="submit">OK</button>
                <button onClick={exitPopup} className="cancel__button">Cancel</button>
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
    z-index: 100;
`;
const StyledInnerPopup = styled.form`
    width: 30%;
    height:50%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    position: relative;
    >input{
        width: 80%;
        height: 40px;
        margin:20px 0;
        outline: none;
        font-size: 16px;
        padding: 0 10px;
    }
    >.submit__button{
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
    >.cancel__button{
        width: 100px;
        height: 40px;
        background: #ec6035;
        color: #fff;
        font-size: 1rem;
        font-weight: 900;
        border: none;
        outline: none;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
    }   
`;

export default GroupAddPopup
