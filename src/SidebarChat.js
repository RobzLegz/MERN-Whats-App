import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const SidebarChat = ({groupName, groupIcon, id}) => {
    return (
        <StyledSidebarChat>
            <Avatar />
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
