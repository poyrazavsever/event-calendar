import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth"; // Firebase auth hook'u
import "../styles/globals.css";
import CustomCursor from '@/components/CustomCursor';

import MainLayout from "../layouts/MainLayout";

function MyApp({ Component, pageProps }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  useEffect(() => {
    if (!loading && !user && !isLoginPage) {
      router.push("/login");
    }
  }, [user, loading, isLoginPage]);

  // Login sayfasında MainLayout'u gösterme
  if (loading || isLoginPage) {
    return (
      <>
        <CustomCursor />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <MainLayout>
      <CustomCursor />
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
