import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { Box, Heading } from '@chakra-ui/react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../../../utils/api';



const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitData = formData => {
        const response = submitAPI(formData);
        if (response) navigate('/confirmed-booking');
    };

    return (
        <Box className="bookings" p={4}>
            <Heading as="h2" mb={4}>Table reservation</Heading>
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitData={submitData}
            />
        </Box>
    );
};

export default Bookings;
