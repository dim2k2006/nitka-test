import uuidv4 from 'uuid/v4';
import config from '../../config';

const {
    seatPrice = 0
} = config;

/**
 * Generates data for one item
 * @param {Number} number
 * @param {Number} row
 * @returns {Object}
 */
const generateItem = (number, row) => ({
    id: uuidv4(),
    number,
    row: row,
    status: 'vacant',
    price: seatPrice
});

export default generateItem;