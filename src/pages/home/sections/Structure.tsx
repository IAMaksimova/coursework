import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "./About";
import mainStructure from '../../../assets/XV5RiinD3mG7z0xaJwyvk-transformed (1).png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Fade} from "react-awesome-reveal";

export const Structure = () => {

    const structureData = [
        {
            num: '01',
            title: 'Главная',
            text: 'Лицевая страница сайта, именно с нее начинается знакомство пользователя с миром советского кино и функционалом сайта'
        },
        {
            num: '02',
            title: 'О кино',
            text: 'Эта секция является главной на территории сайта, именно в ней собрана подборка любимых и, конечно, узнаваемых картин советского кинематографа'
        },
        {
            num: '03',
            title: 'Режиссёры',
            text: 'Просто о людях. О тех, с чьей работой хотя бы раз в жизни сталкивался каждый из нас. О людях, способных создать собственную вселенную в рамках съемочной площадки'
        },
        {
            num: '04',
            title: 'Обратная связь',
            text: 'В данном разделе пользователю предоставляется возможность поделиться своими впечатлениями о продукте или просто пообщпться с разработчиками'
        },
    ]
    return (
        <StyledStructure>
            <Container>
                <SectionTitle style={{textAlign: 'right'}}>Как организован сайт?</SectionTitle>

                <Image src={mainStructure}></Image>
                <FlexWrapper direction={'column'} gap={'30px'} style={{width: '70vw'}}>
                    <Fade cascade>
                        {structureData.map(el => {
                            return (
                                <NavWrap key={el.title}>
                                    <DecNum>{el.num}</DecNum>
                                    <TextWrap>
                                        <DecTitle>{el.title}</DecTitle>
                                        <Text>{el.text}</Text>
                                    </TextWrap>
                                </NavWrap>
                            )
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </StyledStructure>
    );
};

const StyledStructure = styled.section`
height: 118vh;
`

const Image = styled.img`
  width: 25vw;
  height: 60vh;
  transform: scale(-1, 1);
  position: absolute;
  right: 0;
  bottom: -242.5vh;
`
const Text = styled.p`
  margin-top: 15px;
  font-size: 20px;

`
const DecTitle = styled.h4`
  display: inline-block;
  font-size: 25px;
  color: #1b0f10;
`

const NavWrap = styled.div`
  height: 20vh;
  width: 60vw;
  border: 3px solid #e0b658;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    border-right: none;
    margin-right: 50px;
    //justify-content: flex-end;
    ${Text}, ${DecTitle}{
      text-align: left;
      margin-left: 30px;

    }
  }

  &:nth-child(even) {
    border-left: none;
    margin-left: 50px;
    flex-direction: row-reverse;
    ${Text}, ${DecTitle}{
      text-align: right;
      margin-right: 30px;

    }
    

  }
`
const DecNum = styled.span`
  font-size: 15vh;
  color: rgba(166, 33, 18, 0.8);
  letter-spacing: -18px;
`




const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  
  
  &:nth-child(odd){
    justify-content: flex-start;
    margin-left: 80px;
  }
  &:nth-child(even){
    justify-content: flex-end;

  }
`