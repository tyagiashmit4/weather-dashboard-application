import React from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import CommonCard from "../../components/common/card/CommonCard";
import {
  WbSunny,
  FilterDrama,
  Grain,
  AcUnit,
  Thunderstorm,
  Opacity,
  Air,
  WbTwilight,
  CloudQueue
} from "@mui/icons-material";

//* Define props interface for WeatherCard
interface WeatherCardProps {
  country: string;
  temp: string;
  sunrise: string;
  sunset: string;
  humidity: string;
  windSpeed: string;
  weatherCode: number;
  dailyWeather: { day: string; temp: string; weatherCode: number }[];
}

const getWeatherIcon = (code: number, size: "small" | "large" = "large") => {
  const props = { 
    sx: { 
      fontSize: size === "large" ? 80 : 40, 
      color: "#ffca28",
      mb: size === "large" ? 2 : 1
    } 
  };
  
  if (code === 0) return <WbSunny {...props} />;
  if (code <= 3) return <FilterDrama {...props} sx={{ ...props.sx, color: "#90caf9" }} />;
  if (code <= 48) return <CloudQueue {...props} sx={{ ...props.sx, color: "#b0bec5" }} />;
  if (code <= 67) return <Grain {...props} sx={{ ...props.sx, color: "#64b5f6" }} />;
  if (code <= 77) return <AcUnit {...props} sx={{ ...props.sx, color: "#e3f2fd" }} />;
  if (code <= 82) return <Opacity {...props} sx={{ ...props.sx, color: "#42a5f5" }} />;
  if (code >= 95) return <Thunderstorm {...props} sx={{ ...props.sx, color: "#f44336" }} />;
  
  return <WbSunny {...props} />;
};

const WeatherCard: React.FC<WeatherCardProps> = ({
  country,
  temp,
  sunrise,
  sunset,
  humidity,
  windSpeed,
  weatherCode,
  dailyWeather,
}) => {
  return (
    <CommonCard
      title={country}
      subtitle="Current Weather"
      content={
        <Box sx={{ mt: 2 }}>
          {/* Main Temp and Icon Section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            {getWeatherIcon(weatherCode)}
            <Typography variant="h1" sx={{ fontWeight: 700, fontSize: '4.5rem' }}>
              {temp}
            </Typography>
          </Box>

          {/* Details Row */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <WbTwilight sx={{ color: '#ffb74d', mb: 1 }} />
                <Typography variant="caption" display="block">Sunrise</Typography>
                <Typography variant="body2">{sunrise}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <WbTwilight sx={{ color: '#fb8c00', mb: 1 }} />
                <Typography variant="caption" display="block">Sunset</Typography>
                <Typography variant="body2">{sunset}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Opacity sx={{ color: '#4fc3f7', mb: 1 }} />
                <Typography variant="caption" display="block">Humidity</Typography>
                <Typography variant="body2">{humidity}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Air sx={{ color: '#cfd8dc', mb: 1 }} />
                <Typography variant="caption" display="block">Wind</Typography>
                <Typography variant="body2">{windSpeed}</Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 3 }} />

          {/* Forecast Section */}
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, textAlign: 'left' }}>
            3-Day Forecast
          </Typography>
          <Grid container spacing={2}>
            {dailyWeather.map((dayWeather, index) => (
              <Grid item xs={4} key={index}>
                <Box className="forecast-item" sx={{ textAlign: 'center' }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    {dayWeather.day.substring(0, 3)}
                  </Typography>
                  {getWeatherIcon(dayWeather.weatherCode, "small")}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {dayWeather.temp}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      }
    />
  );
};

export default WeatherCard;
