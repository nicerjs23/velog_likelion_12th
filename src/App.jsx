import { styled, ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
// 추가된코드
import Header from "./components/Header";
import PostDetailHeader from "./components/PostDetailHeader";
import { useLocation } from "react-router-dom";
import React from "react";


const Wrapper = styled.div`
  width: 100%;
  background-color: #F8F9FA;
  background-color: 
    ${(props) => (props.isPostDetailPage ? 'white' : '#F8F9FA')};
  min-height: 100vh;
  /* * {
    border: 1px solid black;
  } */
`;

const Layout = () => {
  const location = useLocation();
  const isPostDetailPage = location.pathname.includes("detail"); // 경로를 'detail'로 확인

  return (
    <Wrapper  isPostDetailPage={isPostDetailPage}>
      {isPostDetailPage ? <PostDetailHeader /> : <Header />}
      <Outlet />
    </Wrapper>
  );
};

function App() {
  return <Layout />;
}

export default App;