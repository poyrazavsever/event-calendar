import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase"; // Firebase yapılandırma dosyanız
import { motion, useAnimation } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Kullanıcı adı ekleyin
  const [error, setError] = useState("");
  const router = useRouter();
  const controls = useAnimation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Başarılı girişte ana sayfaya yönlendir
    } catch (error) {
      toast.error(error.message)
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/"); // Başarılı kayıt işlemi sonrası ana sayfaya yönlendir
    } catch (error) {
      toast.error(error.message)
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/"); // Başarılı girişte ana sayfaya yönlendir
    } catch (error) {
      toast.error(error.message)
      setError(error.message);
    }
  };


  return (
    <div className="h-screen w-full flex items-center justify-around bg-neutral-950">
      <motion.div
        className="max-w-md w-full bg-neutral-800 bg-opacity-20 border border-neutral-700 shadow-lg rounded-lg p-8"
        animate={controls}
        style={{
          height: "520px", // Sabit yükseklik
        }}
      >
        <div className="tabs flex items-center gap-8 mb-4">
          <motion.button
            onClick={() => setTab("login")}
            className={`tab flex-1 py-2 px-4 rounded-lg ${
              tab === "login"
                ? "bg-neutral-800 border border-neutral-800 text-white"
                : "bg-neutral-400 text-neutral-900"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            Giriş
          </motion.button>
          <motion.button
            onClick={() => setTab("register")}
            className={`tab flex-1 py-2 px-4 rounded-lg ${
              tab === "register"
                ? "bg-neutral-800 border border-neutral-800 text-white"
                : "bg-neutral-400 text-neutral-900"
            }`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            Kayıt
          </motion.button>
        </div>

        <div className="pt-4">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {tab === "register" && (
              <motion.input
                type="text"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-2 mb-3 border border-neutral-700 bg-neutral-950 rounded-lg focus:outline-none text-neutral-100 placeholder:text-neutral-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              />
            )}
            <motion.input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mb-3 border border-neutral-700 bg-neutral-950 rounded-lg focus:outline-none text-neutral-100 placeholder:text-neutral-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            />
            <motion.input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 mb-3 border border-neutral-700 bg-neutral-950 rounded-lg focus:outline-none text-neutral-100 placeholder:text-neutral-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            />
            <motion.button
              type="submit"
              className="w-full py-2 bg-neutral-950 border border-neutral-800 text-neutral-200 hover:bg-neutral-800 transition rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onClick={tab === "login" ? handleLogin : handleRegister}
            >
              {tab === "login" ? "Giriş Yap" : "Kayıt Ol"}
            </motion.button>
            <div className="w-full flex items-center gap-4">
              <div className="h-[1px] w-full bg-neutral-500"></div>
              <span className="text-sm font-bold uppercase text-neutral-600">
                Yada
              </span>
              <div className="h-[1px] w-full bg-neutral-500"></div>
            </div>
            <motion.button
              className="w-full py-2 bg-neutral-600 border border-neutral-700 text-white hover:bg-blue-950 transition-all rounded flex  items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onClick={handleGoogleSignIn}
            >
              <FaGoogle />
              Google ile Giriş Yap
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <div></div>
    </div>
  );
}
