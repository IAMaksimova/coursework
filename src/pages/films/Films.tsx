import React from 'react';
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import {Container} from "../../components/Container";
import ivan from '../../assets/ivan-vasilevich.jpg'
import dzhentalmens from '../../assets/dzhentelmens-udachi.webp'
import shurik from '../../assets/shurik.jpg'
import birds from '../../assets/love-and-birds.jpeg'
import italians from '../../assets/italians-in-russia.png'
import brilliant from '../../assets/brilliant.jpeg'
import AliceCarousel from "react-alice-carousel";
import citata from '../../assets/home-text-cover.jpg'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Slider} from "./Slider";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Films = () => {


    const filmsData = [
        {
            title: 'Иван Васильевич меняет профессию',
            text: 'Инженер-изобретатель Тимофеев сконструировал машину времени, которая соединила его квартиру с далеким шестнадцатым веком - точнее, с палатами государя Ивана Грозного. Туда-то и попадают тезка царя пенсионер-общественник Иван Васильевич Бунша и квартирный вор Жорж Милославский. На их место в двадцатом веке «переселяется» великий государь. Поломка машины приводит ко множеству неожиданных и забавных событий',
            image: ivan
        },
        {title: 'Джентльмены удачи', text: 'Заведующему детсадом Трошкину фатально не повезло: он оказался как две капли воды похож на бандита по кличке «Доцент», похитившего уникальный шлем Александра Македонского. Милиция внедряет добряка Трошкина в воровскую среду - и ему ничего не остается, кроме как старательно изображать своего двойника-злодея, путая всех окружающих. Со временем он настолько блестяще входит в роль, что сам начинает порой приходить в ужас. Между тем, жизни его угрожает смертельная опасность...', image: dzhentalmens},
        {title: 'Операция «Ы» и другие приключения Шурика', text: 'Студент Шурик попадает в самые невероятные ситуации: сражается с хулиганом Верзилой, весьма оригинальным способом готовится к экзамену и предотвращает «ограбление века», на которое идёт троица бандитов — Балбес, Трус и Бывалый.', image: shurik},
        {title: 'Любовь и голуби', text: 'Ликвидируя неисправность лебедки, Василий Кузякин получил травму и путевку на юг. Там он встретил роковую женщину Раису Захаровну и… вернулся Вася с курорта не к себе в деревню, а в дом Раисы Захаровны. Началась для него новая жизнь, в которой было много непонятного и интересного, но не было дома, где остались Надя, дети и голуби.', image: birds},
        {title: 'Невероятные приключения итальянцев в России', text: 'В одной из римских больниц скончалась русская эмигрантка. Старая дама, некогда эмигрировавшая из России, поведала своей внучке Ольге, что все ее огромное состояние спрятано в Ленинграде «под львом». Это обстоятельство явилось причиной срочного отлета в Ленинград всех тех, кто случайно или специально был посвящен в эту тайну. В СССР прибыли солидный врач, итальянский мафиози, два санитара, просто горожанин и внучка Ольга. А в Москве к ним присоединился еще и гид, который усложнил и так непростые поиски сокровищ...', image: italians},
        {title: 'Бриллиантовая рука', text: 'В южном городке орудует шайка валютчиков, возглавляемая Шефом и его помощником Графом (в быту — Геной Козодоевым). Скромный советский служащий и примерный семьянин Семен Семенович Горбунков отправляется в зарубежный круиз на теплоходе, где также плывет Граф, который должен забрать бриллианты в одном из восточных городов и провезти их в загипсованной руке. Но из-за недоразумения вместо жулика на условленном месте падает ничего не подозревающий Семен Семенович, и драгоценный гипс накладывают ему.', image: brilliant}

    ]
    return (
        <StyledFilms>
            <Marquee style={{height: '10vh', background: '#091c75', transform: 'rotate(-2deg)'}}>
                {[...Array(15)].map((item, index) => <Film key={index}>
                    <pre>  Фильм!  </pre>
                </Film>)}
            </Marquee>
            <Container>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    // navigation
                    pagination={{clickable: true}}
                    // scrollbar={{ draggable: true }}
                    style={{marginTop: '8vh'}}
                >
                    {filmsData.map((el, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <FilmWrap>
                                    <FilmTitle><i>«{el.title}»</i></FilmTitle>
                                    <Image cover={el.image}/>
                                    <Text>{el.text}</Text>
                                </FilmWrap>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>

        </StyledFilms>
    );
};

const StyledFilms = styled.section`
  padding-top: 14vh;
  height: 145vh;
  overflow: hidden;
`
const Film = styled.span`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
`
const FilmTitle = styled.h4`
  font-size: 24px;
  text-decoration: underline;

`
const FilmWrap = styled.div`
  outline: 2px solid #091c75;
  height: 105vh;
  cursor: pointer;
  
  &:hover{
    ${FilmTitle}{
      color: #091c75
    }
  }
`


const Image = styled.div<{ cover: string }>`
  width: 90%;
  height: 40vh;
  background-image: url(${props => props.cover});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 40px auto;
`
const Text = styled.p`
font-size: 20px;
  padding: 25px 10px;
  text-align: justify;
  margin: 0 auto;
  width: 90%;


`

