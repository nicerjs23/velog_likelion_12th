import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMagnifyingGlass as faMagnifyingGlassSolid ,faRss,
          faArrowTrendUp,faEllipsisV, faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import { faBell as faBellRegular,
        faClock as faClockRegular,
      } from '@fortawesome/free-regular-svg-icons';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    max-width: 1000px;
    /* background-color: white; */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Header1 =styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0px;
  justify-content: space-between; // 공간을 양쪽으로 분배
  align-items: center;
`;
const Plus =styled.div`
  display: flex;
  /* width: 100%;
  padding: 12px 0px;
  justify-content: space-between; // 공간을 양쪽으로 분배
  align-items: center; */
`;

const MainLogo = styled.svg`
    display: flex;
    width: 28px;
    height: 28px;
    fill: currentColor;
    margin: 0px 16px 0px 0px;
`;

const Navs = styled.div`
  display: flex;
  gap: 4px;

  /* @media (max-width: 768px) {
    gap: 4px;
  } */
`;

const Btn = styled.button`
    /* width: 24px;
    height: 24px; */
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;

    background-color: transparent;
  &:hover {
    background-color: #ececec;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
const IconButton = ({ icon }) => (
    <Btn>
      <FontAwesomeIcon icon={icon} />
    </Btn>
  );
const Btn2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;

    width: 80px;
    height: 32px;
    margin-left: 8px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-weight: 700;
`;
const VelogFont = styled.span`
  font-family: "Fira Mono", monospace;
  color: #212529;;
  font-size: 1.3125rem;
  font-weight: bold;
`;
const PostLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
    const Header = () => {
        return (
        <HeaderWrapper>
            <Header1>
                <Plus>
                  <PostLink to={`/`}>
                      <MainLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
                      <path  d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z" fill="currentColor"></path>
                      </MainLogo>
                    </PostLink>
                    <VelogFont>MovingGun_dev.log</VelogFont>
                </Plus>
                <Navs>
                    <IconButton icon={faBellRegular} />
                    <IconButton icon={faMagnifyingGlassSolid} />
                    <Btn2>로그인</Btn2>
                </Navs>
            </Header1>
        </HeaderWrapper>
    );
};

export default Header;

