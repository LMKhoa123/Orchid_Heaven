import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const Login = ({ isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginWithGoogle, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <div
      className={`py-10 mt-20 min-h-screen ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {!user ? (
          <div className="max-w-md mx-auto">
            {/* <form onSubmit={handleLogin} className="mb-4">
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md text-gray-700"
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md ${
                  isDarkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                Login
              </button>
            </form> */}
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
              onClick={handleLoginGoogle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4"
                id="google"
              >
                <path
                  fill="#fbbb00"
                  d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                />
                <path
                  fill="#518ef8"
                  d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                />
                <path
                  fill="#28b446"
                  d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                />
                <path
                  fill="#f14336"
                  d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                />
              </svg>{" "}
              Đăng nhập bằng Google
            </button>
          </div>
        ) : (
          <p className="text-center">Welcome, {user.email}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
