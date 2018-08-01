import generateItem from '../generateItem';

/**
 * Generates row
 * @param {Number} rowId
 * @param {Number} seatsPerRow
 * @returns {Array}
 */
const generateRow = (rowId, seatsPerRow = 0) => {
    const row = [];

    for (let i = 0; i < seatsPerRow; i++) {
        const itemNumber = i + 1;
        const item = generateItem(itemNumber, rowId);

        row.push(item);
    }

    return row;
};

export default generateRow;