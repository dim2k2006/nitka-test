/**
 * Counts the number of rows
 * @param {Number} totalSeats
 * @param {Number} seatsPerRow
 * @returns {Number}
 */
const getRowsCount = (totalSeats = 0, seatsPerRow = 0) => {
    const rows = Math.ceil(totalSeats / seatsPerRow);

    return rows;
};

export default getRowsCount;