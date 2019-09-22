import React from 'react';
import styled from "styled-components/macro";
import { Link } from 'react-router-dom';


const Favorite = ({ favorites }) => {
    return (
        <Wrapper>
            <Title>Your favorite places</Title>
            <FavoriteWrapper>
                {favorites.map(item => {
                    return (
                        <Link style={{ textDecorationLine: "none" }} to={`/${item.locationKey}`} key={item.locationKey}>
                            <FavoriteItem>
                                <div style={{ fontWeight: "bold", textDecorationLine: "none" }}>{item.city}</div>
                                <div>{item.description}</div>
                                <div>{`${item.temprature} °C`}</div>
                            </FavoriteItem>
                        </Link>
                    )
                }
                )}
            </FavoriteWrapper>
        </Wrapper>
    )
}

export default Favorite;

const FavoriteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin: 20px 10px;
  font-size: 2rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  color: red;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: normal;
    color: black;
    font-family: "Griffy", cursive;
    ;`

const FavoriteItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 20px;
    padding: 1rem;
    font-size: 2.5rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    text-decoration-line: none;
    border: solid white 1px;
    transition: all 0.5s ease;
  &:hover {
    background-image: linear-gradient(#236BB7, #3F83CC);
    color: black;
  }
    `;

const Title = styled.h2`
    margin-top: 30px;
    font-size: 3rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    text-align: center;
    color: mintcream;`

