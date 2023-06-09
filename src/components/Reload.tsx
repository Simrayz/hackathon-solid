import type { Component } from "solid-js";
import { Show } from "solid-js";
import { useRegisterSW } from "virtual:pwa-register/solid";

export const ReloadPrompt: Component = () => {
  const {
    offlineReady: [_offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div class="p-0 m-0 w-0 h-0">
      <Show when={needRefresh()}>
        <div class="fixed right-0 bottom-0 m-4 p-3 border z-10 text-left shadow-sm bg-white">
          <Show when={needRefresh()}>
            <button
              class="border outline-none mr-4 rounded-sm px-1 py-2"
              onClick={() => updateServiceWorker(true)}
            >
              Reload
            </button>
          </Show>
          <button
            class="border outline-none mr-4 rounded-sm px-1 py-2"
            onClick={() => close()}
          >
            Close
          </button>
        </div>
      </Show>
    </div>
  );
};
