import React from "react";
import styled from "styled-components";
import Chat from "./Chat";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./Sidebar";
import useStateValue from "./StateProvider";

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <>
      {!user ? (
        <LoginPage />
      ) : (
        <StyledApp>
          <StyledAppBody>
            <Sidebar />
            <Chat />
          </StyledAppBody>     
        </StyledApp>
      )}
    </>
  );
}
const StyledApp = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #009688, #dadbd3, #dadbd3, #dadbd3);
  
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
