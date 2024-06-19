import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, FormControl, FormLabel, FormErrorMessage, Input, Select } from '@chakra-ui/react';

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
    const minimumDate = new Date().toISOString().split('T')[0];
    const minimumNumberOfGuests = 1;
    const maximumNumberOfGuests = 10;
    const occasions = ['Birthday', 'Anniversary'];
    const reservationTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const validationSchema = Yup.object().shape({
        date: Yup.date().min(minimumDate, 'Please choose a valid date').required('Please choose a valid date'),
        time: Yup.string().required('Please choose a valid time'),
        numberOfGuests: Yup.number()
            .min(minimumNumberOfGuests, 'Please enter a number between 1 and 10')
            .max(maximumNumberOfGuests, 'Please enter a number between 1 and 10')
            .required('Please enter a number between 1 and 10'),
        occasion: Yup.string().required('Please choose a valid occasion'),
    });

    return (
        <Formik
            initialValues={{
                date: minimumDate,
                time: reservationTimes[0],
                numberOfGuests: minimumNumberOfGuests,
                occasion: occasions[0],
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                submitData(values);
                setSubmitting(false);
            }}
        >
            {({ values, handleChange, setFieldValue, isValid, isSubmitting }) => (
                <Box className="bookings" maxWidth="400px" margin="0 auto" p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
                    <Form>
                        <Box mb={4}>
                            <FormControl isInvalid={!!<ErrorMessage name="date" />}>
                                <FormLabel htmlFor="booking-date">Date</FormLabel>
                                <Field
                                    as={Input}
                                    type="date"
                                    id="booking-date"
                                    name="date"
                                    min={minimumDate}
                                    onChange={(e) => {
                                        handleChange(e);
                                        dispatchOnDateChange(e.target.value);
                                    }}
                                />
                                <FormErrorMessage>
                                    <ErrorMessage name="date" />
                                </FormErrorMessage>
                            </FormControl>
                        </Box>

                        <Box mb={4}>
                            <FormControl isInvalid={!!<ErrorMessage name="time" />}>
                                <FormLabel htmlFor="booking-time">Time</FormLabel>
                                <Field as={Select} id="booking-time" name="time">
                                    {reservationTimes.map((time) => (
                                        <option data-testid="booking-time-option" key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </Field>
                                <FormErrorMessage>
                                    <ErrorMessage name="time" />
                                </FormErrorMessage>
                            </FormControl>
                        </Box>

                        <Box mb={4}>
                            <FormControl isInvalid={!!<ErrorMessage name="numberOfGuests" />}>
                                <FormLabel htmlFor="booking-number-guests">Number of guests</FormLabel>
                                <Field
                                    as={Input}
                                    type="number"
                                    id="booking-number-guests"
                                    name="numberOfGuests"
                                    min={minimumNumberOfGuests}
                                    max={maximumNumberOfGuests}
                                />
                                <FormErrorMessage>
                                    <ErrorMessage name="numberOfGuests" />
                                </FormErrorMessage>
                            </FormControl>
                        </Box>

                        <Box mb={4}>
                            <FormControl isInvalid={!!<ErrorMessage name="occasion" />}>
                                <FormLabel htmlFor="booking-occasion">Occasion</FormLabel>
                                <Field as={Select} id="booking-occasion" name="occasion">
                                    {occasions.map((occasion) => (
                                        <option data-testid="booking-occasion-option" key={occasion} value={occasion}>
                                            {occasion}
                                        </option>
                                    ))}
                                </Field>
                                <FormErrorMessage>
                                    <ErrorMessage name="occasion" />
                                </FormErrorMessage>
                            </FormControl>
                        </Box>

                        <Button
                            className="button-primary"
                            type="submit"
                            colorScheme="teal"
                            size="lg"
                            isDisabled={!isValid || isSubmitting}
                        >
                            Make your reservation
                        </Button>
                    </Form>
                </Box>
            )}
        </Formik>
    );
};

export default BookingForm;
