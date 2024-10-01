import React from 'react';
import { Typography, Box, Button, Grid, IconButton, Link } from '@mui/material';
import Image from 'next/image'; // For the logo image
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

// Import the logo image (replace with your path)
import logo from '../assets/Home-image.png';

export default function Footer() {
  return (
    <Box
      sx={{
        paddingTop: '20px',
        backgroundColor: '#f4f0ec', // Light background color
        borderBottom: '1px solid #ccc', // Optional border
        width: '100vw', // Full width for the footer
        overflowX: 'hidden', // Hide any horizontal overflow
      }}
    >
      <Grid 
        container 
        alignItems="center" 
        justifyContent="center" // Center grid content
      >
        {/* Left side: Logo and Social Icons */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ 
            textAlign: { xs: 'center', md: 'center' }, // Center content for both mobile and desktop
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Logo */}
            <Image
              src={logo} // Add your logo path
              alt="InteriorCafe Logo"
              width={200} // Adjust width and height as needed
              height={100}
            />
            {/* Slogan */}
            <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 1 }}>
              WE ARE NEW! BUT EXPERIENCED!
            </Typography>
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: '8px', mt: 2 }}>
              <IconButton href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Right side: Book your free consult */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'center', md: 'center' }, // Center the text
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Text */}
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'cursive', // You can adjust the font family to match the design
                fontWeight: 600,
                mb: 2,
              }}
            >
              Book Your
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}
            >
              Free Consult
            </Typography>
            {/* Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '16px',
                padding: '10px 24px',
                borderRadius: '50px',
              }}
              endIcon={<span>›</span>}
            >
              BOOK NOW
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer (Optional) */}
      <Box
        sx={{
          backgroundColor: '#000', // Black background color
          color: '#fff', // White text color
          width: '100%', // Ensure the footer is full width
          textAlign: 'center',
          pt: 5, // Padding at the top
          pb: 2, // Padding at the bottom
          mt: 5, // Adds margin at the top
          position: 'relative',
          zIndex: 1,
          borderTopLeftRadius: '70% 12vw', // Curved effect at the top of the footer
          borderTopRightRadius: '70% 12vw', // Matching curve on both sides
          overflow: 'hidden', // Ensure no overflow issues
        }}
      >
        {/* Footer Navigation Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3, // Space between the links
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontWeight: 'bold' }}
          >
            Home
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontWeight: 'bold' }}
          >
            About
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontWeight: 'bold' }}
          >
            Shop
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontWeight: 'bold' }}
          >
            Services
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontWeight: 'bold' }}
          >
            Blog
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontWeight: 'bold' }}
          >
            Contact
          </Link>
        </Box>

        {/* Copyright Text */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          &copy; 2022 Divi Interior Designer. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}