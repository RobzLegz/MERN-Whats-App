import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import "./Chat.css";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatsAppBackgroundImage from "./images/whatsappbgbgbggbg.jpg";
import Message from './components/Message';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
    return (
        <StyledChat>
            <StyledChatHeader>
                <div className="chat__header--right">
                    <Avatar />
                    <p>Name of the group</p>
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
                <EmojiEmotionsOutlinedIcon />
                <AttachFileOutlinedIcon />
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit">send</button>
                </form>
                <MicIcon />
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
    .chat__header--right{
        display: flex;
        align-items: center;
        color:#333;
        >p{
            margin-left: 10px;
        }
    }
`;
const StyledChatMessages = styled.div`
    width:100%;
    height: calc(100% - 120px);
    position: relative;
    padding: 50px;
`;
const StyledChatInput = styled.div`
    color:grey;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    border-top: 1px solid lightgrey;
    padding: 0 20px;
    .MuiSvgIcon-root{
        cursor: pointer;
        font-size: 26px;
    }
    >form{
        width: 75%;
        height: 100%;
        display: flex;
        align-items:center;
        justify-content:center;
        >input{
            width:100%;
            height:70%;
            padding: 0 15px;
            background:#fff;
            outline: none;
            border: none;
            font-size: 15px;
            border-radius: 30px;
            color: #333;
        }
        >button{
            display:none;
        }
    }
`;

export default Chat
