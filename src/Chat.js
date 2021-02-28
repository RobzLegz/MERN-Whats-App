import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import "./Chat.css";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Message from './components/Message';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicIcon from '@material-ui/icons/Mic';
import useStateValue from './StateProvider';
import { useParams } from 'react-router-dom';
import db from './firebase';
import firebase from "firebase";

const Chat = () => {

    const [{user}, dispatch] = useStateValue();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if(message !== ""){
            db.collection("rooms").doc().collection("messages").add({
                name: user?.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: message,
            })
        }else{
            return;
        }
    }
    
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
                    <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">send</button>
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
    padding: 50px 20px;
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
