import React from 'react';
import styled from 'styled-components'

const CurrentCityDisplay = (props) => (
    <div>
        <DisplayWrapper>
            <h3>City Name: {props.city} </h3>
            <h3>Temp: {props.temprature}</h3>
        </DisplayWrapper>
    </div>
)

export default CurrentCityDisplay;

const DisplayWrapper = styled.div`
display: flex;
flex-direction: column;
/* padding: 1rem; */
font-size: 2.5rem;
`;
