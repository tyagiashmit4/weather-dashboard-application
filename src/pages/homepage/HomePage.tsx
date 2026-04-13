import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, CircularProgress, Alert, Box } from "@mui/material";
import SearchBar from "../../components/common/searchbar/CommonSearchbar";
import WeatherCard from "../weathercard/WeatherCard"; 
import Navbar from "../../components/common/navbar/Navbar"; 
import { fetchWeatherData, WeatherData } from "../../services/WeatherService";

const HomePage = () => {

  //* State for search query and weather data
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //* Fetch initial data on mount
  useEffect(() => {
    handleSearch("London");
  }, []);

  //* Function to handle search and update weather data
  const handleSearch = async (query: string) => {
    if (!query) return;
    
    setSearchQuery(query);
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(query);
      setWeatherData(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch weather data");
      setWeatherData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      className="App"
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        background: "var(--bg-gradient)",
        overflowX: "hidden"
      }}
    >
      <Navbar />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  color: "white",
                }}
              >
                <Typography 
                  variant="h2" 
                  className="hero-text"
                  sx={{ 
                    fontWeight: 700, 
                    mb: 1,
                    fontSize: { xs: '2.5rem', md: '3.75rem' }
                  }}
                >
                  SkySight
                </Typography>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 400, 
                    mb: 3,
                    opacity: 0.9,
                    fontSize: { xs: '1.5rem', md: '2.125rem' }
                  }}
                >
                  Your Ultimate Weather Companion
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, maxWidth: '500px', mx: {xs: 'auto', md: 0} }}>
                  Stay ahead of the elements. Get real-time updates, detailed forecasts, and plan your day with confidence.
                </Typography>
                
                <Box sx={{ maxWidth: '450px', mx: {xs: 'auto', md: 0} }}>
                  <SearchBar onSearch={handleSearch} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: '450px' 
                }}
              >
                {loading ? (
                  <CircularProgress size={60} sx={{ color: 'white' }} />
                ) : error ? (
                  <Alert 
                    severity="error" 
                    variant="filled"
                    className="glass-card"
                    sx={{ width: '100%', bgcolor: 'rgba(211, 47, 47, 0.2)', border: 'none' }}
                  >
                    {error}
                  </Alert>
                ) : weatherData.length > 0 ? (
                  weatherData.map((weather, index) => (
                    <Box key={index} sx={{ width: '100%', maxWidth: '500px' }}>
                      <WeatherCard {...weather} />
                    </Box>
                  ))
                ) : (
                  <Typography variant="h6" sx={{ opacity: 0.6 }}>
                    Enter a location to see the magic.
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
