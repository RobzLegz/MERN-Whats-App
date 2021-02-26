import React from 'react'
import styled from 'styled-components'

const Message = () => {
    return (
        <StyledMessage>
            <strong>sender name</strong>
            <p>This is a mesasge</p>
        </StyledMessage>
    )
}
const StyledMessage = styled.div`
    z-index:10;
`;

export default Message
