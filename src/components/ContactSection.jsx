import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const ContactSection = () => {
    return (
        <Container maxWidth="md" style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                If you have any questions or inquiries, feel free to reach out to us!
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField fullWidth label="Your Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Your Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth>
                        Send Message
                    </Button>
                </Grid>
            </Grid>
            <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
                Or call us at: <strong>+123 456 7890</strong>
            </Typography>
        </Container>
    );
};

export default ContactSection;