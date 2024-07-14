// import React from "react";
// import { useParams } from "react-router-dom";

// function PostDetailPage() {
//     const postID = useParams().postId;
//     return <div>{postID}번째 포스트</div>;
// }

// export default PostDetailPage;

import React from "react";
import { useParams } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    max-width: 800px; // 최대 너비 설정
    margin: 0 auto; // 중앙 정렬
`;

const Title = styled.h1`
    font-size: 24px;
    color: #333;
`;

const Thumbnail = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
`;

const Content = styled.p`
    font-size: 16px;
    color: #666;
`;

const CreatedAt = styled.p`
    font-size: 14px;
    color: #999;
`;

function PostDetailPage() {
    const { postId } = useParams();
    const post = dummy_data.find(post => post.postID === parseInt(postId));

    if (!post) {
        return <Container>포스트를 찾을 수 없습니다.</Container>;
    }

    return (
        <Container>
        <Title>{post.title}</Title>
        <Thumbnail src={post.thumbnail} alt={post.title} />
        <Content>{post.content}</Content>
        <CreatedAt>{post.createdAt}</CreatedAt>
        </Container>
    );
}

export default PostDetailPage;
