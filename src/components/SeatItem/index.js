import React from 'react';
import Classnames from 'classnames';
import './index.css';

/**
 * Renders SeatItem component
 * @param {Object}
 * @returns {JSX}
 */
const SeatItem = ({
    id,
    number,
    row,
    price,
    status,
    onClick
}) => {
    const seatClass = Classnames({
        seatItem: true,

        seatItem_status_vacant: status === 'vacant',
        seatItem_status_booked: status === 'booked',
        seatItem_status_ordered: status === 'ordered',
    });

    return (
        <div
            id={id}
            className={seatClass}
            onClick={
                (status !== 'booked')
                    ? () => onClick(id)
                    : (f) => f
            }>{number}</div>
    );
};

export default SeatItem;
