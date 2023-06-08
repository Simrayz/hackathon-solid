// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from "solid-start";
import "./root.css";
import { useSession } from "~/utils";
import { signIn } from "@auth/solid-start/client";

export default function Root() {
  const location = useLocation();
  const session = useSession();

  if (!session()?.user) {
    signIn("azure-ad");
  }

  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

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
      <Body>
        <Suspense>
          <ErrorBoundary>
            <nav class="bg-sky-800">
              <ul class="container flex items-center p-3 text-gray-200">
                <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
                  <A href="/">Home</A>
                </li>
                <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
                  <A href="/about">About</A>
                </li>
              </ul>
            </nav>
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
