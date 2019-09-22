const API_KEY1 = "i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5" //Accuweather api key

export const get_location_id = async (city) => {
  try {
    const result = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY1}&q=${city}`)
    return await result.json();
  } catch (error) {
    console.error('There was an error Getting selected City')
  }
}

export const get_current_weather = async (location_id) => {
  try {
    const response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${location_id}?apikey=${API_KEY1}&metric=true`)
    return await response.json();
  } catch (error) {
    console.error('There was an error geting Current Weather')
  }
}

export const get_weekly_weather = async (location_id) => {
  try {
    const res = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location_id}?apikey=${API_KEY1}&metric=true`)
    const data = await res.json();
    return data.DailyForecasts;
  } catch (error) {
    console.error('There was an error geting 5 days forecast weather')
  }
}

