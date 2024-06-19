import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const ConfirmedBooking = () => {
    return (
        <Box className="container confirmed-booking" p={4} textAlign="center">
            <VStack spacing={4}>
                <FontAwesomeIcon icon={faCircleCheck} size="3x" color="green" />
                <Heading as="h2" size="lg">Your reservation has been confirmed.</Heading>
                <Text>You will receive an email with all the details.</Text>
            </VStack>
        </Box>
    );
};

export default ConfirmedBooking;
