import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import "./Payment.css";

function Payment() {

  const [loading, setLoading] =
    useState(false);

  const [paymentMethod,
    setPaymentMethod] =
    useState("card");

  const navigate =
    useNavigate();

  // PAYMENT

  const handlePayment = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      navigate("/success");

    }, 3000);
  };

  return (

    <div className="payment">

      <div className="payment-box">

        <h1>
          💳 Payment
        </h1>

        {/* PAYMENT METHODS */}

        <div className="payment-methods">

          {/* CARD */}

          <button
            className={
              paymentMethod === "card"
              ? "active-method"
              : ""
            }

            onClick={() =>
              setPaymentMethod("card")
            }
          >
            Card
          </button>

          {/* UPI */}

          <button
            className={
              paymentMethod === "upi"
              ? "active-method"
              : ""
            }

            onClick={() =>
              setPaymentMethod("upi")
            }
          >
            UPI
          </button>

          {/* QR CODE */}

          <button
            className={
              paymentMethod === "qr"
              ? "active-method"
              : ""
            }

            onClick={() =>
              setPaymentMethod("qr")
            }
          >
            QR Code
          </button>

        </div>

        {/* CARD PAYMENT */}

        {paymentMethod ===
          "card" && (

          <>

            <input
              type="text"
              placeholder="Card Holder Name"
            />

            <input
              type="text"
              placeholder="Card Number"
            />

            <div className="payment-row">

              <input
                type="text"
                placeholder="MM/YY"
              />

              <input
                type="password"
                placeholder="CVV"
              />

            </div>

          </>

        )}

        {/* UPI PAYMENT */}

        {paymentMethod ===
          "upi" && (

          <>

            <div className="upi-apps">

              <div className="upi-card">
                Google Pay
              </div>

              <div className="upi-card">
                PhonePe
              </div>

              <div className="upi-card">
                Paytm
              </div>

            </div>

            <input
              type="text"
              placeholder="Enter UPI ID"
            />

          </>

        )}

        {/* QR PAYMENT */}

        {paymentMethod ===
          "qr" && (

          <div className="qr-payment">

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=ShopSpherePayment"
              alt="QR Code"
            />

            <h3>
              Scan & Pay
            </h3>

            <p>
              Use any UPI app to scan
              this QR code.
            </p>

          </div>

        )}

        {/* PAY BUTTON */}

        <button
          onClick={handlePayment}
        >

          {loading
            ? "Processing..."
            : "Pay Now"}

        </button>

        {/* LOADER */}

        {loading && (

          <div className="loader">

            <div className="spinner"></div>

            <p>
              Processing Payment...
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Payment;
