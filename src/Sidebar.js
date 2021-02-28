import React, { useState } from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import db from "./firebase";
import { useEffect } from 'react';

const Sidebar = () => {

    const [groups, setGroups] = useState([]);

    const addGroup = () => {
        const groupName = prompt("Please type your group name");
        console.log(groupName);
        if(groupName){
            db.collection("groups").add({
                groupName: groupName,
                icon: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png",
            })
        }else{
            alert("Please enter a name for your group");
            return;
        }
    }

    useEffect(() => {
        db.collection("groups")?.onSnapshot((snapshot) => ((
            snapshot?.docs?.map((doc) => ({
                id: doc?.id,
                data: doc?.data(),
            }))
        )));
    }, []);

    return (
        <StyledSidebar>
            <StyledSidebarHeader>
                <div className="sidebarHeaderLeft">
                    <Avatar style={{cursor:"pointer"}} src="https://m.media-amazon.com/images/M/MV5BZDE2ZjIxYzUtZTJjYS00OWQ0LTk2NGEtMDliYmI3MzMwYjhkXkEyXkFqcGdeQWFsZWxvZw@@._V1_UX477_CR0,0,477,268_AL_.jpg" />
                </div>
                <div className="sidebarHeadeerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </StyledSidebarHeader>
            <StyledSidebarSearch>
                <form>
                    <SearchIcon />
                    <input type="text" placeholder="Search or start a new chat"/>
                </form>
                <AddCircleIcon 
                    onClick={addGroup}
                    style={{
                        fontSize: "30px", 
                        marginLeft: "10px", 
                        color: "grey", 
                        cursor: "pointer"
                    }} 
                />
            </StyledSidebarSearch>
            <StyledSidebarChats>
                {groups.map((group) => (
                    <SidebarChat
                        key={group.id}
                        id={group.id}
                        groupName={group.groupName}
                        groupIcon={group.groupIcon}    
                    />
                ))}
            </StyledSidebarChats>
        </StyledSidebar>
    );
}
const StyledSidebar = styled.div`
    flex:0.35;
    border-right:1px solid lightgrey;
    height:100%;
`;
const StyledSidebarHeader = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 10px 20px;
    height:60px;
    align-items:center;
    background-color:#EDEDED;
    width:100%;
`;
const StyledSidebarSearch = styled.div`
    height:50px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f6f6f6;
    >form{
        display:flex;
        justify-content:space-between;
        align-items:center;
        background-color:#fff;
        width:90%;
        height:30px;
        border-radius:30px;
        padding:0 10px;
        >input{
            width:90%;
            height:100%;
            border:none;
            outline:none;
            padding:0 10px;
            color:#333;
            font-size:16px;
        }
    }
`;
const StyledSidebarChats = styled.div`
    width: 100%;
    overflow-y:scroll;
    height:calc(100% - 110px);
    ::-webkit-scrollbar{
        width:5px;
        background:none;
    }
    ::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 30px;
    }
`;

export default Sidebar;
