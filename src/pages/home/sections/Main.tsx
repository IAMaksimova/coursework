import React from 'react';
import styled from "styled-components";
import homeMain from '../../../assets/home-main-cover.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import hlopushka from '../../../assets/home-main-hlop.png'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <FlexWrapper direction={'column'} style={{marginLeft: '10vw'}}>
                    <MainTitle>Любимые <span style={{color: '#1149ce'}}>советские</span> фильмы</MainTitle>
                   <hr/>
                    <SmallTitle><i>Зима 2023/2024</i></SmallTitle>
                </FlexWrapper>
                <Image/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  padding-top: 10vh;
  height: 110vh;


`

const Image = styled.div`
  background-image: url(${homeMain});
  background-repeat: no-repeat;
  background-size: cover;
  width: 35vw;
  height: 100vh;
`

export const MainTitle = styled.h1`
  font-size: 80px;
  width: 25vw;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 70px;
`

const SmallTitle = styled.span`
  font-size: 30px;
  margin-top: 3vh;
  text-align: left;
`

