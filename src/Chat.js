import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import "./Chat.css";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatsAppBackgroundImage from "./images/whatsappbgbgbggbg.jpg";
import Message from './components/Message';

const Chat = () => {
    return (
        <StyledChat>
            <StyledChatHeader>
                <div className="chat__header--right">
                    <Avatar />
                </div>
                <div className="chat__header--left">
                    <SearchIcon />
                    <MoreVertIcon />
                </div>
            </StyledChatHeader>
            <StyledChatMessages>
                <Message />
            </StyledChatMessages>
            <StyledChatInput>

            </StyledChatInput>
        </StyledChat>
    )
}
const StyledChat = styled.div`
    flex:0.65;
`;
const StyledChatHeader = styled.div`
    background-color:#EDEDED;
    height:60px;
    padding: 0 20px;
    color:grey;
    display: flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid lightgrey;
    .MuiSvgIcon-root{
        cursor: pointer;
    }
`;
const StyledChatMessages = styled.div`
    width:100%;
    height: calc(100% - 125px);
    position: relative;
`;
const StyledChatInput = styled.div`

`;

export default Chat
