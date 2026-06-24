import "./Orders.css";

function Orders() {

  const orders = [

    {
      id: 1,
      product: "iPhone 15",
      price: 79999,
      status: "Delivered",
      date: "12 July 2025",
    },

    {
      id: 2,
      product: "Nike Shoes",
      price: 4999,
      status: "Shipped",
      date: "14 July 2025",
    },

    {
      id: 3,
      product: "Smart Watch",
      price: 2999,
      status: "Processing",
      date: "16 July 2025",
    },

  ];

  return (

    <div className="orders">

      <h1>
        📦 Order History
      </h1>

      <div className="orders-container">

        {orders.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            <h2>
              {order.product}
            </h2>

            <p>
              Price:
              ₹{order.price}
            </p>

            <p>
              Date:
              {order.date}
            </p>

            <span
              className={`status ${order.status}`}
            >
              {order.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Orders;