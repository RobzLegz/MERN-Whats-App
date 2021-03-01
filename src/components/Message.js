import React from 'react'
import styled from 'styled-components'
import useStateValue from '../StateProvider';

const Message = ({messageText, messageTimestamp,userName, id}) => {

    const [{user}, dispatch] = useStateValue();

    return (
        <>
            {userName === user.displayName ? (
                <StyledRecieverMessage>
                    <strong>{userName}</strong>
                    <p>{messageText}</p>
                    <small>{new Date(messageTimestamp?.toDate()).toLocaleTimeString()}</small>
                </StyledRecieverMessage>
            ) : (
                <StyledMessage>
                    <strong>{userName}</strong>
                    <p>{messageText}</p>
                    <small>{new Date(messageTimestamp?.toDate()).toLocaleTimeString()}</small>
                </StyledMessage>
            )}
        </>
    )
}
const StyledMessage = styled.div`
    min-height: 60px;
    background: #fff;
    max-width: 300px;
    height: fit-content;
    padding: 5px 10px;
    border-radius: 7px;
    position: relative;
    margin-bottom: 10px;
    z-index: 0;
    >strong{
        font-size: 14px;
        font-weight: 500;
        color:#47D19F;
    }
    >p{
        font-size: 14px;
        padding: 5px 10px 20px 5px;
        color: #333;
    }
    >small{
        position: absolute;
        bottom: 5px;
        right: 5px;
        color: #666;
        font-size: 11px;
    }
`;
const StyledRecieverMessage = styled.div`
    min-height: 60px;
    background: #DCF8C6;
    margin-left: auto;
    max-width: 300px;
    height: fit-content;
    padding: 5px 10px;
    border-radius: 7px;
    position: relative;
    margin-bottom: 10px;
    z-index: 0;
    >strong{
        font-size: 14px;
        font-weight: 500;
        color:#47D19F;
    }
    >p{
        font-size: 14px;
        padding: 5px 10px 20px 5px;
        color: #333;
    }
    >small{
        position: absolute;
        bottom: 5px;
        right: 5px;
        color: #666;
        font-size: 11px;
    }
`;

export default Message
