import React from "react";
import styled from "styled-components";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <StyledApp>
      <StyledAppBody>
        <Sidebar />
        <Chat />
      </StyledAppBody>     
    </StyledApp>
  );
}
const StyledApp = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background-color: #dadbd3;
`;
const StyledAppBody = styled.div`
  display: flex;
  background-color: #ededed;
  height: 90vh;
  min-width: 80%;
  max-width: 70vw;
  margin-top: -50px;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;

export default App;
