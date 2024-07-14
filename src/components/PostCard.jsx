import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 320px;
    background-color: white; // 배경색 설정
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
    
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 167px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 140px;
    }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px;
  width: 100%;
  height: 165px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
    /* font-family: "Fira Mono", monospace; */
    font-weight: bold;
    font-size: 18px;
    color: #333;
    margin: 0 0 4px;
`;
const Text = styled.span`
  color: #464545;
  font-size: 15px;
  margin: 0 0 10px;
`
const Author = styled.span`
  margin:0;
  font-size: 14px;
  color: #808080;
`;

// const Meta = styled.div`
//   display: flex;
//   justify-content: space-between; // 공간을 양쪽으로 분배
//   font-size: 14px;
//   color: #000000;
// `;

const CardFooter=styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  border-top: solid 1px #f1f3f5;
`;

const PostLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const PostCard = ({ post }) => {
    return (
      <Card>
        <PostLink to={`detail/${post.postID}`}>
          <Thumbnail src={post.thumbnail} alt={post.title} />
          <Content>
            <TextContent>
              <Title>{post.title}</Title>
              <Text>{post.content}</Text>
              {/* <Author>by {post.author}</Author> */}
            </TextContent>
            <Author><span>{post.createdAt}</span></Author>
          </Content>
          <CardFooter>
            <span>by <span>{post.author}</span></span>
            <span><FontAwesomeIcon icon={faHeartSolid} /> 161</span>
          </CardFooter>
        </PostLink>
      </Card>
    );
  };
export default PostCard;
