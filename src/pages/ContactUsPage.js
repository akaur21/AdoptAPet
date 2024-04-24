import React from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';


const ContactUsPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Paper sx={{ p: 10}} elevation={6}>

        <Container maxWidth="sm" padding={10}>
        <Typography variant="h4" align="center" gutterBottom>
            Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                required
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                type="email"
                required
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={6}
                required
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                >
                Send Message
                </Button>
            </Grid>
            </Grid>
        </form>
        </Container>
    </Paper>
  );
};

export default ContactUsPage;