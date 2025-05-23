import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const IPLSection = () => {
    return (
        <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2, marginTop: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Our Collaborations with IPL Franchises
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ padding: 2, textAlign: 'center' }}>
                        <Typography variant="h6">Mumbai Indians</Typography>
                        <Typography variant="body1">
                            We are proud to provide luxury buses for the Mumbai Indians, ensuring comfort and style for the team.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ padding: 2, textAlign: 'center' }}>
                        <Typography variant="h6">Kolkata Knight Riders</Typography>
                        <Typography variant="body1">
                            Our collaboration with the Kolkata Knight Riders includes top-notch transportation solutions for their players.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IPLSection;