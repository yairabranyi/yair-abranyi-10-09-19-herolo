import React from 'react';

import SearchBar from './SearchBar';
import FiveDaysForcastDisplay from './FiveDaysForcastDisplay';
import CurrentCityDisplay from './CurrentCityDisplay';
import BtnAddToFavorite from './BtnAddToFavorite';
import WeatherDiscrWrapper from './WeatherDiscrWrapper';
import styled from "styled-components/macro";
import {
  get_location_id,
  get_current_weather,
  get_weekly_weather
} from '../api/weather.api'

// const API_KEY1 = "i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5" //Accuweather api key
// let LOCATION_KEY = "215792" // Tel-Aviv location key *****

class Home extends React.Component {
  state = {
    city: undefined,
    temprature: undefined,
    description: undefined,
    locationKey: 215854,
    error: undefined,
    inFavorit: false,
    fiveDaysDisplay: undefined,
    fiveDaysTemp: undefined, //discription
    days5: [],

  }
  componentDidMount() {
    console.log('App started')
  }

  handleFavorite = () => {
    const { city, temprature, description, locationKey } = this.state;
    this.props.addToFav({ city, temprature, description, locationKey })
  }

  creataArrayCityKeyCode = (item) => {
    for (let i = 0; i < item.length - 1; i++)
      console.log("Key detection", item)

  }

  getSearchTerm = event => {
    event.preventDefault();
    let city = event.target.elements.city.value; //City input
    this.getCityKey(city);
  };

  getWeather = async (event) => {
    event.preventDefault();
    let city = event.target.elements.city.value; //City input
    let aoutoComplitData = null;
    let currentForecastData = null;
    let fiveDaysForcastData = null;
    let citySearchResultsAoutComlete = [];

    // 1- Get AoutoCmpleat city details (location key):
    aoutoComplitData = await get_location_id(city)
    if (aoutoComplitData[0] === undefined) {
      alert('There was an error Getting selected City')
      return
    }
    citySearchResultsAoutComlete = [aoutoComplitData[0].Key, aoutoComplitData[0].Country.LocalizedName]
    aoutoComplitData.forEach(this.creataArrayCityKeyCode)
    this.locationKey = aoutoComplitData[0].Key

    //2- Get Current weather (Hourley)
    currentForecastData = await get_current_weather(this.locationKey)

    //3- Get 5 Days weather
    fiveDaysForcastData = await get_weekly_weather(this.locationKey)
    const daysMapped = fiveDaysForcastData.map(({ EpochDate, Date, Temperature, Day: { IconPhrase } }) =>
      ({ id: EpochDate, icon: IconPhrase, date: Date, temperature: Temperature }))

    this.setState({
      locationKey: aoutoComplitData[0].Key,
      city: aoutoComplitData[0].LocalizedName,
      temprature: currentForecastData[0].Temperature.Value,
      description: currentForecastData[0].IconPhrase,
      days5: daysMapped

    })
    city = aoutoComplitData[0].LocalizedName;
  }
  render() {
    const { temprature, city, description } = this.state;
    return (
      <MainWrapper>
        <SearchBar getWeather={this.getWeather} city={city} />
        <CurrentCityDisplayWrapper>
          <CurrentCityDisplay temprature={temprature} city={city} description={description} />
          <BtnAddToFavorite handleFavorite={this.handleFavorite} />
        </CurrentCityDisplayWrapper>
        <WeatherDiscrWrapper description={description} />
        <FiveDaysTitle>Five days forecast</FiveDaysTitle>
        <FiveDaysWrapper>
          {
            this.state.days5.map(item =>
              <FiveDaysForcastDisplay {...item} key={item.id} />
            )
          }
        </FiveDaysWrapper>
      </MainWrapper>
    )
  }
};
export default Home;


const MainWrapper = styled.div`
display: flex;
margin-top: 40px;
flex-direction: column;
/* border: solid black 3px; */
`;

const CurrentCityDisplayWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 10px;
/* border: solid black 1px; */
`;

const FiveDaysWrapper = styled.div`
/* border: solid black 1px; */
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin: 10px;
`;

const FiveDaysTitle = styled.h3`
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
margin: 10px;
padding: 1rem;
/* border: solid whitesmoke 1px; */
`;
