import React from "react";
import { Grid } from "@mui/material";
import CommonCard from "../../components/common/card/CommonCard";
import sun from "../../assets/images/sun.avif";
import pic from "../../assets/images/weather2.jpg"

//* Define props interface for WeatherCard
interface WeatherCardProps {
  country: string;
  temp: string;
  sunrise: string;
  sunset: string;
  humidity: string;
  windSpeed: string;
  dailyWeather: { day: string; temp: string }[];
}

//* Define WeatherCard functional component with React.FC type and destructured props
const WeatherCard: React.FC<WeatherCardProps> = ({
  country,
  temp,
  sunrise,
  sunset,
  humidity,
  windSpeed,
  dailyWeather,
}) => {
    console.log("country",country)
  return (
    <CommonCard
      title={country}
      subtitle={`Temp: ${temp}, Sunrise: ${sunrise}, Sunset: ${sunset}, Humidity: ${humidity}, Wind Speed: ${windSpeed}`}
      imageUrl={pic}
      content={
        <Grid container spacing={2} >
          {/* Map through dailyWeather data and render CommonCard for each day */}
         {dailyWeather.map((dayWeather, index) => (
            
            <Grid item xs={4} key={index}>
              <CommonCard
                title={dayWeather.day}
                subtitle={`Temp: ${dayWeather.temp}`}
                imageUrl={sun}
                content={null}
              />
            </Grid>
          ))}
        </Grid>
      }
    />
  );
};

export default WeatherCard;
