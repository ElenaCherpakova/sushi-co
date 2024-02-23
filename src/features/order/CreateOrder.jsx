import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

  const fakeCart = [
    {
      sushiId: 101,
      name: "Dragon Roll",
      quantity: 2,
      unitPrice: 18,
      totalPrice: 36,
    },
    {
      sushiId: 102,
      name: "Tuna Sashimi",
      quantity: 3,
      unitPrice: 12,
      totalPrice: 36,
    },
    {
      sushiId: 103,
      name: "Rainbow Roll",
      quantity: 1,
      unitPrice: 20,
      totalPrice: 20,
    },
  ];
  

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <form>
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button>Order now</button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
