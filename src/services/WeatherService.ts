export interface WeatherData {
  country: string;
  temp: string;
  sunrise: string;
  sunset: string;
  humidity: string;
  windSpeed: string;
  weatherCode: number;
  dailyWeather: { day: string; temp: string; weatherCode: number }[];
}

const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const getDayName = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

export const fetchWeatherData = async (query: string): Promise<WeatherData[]> => {
  try {
    // 1. Geocoding to get coordinates
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        query
      )}&count=1&language=en&format=json`
    );
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("Location not found");
    }

    const { latitude, longitude, name, country } = geoData.results[0];
    const locationName = country ? `${name}, ${country}` : name;

    // 2. Fetch weather data
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,sunrise,sunset,weather_code&timezone=auto`
    );
    const weatherData = await weatherResponse.json();

    const current = weatherData.current;
    const daily = weatherData.daily;

    // 3. Map to our interface
    const formattedData: WeatherData = {
      country: locationName,
      temp: `${Math.round(current.temperature_2m)}°C`,
      sunrise: formatTime(daily.sunrise[0]),
      sunset: formatTime(daily.sunset[0]),
      humidity: `${current.relative_humidity_2m}%`,
      windSpeed: `${current.wind_speed_10m} km/h`,
      weatherCode: current.weather_code,
      dailyWeather: daily.time.slice(1, 4).map((time: string, index: number) => ({
        day: getDayName(time),
        temp: `${Math.round(daily.temperature_2m_max[index + 1])}°C`,
        weatherCode: daily.weather_code[index + 1],
      })),
    };

    return [formattedData];
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
