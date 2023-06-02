import {useSession} from "~/utils";
import "./index.css"

export default function Home() {
  const session = useSession();

  const user = () => session()?.user;

  return (
    <main class="text-center mx-auto text-gray-700 pageGrid h-[100dvh]">
        <div class={"bg-amber-300"}>this is the content</div>
        <div class="flex flex-row justify-around  mt-a bg-amber-800 p-4">
            <p class="w-fit">
                profil
            </p>
            <p class="w-fit">Nokler</p>
        </div>
    </main>
  );
}
