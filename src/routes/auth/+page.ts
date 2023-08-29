import { user } from "$lib/services/pocketbase.ts";
import { goto } from '$app/navigation';

export async function load() {
  user.subscribe((_user) => {
    if (_user != null) {
      goto("/app");
    }
  });
}

export const ssr = false;

