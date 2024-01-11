import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import aboutMain from '../../../assets/home-about-cover.webp'
import {Fade} from "react-awesome-reveal";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify={'flex-start'} wrap={'wrap'} direction={'column'}>
                    <Fade>
                        <SectionTitle>О чем речь?</SectionTitle>
                        <FlexWrapper justify={'space-between'} align={'center'}>
                            <Image/>
                            <Text><span style={{color: '#102578', fontWeight: 600}}>Хорошее советское кино</span> – это не
                                картинки под музыку (и без), а <u>целая вселенная</u>, причём каждый
                                фильм создаёт своё пространство, где герои живут даже вне сюжета. Поэтому мы и обсуждаем
                                Лукашиных, Кузякиных, Борщовых и прочих Брагиных.
                                <br/>
                                <br/>
                                <br/>
                                Эта тема определённо заслуживает внимания,
                                именно поэтому мы решили посвятить ей сайт и сделать <u>обзор любимых советских фильмов</u> и
                                познакомиться с <u>режиссерами</u> этих потрясающих кинокартин.</Text>
                        </FlexWrapper>
                    </Fade>


                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  height: 114vh;
`

export const SectionTitle = styled.h3`
  font-size: 50px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 5vh 0;
  text-align: left;
 
`


const Image = styled.div`
  background-image: url(${aboutMain});
  background-repeat: no-repeat;
  background-size: cover;
  width: 26vw;
  height: 90vh;
`

const Text = styled.p`
  font-size: 30px;
  width: 45vw;
  text-align: left;

  position: relative;

  &:before{
    content: 'О ЧЕМ РЕЧЬ';
    position: absolute;
    color: white;
    font-size: 80px;
    transform: rotate(-90deg);
    left: -54vw;
    top: 25vh;
    font-weight: 700;
  }

`