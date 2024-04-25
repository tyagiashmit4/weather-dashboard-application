import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

//* Define props interface for CommonCard component
interface CommonCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  content: React.ReactNode; //* Content can be any valid React Node
}

//* Define CommonCard functional component with React.FC type and destructured props
const CommonCard: React.FC<CommonCardProps> = ({
  title,
  subtitle,
  imageUrl,
  content,
}) => {
  return (
    <Card>
      {/* Display image in CardMedia */}
      <CardMedia component="img" height="100" image={imageUrl} />

      <CardContent>
        {/* Display title in Typography component */}
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        {/* Display subtitle in Typography component with textSecondary color */}
        <Typography variant="subtitle1" color="textSecondary">
          {subtitle}
        </Typography>

        {/* Display dynamic content */}
        {content}
      </CardContent>
    </Card>
  );
};

export default CommonCard;
