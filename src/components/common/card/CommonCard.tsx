import React from "react";
import { Box, Typography } from "@mui/material";

//* Define props interface for CommonCard component
interface CommonCardProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  content?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

//* Define CommonCard functional component with Glassmorphism support
const CommonCard: React.FC<CommonCardProps> = ({
  title,
  subtitle,
  imageUrl,
  content,
  className = "",
  style,
}) => {
  return (
    <Box 
      className={`glass-card ${className}`} 
      style={{ 
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        ...style 
      }}
    >
      {imageUrl && (
        <Box 
          component="img" 
          src={imageUrl} 
          sx={{ 
            height: 80, 
            width: 80, 
            mb: 2,
            objectFit: 'contain' 
          }} 
          className="weather-icon"
        />
      )}

      <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
          {subtitle}
        </Typography>
      )}

      <Box sx={{ width: '100%' }}>
        {content}
      </Box>
    </Box>
  );
};

export default CommonCard;
