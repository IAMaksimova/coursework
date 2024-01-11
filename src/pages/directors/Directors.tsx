import React from 'react';
import styled from "styled-components";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Container} from "../../components/Container";
import ryazanov from '../../assets/ryazanov.jpg'
import gaidai from '../../assets/gaidai.webp'
import menshov from '../../assets/050b52e67923c30240a28186e9e674e4.jpg'
import seryi from '../../assets/seryi.jpg'
import {FlexWrapper} from "../../components/FlexWrapper";

export const Directors = () => {

    function createData(
        name: any,
        start: any,
        end: any,
        career: any,
        films: any,
    ) {
        return {name, start, end, career, films};
    }

    const rows = [
        createData('Эльдар Рязанов', 1927, 1956, 2007, '"Ирония судьбы, или С лёгким паром!", "Гараж", "Зигзаг удачи"'),
        createData('Леонид Гайдай', 1923, 1955, 1989, '"Кавказская пленница", "Карнавальная ночь", "12 стульев"'),
        createData('Владимир Меньшов', 1939, 1965, 2001, '"Москва слезам не верит", "Старший сын", "Стрелы Робин Гуда"'),
        createData('Александр Серый', 1910, 1935, 1970, '"Большой путь", "Крылья", "Легенда о Тиле"'),
    ];

    const mainRow = {
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        background: '#4463ab ',
        color: 'white',
        fontWeight: 700
    }

    const directors = {
        background: '#4463ab',
        color: 'white',
        fontWeight: 700,
        letterSpacing: '1px'
    }

    const common = {
        fontFamily: 'Montserrat',
        color: '#1149ce',
        fontWeight: 500
    }

    const directorsData = [
        {title: 'Эльдар Александрович Рязанов', image: ryazanov, link:'https://www.culture.ru/persons/2200/eldar-ryazanov?ysclid=lq9ty874vk365971621'},
        {title: 'Леонид '+ '\n' +' Иович' + '\n' + 'Гайдай', image: gaidai, link:'https://www.culture.ru/persons/2202/leonid-gaidai'},
        {title: 'Владимир Валентинович Меньшов', image: menshov, link:'https://www.culture.ru/persons/797/vladimir-menshov'},
        {title: 'Александр Иванович Серый', image: seryi, link:'https://www.kino-teatr.ru/kino/director/sov/21041/bio/?ysclid=lq9u1ptcvo901541166'},
    ]
    return (
        <StyledDirectors>
            <FlexWrapper gap={'0px'}>
                {directorsData.map((el, index) => {
                    return(
                        <Image cover={el.image} key={index} as={'a'} href={el.link} target={'_blank'}>
                            <StyledName>{el.title}</StyledName>
                        </Image>
                    )
                })}
            </FlexWrapper>

            <Container>
                <TableContainer component={Paper} sx={{width: '60vw', fontFamily: 'Montserrat', margin: '40px auto'}}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={mainRow}>Режиссёр</TableCell>
                                <TableCell sx={mainRow}>Год рождения</TableCell>
                                <TableCell sx={mainRow}>Год начала карьеры</TableCell>
                                <TableCell sx={mainRow}>Год завершения карьеры</TableCell>
                                <TableCell sx={mainRow}>Известные фильмы</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell sx={directors} component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell sx={common}>{row.start}</TableCell>
                                    <TableCell sx={common}>{row.end}</TableCell>
                                    <TableCell sx={common}>{row.career}</TableCell>
                                    <TableCell sx={common}>{row.films}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </StyledDirectors>
    );
};

const StyledDirectors = styled.section`
  padding-top: 10vh;
  height: fit-content;
`

const Image = styled.div<{ cover: string }>`
  width: 26%;
  height: 90vh;
  background-image: url(${props => props.cover});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  align-items: flex-end;
  font-size: 35px;
  text-align: left;
  position: relative;
  z-index: 1;
  box-shadow:0 0 30px white;
  
  &:before, &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 10vh;
    background-color: white;
    top: 50%;
    right: 50%;
    opacity: 0;
    z-index: 5;
  }
  
  &:after{
    transform: rotate(90deg);
  }
  
  
  
  &:hover{
    &:before, &:after{
      opacity: 1;
    }
    filter: blur(2px);
    cursor: pointer;
  }
  
`

const StyledName = styled.span`
  width: 80%;
  background-color: rgba(5, 48, 148, 0.72);
  height: 18vh;
  white-space: pre-wrap;
  font-weight: 100;
`