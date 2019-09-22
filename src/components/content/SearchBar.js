import React from 'react';
import styled from "styled-components/macro";

const SeaechBar = props => (
  <Form onSubmit={props.getWeather} style={{ width: '100%', height: '10%' }}>
    <TitleSearch >Choose your location</TitleSearch>
    <Search>
      <input type='text' required name='city' placeholder='City...' defaultValue='Tel aviv' style={{ padding: "0.5rem", fontSize: "3rem" }}></input>
      <button style={{ margin: "10px", padding: "0.5rem", fontSize: "2.5rem", borderRadius: "10px" }} >Get weather</button>
    </Search>
  </Form>
)
export default SeaechBar;
const Form = styled.form`
  display: flex;
  flex-direction: column; 
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: normal;
  font-family: "Griffy", cursive;
  color: red;
`;

const TitleSearch = styled.form`
  padding: 1rem;
  font-size: 3.5rem;
`;

const Search = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
align-content: center;
padding: 1rem;
font-size: 3rem;
`;

