import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import VehicleCard from "../components/VehicleCard";

// Static data for vehicles
const vehicles = [
  {
    name: "Luxury Bus",
    description: "Spacious and comfortable, ideal for group travel.",
    rent: "₹8,000",
    image: "https://images.pexels.com/photos/45923/pexels-photo-45923.jpeg",
  },
  {
    name: "Mini Bus",
    description: "Perfect for small groups and city tours.",
    rent: "₹5,000",
    image: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg",
  },
  {
    name: "SUV",
    description: "Powerful and stylish, suitable for all terrains.",
    rent: "₹3,500",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
  {
    name: "Sedan",
    description: "Elegant and comfortable for family trips.",
    rent: "₹2,500",
    image: "https://images.pexels.com/photos/170782/pexels-photo-170782.jpeg",
  },
  {
    name: "Hatchback",
    description: "Compact and efficient for city rides.",
    rent: "₹1,800",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
  {
    name: "Tempo Traveller",
    description: "Ideal for medium-sized groups and tours.",
    rent: "₹4,500",
    image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
  },
  {
    name: "Convertible",
    description: "Experience luxury and style on the road.",
    rent: "₹6,000",
    image: "https://images.pexels.com/photos/170782/pexels-photo-170782.jpeg",
  },
  {
    name: "Coach Bus",
    description: "Best for long journeys and large groups.",
    rent: "₹9,000",
    image: "https://images.pexels.com/photos/45923/pexels-photo-45923.jpeg",
  },
  {
    name: "MUV",
    description: "Spacious and robust for family outings.",
    rent: "₹3,000",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  },
  {
    name: "Executive Car",
    description: "Premium comfort for business travel.",
    rent: "₹4,000",
    image: "https://images.pexels.com/photos/170782/pexels-photo-170782.jpeg",
  },
];

const Home = () => (
  <Box sx={{ mt: 6, textAlign: "center" }}>
    <Typography variant="h2" gutterBottom>
      Welcome to RKV Travels
    </Typography>
    <Typography variant="h5" color="text.secondary" gutterBottom>
      Your trusted partner for comfortable and reliable travel experiences.
    </Typography>
    <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
      Explore our wide range of vehicles for rent, from luxury buses to family cars.
      We are proud partners of IPL franchises, providing top-notch transportation for teams and fans alike.
      Book your next journey with us and travel in style!
    </Typography>
    <Button
      variant="contained"
      color="primary"
      size="large"
      href="/vehicles"
      sx={{ mr: 2 }}
    >
      View Vehicles
    </Button>
    <Button
      variant="outlined"
      color="primary"
      size="large"
      href="/contact"
    >
      Contact Us
    </Button>

    <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
      Featured Vehicles
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      {vehicles.map((vehicle, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
          <VehicleCard vehicle={vehicle} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Home;