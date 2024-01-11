import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
                <FlexWrapper justify={'space-around'} align={'center'} style={{height: '12vh'}}>
                    <Text>© 2023. <u>Designed by Nikita Mayorov</u> </Text>
                    <Text> Moscow. RUT(MIIT).</Text>
                </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  height: 12vh;
  width: 100%;
  background-color: #242227;

`

const Text = styled.span`
  color: rgba(255, 255, 255, 0.58);
  font-weight: 700;
  cursor: pointer;
`