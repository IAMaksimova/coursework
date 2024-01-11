import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Menu = () => {

    const menuItems = [
        {title: 'Главная', path: '/'},
        {title: 'О кино', path: 'films'},
        {title: 'Режиссёры', path: 'directors'},
        {title: 'Обратная связь', path: 'contact'},
    ]
    return (
        <StyledMenu>
            <StyledMenuItems>
                {menuItems.map(el => {
                    return(
                        <NavLink to={el.path} key={el.title}>
                            <MenuItem>{el.title}</MenuItem>
                        </NavLink>
                    )
                })}
            </StyledMenuItems>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: #242227;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 55;
`

const StyledMenuItems = styled.ul`
  display: flex;
  margin-left: 5vw;
  gap: 50px;
 
`

const MenuItem = styled.li`
  color: white;
  font-weight: 500;
  font-size: 22px;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  
  &:before{
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: white;
    top: 100%;
    opacity: 0;
  }
  
  &:hover{
    &:before{
      opacity: 1;
    }
  }
`