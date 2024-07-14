import { styled, ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
// 추가된코드
import Header from "./components/Header";
import React from "react";


const Wrapper = styled.div`
  width: 100%;
  background-color: #F8F9FA;
  min-height: 100vh;
  /* * {
    border: 1px solid black;
  } */
`;

const Layout = () => {
  return (
    <Wrapper >
      
      <Header />
      <Outlet />
    </Wrapper>
  );
};

function App() {
  return <Layout />;
}

export default App;