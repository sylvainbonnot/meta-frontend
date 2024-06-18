import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Box, Image, Heading, Text, Flex, Spacer } from '@chakra-ui/react';
import pages from '../../../utils/pages';
import './MealCard.css';

const MealCard = ({ meal }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            className="meal-card"
        >
            <Image src={meal.image} alt={meal.name} className="meal-card-image" />

            <Box p="6">
                <Flex alignItems="baseline" className="meal-card-header">
                    <Heading as="h3" size="md" mr={2}>
                        {meal.name}
                    </Heading>
                    <Spacer />
                    <Text fontSize="lg" color="gray.600">
                        {meal.price}
                    </Text>
                </Flex>

                <Text mt={4} className="meal-card-body-footer">
                    {meal.description}
                </Text>


            </Box>
        </Box>
    );
};

export default MealCard;
