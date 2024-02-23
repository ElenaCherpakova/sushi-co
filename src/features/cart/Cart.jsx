import { Link } from 'react-router-dom';

const fakeCart = [
  {
    sushiId: 101,
    name: 'California Roll',
    quantity: 2,
    unitPrice: 8,
    totalPrice: 16,
  },
  {
    sushiId: 102,
    name: 'Salmon Nigiri',
    quantity: 3,
    unitPrice: 4,
    totalPrice: 12,
  },
  {
    sushiId: 103,
    name: 'Spicy Tuna Roll',
    quantity: 1,
    unitPrice: 10,
    totalPrice: 10,
  },
];


function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order sushi</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
