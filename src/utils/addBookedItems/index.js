import getRandomInteger from '../getRandomInteger';

const addBookedItems = (seats, bookedSeats, totalSeats) => {
    const newSeats = [...seats];

    for (let i = 0; i < bookedSeats; i++) {
        const index = getRandomInteger(0, totalSeats - 1);
        const seat = newSeats[index] || {};

        seat.status = 'booked';
    }

    return newSeats;
};

export default addBookedItems;
