import React from 'react';
import {Main} from "./sections/Main";
import {About} from "./sections/About";
import {Structure} from "./sections/Structure";
import {Citata} from "./sections/Citata";
import {Fade} from "react-awesome-reveal";

export const HomePage = () => {
    return (
        <Fade>
            <Main/>
            <About/>
            <Structure/>
            <Citata/>
        </Fade>
    );
};

