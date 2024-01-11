import React from 'react';
import styled from "styled-components";
import citata from '../../../assets/home-text-cover.jpg'
import {MainTitle} from "./Main";
import {Container} from "../../../components/Container";
import '../../../styles/moscowTears.css'

export const Citata = () => {
    return (
        <StyledCitata>
            <Container>
                {/*<MainTitle style={{color: '#1149ce', marginLeft: '34.5vw', lineHeight: '90px'}}>Москва слезам не*/}
                {/*    верит?</MainTitle>*/}
                <div className="text-container"
                     style={{color: '#1149ce', marginTop: '80px', marginLeft: '14vw', lineHeight: '0px'}}>
                    <StyledSpan>М</StyledSpan>
                    <StyledSpan>о</StyledSpan>
                    <StyledSpan>с</StyledSpan>
                    <StyledSpan>к</StyledSpan>
                    <StyledSpan>в</StyledSpan>
                    <StyledSpan>а</StyledSpan>
                </div>
                <div className="text-container"
                     style={{color: '#1149ce', marginLeft: '34.5vw', lineHeight: '90px'}}>
                    <MainTitle>слезам</MainTitle>
                    <MainTitle>не</MainTitle>
                    <MainTitle>верит</MainTitle>
                    <StyledSpan>?</StyledSpan>
                </div>
            </Container>
        </StyledCitata>
    );
};

const StyledCitata = styled.section`
  background-image: url(${citata});
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
`
const StyledSpan = styled.span`
  font-size: 80px;
  width: 25vw;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 70px;
  font-weight: 700;

`