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

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Carweb GO</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="manifest" href="/manifest.webmanifest" />
        <Meta
          name="description"
          content="A PWA for Carweb using Solid and Vite"
        />
        <Link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
        <Link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="192x192"
        />
        <Meta name="theme-color" content="#1b1c1d" />
      </Head>
      <Body class="fixed top-0 bottom-0 left-0 right-0">
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
