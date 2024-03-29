// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';

const order = {
  id: 'ABCDEF',
  customer: 'Elena',
  phone: '123456789',
  address: 'Ontario, Toronto , Canada',
  priority: true,
  estimatedDelivery: '2027-04-25T10:00:00',
  cart: [
    {
      sushiId: 104,
      name: 'Eel Nigiri',
      quantity: 3,
      unitPrice: 9,
      totalPrice: 27,
    },
    {
      sushiId: 105,
      name: 'Tempura Roll',
      quantity: 2,
      unitPrice: 14,
      totalPrice: 28,
    },
    {
      sushiId: 106,
      name: 'Sashimi Platter',
      quantity: 1,
      unitPrice: 25,
      totalPrice: 25,
    },
  ],
  position: '-9.000,38.000',
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price sushi: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export default Order;
