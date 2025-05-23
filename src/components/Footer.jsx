import React from 'react';
import { Box, Typography, Link, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const serviceLocations = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Goa"
];

const services = [
  "Luxury Bus Rentals",
  "Car Rentals (SUV, Sedan, Hatchback, MUV, Executive)",
  "Tempo Traveller Rentals",
  "IPL Team Transportation",
  "Corporate Travel",
  "Airport Transfers",
  "Tour Packages",
  "Event Transportation"
];

const Footer = () => (
  <Box sx={{ backgroundColor: '#282c34', color: 'white', mt: 6, pt: 4, pb: 2 }}>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Service Locations
        </Typography>
        <List dense>
          {serviceLocations.map((loc) => (
            <ListItem key={loc} sx={{ py: 0 }}>
              <ListItemText primary={loc} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Our Services
        </Typography>
        <List dense>
          {services.map((service) => (
            <ListItem key={service} sx={{ py: 0 }}>
              <ListItemText primary={service} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h6" gutterBottom>
          Connect With Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1 }}>
          <Link href="https://facebook.com" color="inherit" sx={{ mx: 1 }}>
            <Facebook fontSize="large" />
          </Link>
          <Link href="https://twitter.com" color="inherit" sx={{ mx: 1 }}>
            <Twitter fontSize="large" />
          </Link>
          <Link href="https://instagram.com" color="inherit" sx={{ mx: 1 }}>
            <Instagram fontSize="large" />
          </Link>
        </Box>
        <Typography variant="body2">
          Email: info@rkvtravels.com<br />
          Phone: +91 98765 43210
        </Typography>
      </Grid>
    </Grid>
    <Typography variant="body2" align="center" sx={{ mt: 4 }}>
      © {new Date().getFullYear()} RKV Travels. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;