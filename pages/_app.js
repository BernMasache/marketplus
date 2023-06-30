import MainLayout from "@/components/layout/main.layout";
import { StoreProvider } from "@/services/utils/Store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StoreProvider>
  );
}
