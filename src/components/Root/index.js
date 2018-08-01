import React, {Component} from 'react';
import SeatItem from '../SeatItem';
import Classnames from 'classnames';
import './index.css';
import config from '../../config';

const {seatsPerRow = 0, seatPrice = 0} = config;

/**
 * Creates a new Root class
 */
class Root extends Component {
    /**
     * Constructor
     * @param {Object} props
     */
    constructor(props) {
        super();

        const {seats = [], rows = 0} = props.data;

        this.toggleOrder = this.toggleOrder.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
        this.resetOrder = this.resetOrder.bind(this);

        this.state = {
            seats,
            rows,
            isOrderSubmitted: false
        };
    }

    /**
     * Toggles seat order status
     * @param {String} id
     */
    toggleOrder(id) {
        const {seats = []} = this.state;
        const newSeats = seats.map((item) => {
            if (item.id !== id) {
                return item;
            }

            return {
                ...item,
                status: (item.status === 'ordered') ? 'vacant' : 'ordered'
            };
        });

        this.setState({seats: newSeats});
    }

    /**
     * Submits order
     */
    submitOrder() {
        const {seats = []} = this.state;
        const newSeats = seats.map((item) => {
            if (item.status !== 'ordered') {
                return item;
            }

            return {
                ...item,
                status: 'booked'
            };
        });
        const isOrderSubmitted = true;

        this.setState({seats: newSeats, isOrderSubmitted});
    }

    /**
     * Resets order
     */
    resetOrder() {
        const {seats = []} = this.state;
        const newSeats = seats.map((item) => {
            if (item.status !== 'ordered') {
                return item;
            }

            return {
                ...item,
                status: 'vacant'
            };
        });

        this.setState({seats: newSeats});
    }

    /**
     * Renders component
     * @returns {JSX}
     */
    render() {
        const {seats = [], rows = 0, isOrderSubmitted = false} = this.state;
        const newSeats = [...seats];
        const selectedFields = seats.filter((item) => item.status === 'ordered');
        const selectedFieldsLength = selectedFields.length;
        const rowsArray = [];
        const modalClass = Classnames({
            root__modal: true,
            root__modal_visible: isOrderSubmitted
        });

        for (let i = 0; i < rows; i++) {
            const row = newSeats.splice(0, seatsPerRow);

            rowsArray.push(row);
        }

        return (
            <div className="root">
                <div className="root__screen">
                    <img src="images/vis-screen.jpg" alt="screen" />
                </div>

                <div className="root__list">
                    {
                        rowsArray.map((row, idx) => (
                            <div key={idx} className="root__row">
                                {
                                    row.map((item, itemIdx) => <li key={itemIdx} className="root__item"><SeatItem {...item} onClick={this.toggleOrder} /></li>)
                                }
                            </div>
                        ))
                    }
                </div>

                {selectedFieldsLength > 0 && <div className="root__result">
                    <div className="root__info">
                        <div className="root__sum">Итого к оплате: {selectedFields.length * seatPrice} руб.</div>

                        <div className="root__selected">
                            {
                                selectedFields.map((item, idx) => {
                                    const comma = (selectedFieldsLength !== idx + 1)
                                        ? ','
                                        : '';

                                    return (
                                        <span key={idx}>ряд&nbsp;{item.row}&nbsp;место&nbsp;{item.number}{comma} </span>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className="root__buttons">
                        <button className="root__button root__submit" onClick={this.submitOrder}>Купить</button>

                        <button className="root__button root__reset" onClick={this.resetOrder}>Отмена</button>
                    </div>
                </div>}

                <div className={modalClass}>
                    Спасибо за заказ!
                </div>
            </div>
        );
    }
}

export default Root;
