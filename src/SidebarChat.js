import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import useStateValue from './StateProvider';

const SidebarChat = ({groupName, groupIcon, groupId}) => {

    const [{roomId}, dispatch] = useStateValue();

    const enterRoom = () => {
        dispatch({
            type: "ENTER_GROUP",
            roomId: groupId,
            roomName: groupName,
            roomIcon: groupIcon,
        });
    }

    return (
        <StyledSidebarChat onClick={enterRoom}>
            <Avatar src={groupIcon} />
            <div className="sidebar__chat--left">
                <h4>{groupName}</h4>
                <p>Last message...</p>
            </div>
        </StyledSidebarChat>
    )
}
const StyledSidebarChat = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 50px;
    align-items: center;
    width: 100%;
    :hover{
        background-color: lightgray;
    }
    >.sidebar__chat--left{
        flex: 1;
        padding: 0 20px;
        >h4{
            color: #2a2a2a;
        }
        >p{
            color: grey;
        }
    }
`;

export default SidebarChat
