import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Đăng nhập với email và password
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error logging in:", error.message);
      throw error;
    }
  };

  // Đăng nhập với Google
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error logging in with Google:", error.message);
      throw error;
    }
  };

  // Đăng xuất
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error.message);
      throw error;
    }
  };

  // Lắng nghe trạng thái thay đổi của người dùng (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
