import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking form', () => {
    const availableTimes = ['17:00', '18:00'];
    const today = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    test('should correctly render all fields and their default values', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} dispatchOnDateChange={dispatchOnDateChange} />
        );

        const dateInput = screen.getByLabelText(/Date/i);
        const timeSelect = screen.getByLabelText(/Time/i);
        const timeOptions = await screen.findAllByTestId('booking-time-option');
        const numberOfGuestsInput = screen.getByLabelText(/Number of guests/i);
        const occasionSelect = screen.getByLabelText(/Occasion/i);
        const occasionOptions = await screen.findAllByTestId('booking-occasion-option');
        const submitButton = screen.getByRole('button');

        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'booking-date');
        expect(dateInput).toHaveValue(today);

        expect(timeSelect).toBeInTheDocument();
        expect(timeSelect).toHaveAttribute('id', 'booking-time');
        expect(timeOptions.length).toBe(6); // Adjust the length according to your available times

        expect(numberOfGuestsInput).toBeInTheDocument();
        expect(numberOfGuestsInput).toHaveAttribute('id', 'booking-number-guests');
        expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
        expect(numberOfGuestsInput).toHaveValue(1);

        expect(occasionSelect).toBeInTheDocument();
        expect(occasionSelect).toHaveAttribute('id', 'booking-occasion');
        expect(occasionOptions.length).toBe(2);

        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
        expect(submitButton).toBeEnabled();
    });

    test('should successfully submit form with default values', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} dispatchOnDateChange={dispatchOnDateChange} />
        );

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        await screen.findByText('Make your reservation'); // Ensuring the form submission is processed

        expect(submitData).toHaveBeenCalledWith({
            date: today,
            time: availableTimes[0],
            numberOfGuests: 1,
            occasion: 'Birthday',
        });
    });

    test('should display an error message and disable submit button when date field\'s value is empty', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} dispatchOnDateChange={dispatchOnDateChange} />
        );

        const dateInput = screen.getByLabelText(/Date/i);
        fireEvent.change(dateInput, { target: { value: '' } });
        fireEvent.blur(dateInput);
        const errorMessage = await screen.findByText('Please choose a valid date');
        const submitButton = screen.getByRole('button');

        expect(errorMessage).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
    });

    test('should display an error message and disable submit button when number of guests field\'s value is empty', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} dispatchOnDateChange={dispatchOnDateChange} />
        );

        const numberOfGuestsInput = screen.getByLabelText(/Number of guests/i);
        fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
        fireEvent.blur(numberOfGuestsInput);
        const errorMessage = await screen.findByText('Please enter a number between 1 and 10');
        const submitButton = screen.getByRole('button');

        expect(errorMessage).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
    });
});

