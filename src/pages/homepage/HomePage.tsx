import React, { useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import SearchBar from "../../components/common/searchbar/CommonSearchbar";
import {
  dummyWeatherData,
  dummyWeatherData2,
  dummyWeatherData3,
} from "../../data/DummyData";
import WeatherCard from "../weathercard/WeatherCard";
import bgImage from "../../assets/images/1.jpg";
import Navbar from "../../components/common/navbar/Navbar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [weatherData, setWeatherData] = useState(dummyWeatherData);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Filter data based on the search query
    switch (query.toLowerCase()) {
      case "usa":
        setWeatherData(dummyWeatherData);
        break;
      case "london":
        setWeatherData(dummyWeatherData2);
        break;
      case "amsterdam":
        setWeatherData(dummyWeatherData3);
        break;
      default:
        setWeatherData(dummyWeatherData);
        break;
    }
  };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          padding: "20px",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h4" color={"Black"}>
                  Climate Change 
                </Typography>
                <Typography variant="h5" color={"Black"}>
                  Weather Forecast Dashboard
                </Typography>
                <Typography variant="subtitle1" color={"Black"}>
                  Welcome to see the weather here.
                </Typography>
                <Typography variant="subtitle1" color={"Black"}>
                  {" "}
                  Make your plans according to that.
                </Typography>
                <SearchBar onSearch={handleSearch} />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3} justifyContent="center">
                {weatherData.map((weather, index) => (
                  <Grid item key={index}>
                    <WeatherCard {...weather} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
