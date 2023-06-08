// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Carweb GO</Title>
        <Meta charset="utf-8" />
        <Meta
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,viewport-fit=cover,user-scalable=no"
          name="viewport"
        />
        <Meta
          name="description"
          content="A PWA for Carweb using Solid and Vite"
        />
        <Meta name="theme-color" content="#1b1c1d" />

        <Link rel="manifest" href="/manifest.webmanifest" />
        <Link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
        <Link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="192x192"
        />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
