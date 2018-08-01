/**
 * Generates random integer between min and max
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
const getRandomInteger = (min, max) => {
    const rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));

    if (getRandomInteger.cache.indexOf(rand) !== -1) {
        return getRandomInteger(min, max);
    }

    getRandomInteger.cache.push(rand);

    return rand;
};

getRandomInteger.cache = [];

export default getRandomInteger;
