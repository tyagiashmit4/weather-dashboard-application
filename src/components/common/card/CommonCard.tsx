import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

interface CommonCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  content: React.ReactNode;
}

const CommonCard: React.FC<CommonCardProps> = ({
  title,
  subtitle,
  imageUrl,
  content,
}) => {
  return (
    <Card>
      <CardMedia component="img" height="100" image={imageUrl} />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {subtitle}
        </Typography>
        {content}
      </CardContent>
    </Card>
  );
};

export default CommonCard;
