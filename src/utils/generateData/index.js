import config from '../../config';
import getRowsCount from '../getRowsCount';
import generateRow from '../generateRow';
import addBookedItems from '../addBookedItems';

const {
    totalSeats = 0,
    seatsPerRow = 0,
    bookedSeats = 0
} = config;

/**
 * Generates data
 * @returns {Array}
 */
const generateData = () => {
    let seats = [];
    const rows = getRowsCount(totalSeats, seatsPerRow);

    for (let i = 0; i < rows; i++) {
        const id = i + 1;
        const row = generateRow(id, seatsPerRow);

        seats = [
            ...seats,
            ...row
        ];
    }

    const newSeats = addBookedItems(seats, bookedSeats, totalSeats);

    return {
        seats: newSeats,
        rows
    };
};

export default generateData;
