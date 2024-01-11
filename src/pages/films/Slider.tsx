import React from 'react';
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";

type SlidePropsType = {
    text: string
    userName: string
}
const Slide = (props: SlidePropsType) => {
    return (
        <StyledSlide>
            <Text>{props.text}</Text>
            <Name>@{props.userName}</Name>
        </StyledSlide>
    )
}

const items = [
    <Slide userName={"ivan ivanov"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicingelit."}/>,
    <Slide userName={"piotr petrov"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicingelit."}/>,
    <Slide userName={"igor igorev"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
];

export const Slider = () => (
        <StyledSlider>
            <AliceCarousel
                mouseTracking
                items={items}
            />
        </StyledSlider>
    )
;

const StyledSlider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledSlide = styled.div`
  text-align: center;

`

const Text = styled.p`

`

const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 32px;
  display: inline-block;
`
const Pagination = styled.span`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    
    & + span{
      margin-left: 5px;
      
      &.active{
        background-color: black;
        width: 20px;
      }

    }
    
  }
`