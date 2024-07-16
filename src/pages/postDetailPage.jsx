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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart as faHeartSolid ,faShareNodes} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    align-items: flex-start;
    max-width: 768px; // 최대 너비 설정
    margin: 0 auto; // 중앙 정렬
    margin-top: 64px;
    /* background-color: white; */
    .side{
        display: flex;
        width: 100%;
        position: relative;

        box-sizing: inherit;
    }
    .sideBox{
        /* position: absolute;
        left: -7rem; */
        position: fixed; /* 수정수정 */
        left: 5rem; 
        top: 25rem; 
        /* width: 64px; */
        /* height: 150px; */
        background: #F8F9FA;;
        border: 1px solid #F1F3F5;
        border-radius: 50px;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: center;
    }
    .sideIcon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #F1F3F5; 
        background-color: white;
    }
    .heart{
        display: flex;
        width: 24px;
        height: 24px;
        color:#868E96
    }
    .num{
        display: flex;
        margin: 8px 0px 16px;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 12px;
    }
`;

const Title = styled.h1`
    display: flex;
    width:100%;
    margin: 0;
    padding: 0px 0px 32px;
    /* margin-top: 30px; */
    max-width: 768px;
    font-size: 48px;
    color: #333;
    box-sizing: border-box;
    word-wrap: break-word; /* 긴 단어를 줄바꿈 */
    overflow-wrap: break-word; /* 긴 단어를 줄바꿈 */
    word-break: break-all; /* 긴 단어를 줄바꿈 */
`;

const Thumbnail = styled.img`
    display: flex;
    width: 100%;
    max-width: 768px;
    height: 480px;
    margin: 32px 0px 0px;
    object-fit: cover;
`;

const Content = styled.p`
    display: flex;
    flex-direction: column;
    width:100%;
    font-size: 18px;
    color: #212529;
    word-wrap: break-word; /* 긴 단어를 줄바꿈 */
    overflow-wrap: break-word; /* 긴 단어를 줄바꿈 */
    word-break: break-all; /* 긴 단어를 줄바꿈 */
`;

const CreatedAt = styled.p`
    display: flex;
    justify-content: space-between;
    width:100%;
    font-size: 16px;
    color: #495057;
    margin:0;
    .name{
        color:#212529;
        font-weight:bold;
        margin-right: 6px;
    }
    .follow{
        display: inline-block;
        width: 96px;
        height:32px;
        font-size: 16px;
        color: #00a562;
        background-color: white;
        border: 1px solid #00a562;
        border-radius: 25px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

    }
`;
const Tag = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin:14px 0 14px;
    .tag{
        background: #F8F9FA;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        border-radius: 1rem;
        display: inline-flex;
        
        align-items: center;
        margin-right: 0.875rem;
        color: #12B886;
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
    }
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
            <CreatedAt>
                <span><span class="name">{post.author} </span> · {post.createdAt}</span>
                <button class="follow">팔로우</button>
            </CreatedAt>
            <div class="side">
                <div class="sideBox">
                    <div class="sideIcon">
                        <FontAwesomeIcon class="heart" icon={faHeartSolid} />
                    </div>
                    <div class="num">22</div>
                    <div class="sideIcon">
                        <FontAwesomeIcon class="heart" icon={faShareNodes} />
                    </div>
                </div>
            </div>
            <Tag>
                <div class="tag">React</div>
                <div class="tag">MovingGun</div>
                <div class="tag">SoHard</div>
            </Tag>
            <Thumbnail src={post.thumbnail} alt={post.title} />
            <Content>
                <h2 class="Index">React<br/></h2>
                    {post.content}<br/>
                {/* <div class="Index">React</div> */}
            </Content>
            
        </Container>
    );
}

export default PostDetailPage;
