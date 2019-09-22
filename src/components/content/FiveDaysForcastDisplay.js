import React from 'react'
import styled from "styled-components/macro";

let day = ""

const FiveDaysForcastDisplay = (props) => {
    const { icon, date, temperature } = props;

    // full date converted to dayName
    dateToDay(date)
    function dateToDay(date) {
        var date1 = new Date(date);
        var options = { weekday: 'long' };
        day = (new Intl.DateTimeFormat('en-US', options).format(date1));
    }

    return (
        <DisplayItemsWrapper >
            <DisplayItem >
                <Title1>{day} </Title1>
                <Title>{icon}  </Title>
                <Title>{(temperature.Minimum.Value + temperature.Minimum.Value) / 2} </Title>
            </DisplayItem>
        </DisplayItemsWrapper>
    )
}

export default FiveDaysForcastDisplay;


const DisplayItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  border: solid black 1px;
  color: red;
`;

const DisplayItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
  font-weight: normal;
  transition: all 0.5s ease;
  &:hover {
    background-image: linear-gradient(#236BB7, #3F83CC);
  }
`;

const Title1 = styled.h4`
  font-size: "3rem"; 
  font-weight: "bold";
  text-align: center;
  color: black;
  margin: 5px;
`

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
  color: black;
  margin: 5px;

`
