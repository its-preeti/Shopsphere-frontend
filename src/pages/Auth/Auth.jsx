import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import {
  registerUser,
  loginUser,
} from "../../services/authApi";

import "./Auth.css";

function Auth() {

  const [isLogin, setIsLogin] =
    useState(true);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  // SUBMIT
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        // LOGIN
        if (isLogin) {

          const data =
            await loginUser({
              email,
              password,
            });

          login(data);

          alert(
            "Login Successful ✅"
          );

          navigate("/");
        }

        // REGISTER
        else {

          const data =
            await registerUser({
              name,
              email,
              password,
            });

          login(data);

          alert(
            "Register Successful ✅"
          );

          navigate("/");
        }

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Something went wrong"
        );
      }
    };

  return (

    <div className="auth-page">

      <form
        className="auth-box"
        onSubmit={handleSubmit}
      >

        <h1>

          {isLogin
            ? "Login"
            : "Register"}

        </h1>

        {/* NAME */}

        {!isLogin && (

          <input
            type="text"
            placeholder="Full Name"

            value={name}

            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

        )}

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email"

          value={email}

          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        {/* BUTTON */}

        <button
          type="submit"
          className="auth-btn"
        >

          {isLogin
            ? "Login"
            : "Register"}

        </button>

        {/* TOGGLE */}

        <p className="auth-text">

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

      </form>

    </div>
  );
}

export default Auth;