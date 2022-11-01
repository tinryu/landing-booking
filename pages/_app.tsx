import { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

// config fontawesome
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
