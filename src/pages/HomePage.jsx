// import React from "react";
// import { Link } from "react-router-dom";
// import { dummy_data } from "../data/dummy_data";

// function HomePage() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//       {/* <Link to="detail/1">1번 페이지</Link>
//       <Link to="detail/2">2번 페이지</Link>
//       <Link to="detail/3">3번 페이지</Link> */}
//        {dummy_data.map((post) => ( // 더미 데이터를 순회하여 각 게시물의 링크를 생성
//         <Link key={post.postID} to={`detail/${post.postID}`}>
//           {post.postID}번 페이지 {post.content} {/* 게시물 제목을 링크 텍스트로 표시 */}
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default HomePage;
import React from "react";
import { Link } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";
import styled from 'styled-components'; // styled-components 불러오기

import PostCard from "../components/PostCard";

const HomePageWrapper = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-flow: row wrap; 
  gap: 20px;
  justify-content: center; // 중앙 정렬
  /* background-color: #F8F9FA; */
  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
`;

const HomePage = () => {
  return (
    
    <HomePageWrapper>
      {dummy_data.map(post => (
        <PostCard key={post.postID} post={post} />
      ))}
    </HomePageWrapper>
  );
};

export default HomePage;