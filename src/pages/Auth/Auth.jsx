import { useState } from "react";

import "./Auth.css";

function Auth() {

  const [isLogin, setIsLogin] =
    useState(true);

  return (

    <div className="auth">

      <div className="auth-box">

        <h1>
          {isLogin
            ? "Login"
            : "Register"}
        </h1>

        {!isLogin && (

          <input
            type="text"
            placeholder="Full Name"
          />

        )}

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          {isLogin
            ? "Login"
            : "Register"}
        </button>

        <p>

          {isLogin
            ? "Don't have account?"
            : "Already have account?"}

          <span
            onClick={() =>
              setIsLogin(!isLogin)
            }
          >

            {isLogin
              ? " Register"
              : " Login"}

          </span>

        </p>

      </div>

    </div>
  );
}

export default Auth;