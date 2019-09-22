import React from 'react';
import styled from 'styled-components/macro'

const WeatherDiscrWrapper = (props) => (
    <div>
        <DescrWrapper>
            <Descreption >What will be the weather tody? {props.description}</Descreption>
        </DescrWrapper>
    </div>
)

export default WeatherDiscrWrapper;

const DescrWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 3rem
`;

const Descreption = styled.h3`
color: #FFFFFF;
 font-family: "Griffy", cursive;
 font-size: 2.5rem;
`;
