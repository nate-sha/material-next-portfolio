//  Roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Global context
import AppProvider from "@/context/AppContext";
import ThemeProvider from "@/components/ThemeProvider";
import HomeLayout from "@/components/HomeLayout";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider>
        <HomeLayout>
          <Component {...pageProps} />
        </HomeLayout>
      </ThemeProvider>
    </AppProvider>
  );
}
