import { useState } from "react";
import { useRouter } from "next/router";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase"; // Firebase yapılandırma dosyan

export default function LoginPage() {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Başarılı girişte ana sayfaya yönlendir
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/"); // Başarılı kayıt işlemi sonrası ana sayfaya yönlendir
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <div className="tabs">
          <button
            onClick={() => setTab("login")}
            className={`tab ${tab === "login" ? "active" : ""}`}
          >
            Giriş
          </button>
          <button
            onClick={() => setTab("register")}
            className={`tab ${tab === "register" ? "active" : ""}`}
          >
            Kayıt
          </button>
        </div>
        <form onSubmit={tab === "login" ? handleLogin : handleRegister}>
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {tab === "login" ? "Giriş Yap" : "Kayıt Ol"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}
