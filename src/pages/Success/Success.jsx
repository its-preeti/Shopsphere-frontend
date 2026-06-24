import {
  Link,
} from "react-router-dom";

import "./Success.css";

function Success() {

  return (

    <div className="success">

      <div className="success-box">

        <div className="check">
          ✔
        </div>

        <h1>
          Payment Successful
        </h1>

        <p>
          Your order has been placed successfully.
        </p>

        <Link to="/">

          <button>
            Continue Shopping
          </button>

        </Link>

      </div>

    </div>
  );
}

export default Success;
