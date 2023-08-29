import { goto } from '$app/navigation';
import { user } from "$lib/services/pocketbase.ts";

export async function load() {
  user.subscribe((_user) => {
    if (_user == null) {
      goto("/auth");
    }
  });
}

export const ssr = false;

