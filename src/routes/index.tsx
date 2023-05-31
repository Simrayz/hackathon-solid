import { A } from "solid-start";

import { signIn, signOut } from "@auth/solid-start/client";
import Counter from "~/components/Counter";
import { useSession } from "~/utils";

export default function Home() {
  const session = useSession();

  const user = () => session()?.user;

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p>
        <button onClick={() => signIn("azure-ad")}>Login with Azure</button>
      </p>
      <p>
        <button onClick={() => signOut()}>Logout</button>
      </p>
      <div>
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
