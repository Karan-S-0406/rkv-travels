import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const VehicleCard = ({ vehicle }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '20px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardMedia
                component="img"
                height="140"
                image={vehicle.image}
                alt={vehicle.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {vehicle.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {vehicle.description}
                </Typography>
                <Typography variant="h6" color="primary">
                    Rent: {vehicle.rent} per day
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VehicleCard;