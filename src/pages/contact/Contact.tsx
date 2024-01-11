import React, {useState} from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import ivan from '../../assets/ivan-transparent.png'

export const Contact = () => {

   const [open, setOpen] = useState(false)
    const changeStatus = () => {
       setOpen(!open)
    }
    return (
        <StyledContact>
            {open &&  <ModalWindow>
                <Window>
                    <CloseButton onClick={changeStatus}></CloseButton>
                    <Text>[Ваша заявка принята!]</Text>
                </Window>
            </ModalWindow> }

            <Container>
                <FlexWrapper>
                    <Image/>
                    <Form>
                        <StyledLegend>Анкета, сударь</StyledLegend>
                        <StyledInput placeholder={'Имя'} required type={'name'}/>
                        <StyledInput placeholder={'Фамилия'} required/>
                        <StyledInput placeholder={'Электронная почта'} type={'email'} required/>
                        <StyledTextArea placeholder={'Донос'} required/>
                        <StyledButton type={'submit'} onClick={changeStatus}/>
                    </Form>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  height: 100vh;
  padding-top: 7vh;
`

const Form = styled.form`
  height: 80vh;
  width: 38vw;
  background-color: #a06f62;
  margin-left: 10vw;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

const Image = styled.div`
  background-image: url(${ivan});
  background-repeat: no-repeat;
  background-size: cover;
  width: 25vw;
  height: 80vh;
  position: absolute;
  right: 0;
  bottom: 0;
`

const StyledInput = styled.input`
  height: 6vh;
  width: 80%;
  padding-left: 20px;
`
const StyledTextArea = styled.textarea`
  resize: none;
  width: 80%;
  height: 15vh;
  padding: 20px;
`

const StyledButton = styled.input`
  width: 60%;
  height: 6vh;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  color: #a06f62;
`

const StyledLegend = styled.legend`
  color: white;
  text-decoration: underline;
  font-size: 30px;
  font-weight: 500
`

///----------------------------------------------------------------

const ModalWindow = styled.div`
  background-color: rgba(40, 44, 52, 0.59);
  z-index: 555;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Window = styled.div`
  width: 50vw;
  height: 35vh;
  background-color: white;
  border-radius: 20px;
  margin: 15% auto;
`

const CloseButton = styled.button`
  height: 4vh;
  width: 2vw;
  margin-left: 90%;
  margin-top: 3%;
  position: relative;
  border: none;
  background-color: white;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 2vw;
    height: 1.5px;
    background-color: #27282f;
    transform: rotate(45deg);
    left: 0;
    border-radius: 1.8px;
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    &:before, &:after {
      height: 2.2px;
    }
  }
`

const Text = styled.span`
  color: #27282f;
  font-weight: 700;
  font-size: 50px;
  display: inline-block;
  margin-top: 8vh;
  
`