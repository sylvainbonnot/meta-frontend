import { Link } from 'react-router-dom';
import { Flex, Box, Heading, Text, Image, Button, Spacer } from '@chakra-ui/react';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import pages from '../../../utils/pages';
import './Hero.css';

const Hero = () => {
    return (
        <Box as="section" className="hero">
            <Flex className="container" direction={{ base: "column", md: "row" }} align="center">
                <Spacer />
                <Box className="hero-information">
                    <Heading as="h1" size="2xl" className="hero-information h1">Little Lemon</Heading>
                    <Heading as="h2" size="lg" className="hero-information h2">Chicago</Heading>
                    <Text mt={4} mb={6} className="hero-information p">
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </Text>
                    <Button marginTop='20px' backgroundColor='#F4CE14' borderRadius='10px' variant='solid'
                        as={Link} to={pages.get('bookings').path} size="lg" sx={{
                            display: 'inline-block',
                            marginTop: '2rem',
                            fontSize: '24px', // Increase font size
                            padding: '24px 48px', // Increase padding
                            height: 'auto', // Adjust height if necessary
                        }}
                    >
                        Reserve a table
                    </Button>
                </Box>
                <Image
                    className="hero-image"
                    src={restaurantFoodImage}
                    alt="Restaurant food"
                />
                <Spacer />
            </Flex>
        </Box>
    );
};

export default Hero;
