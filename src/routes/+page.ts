import { goto } from "$app/navigation";

export async function load() {
  user.subscribe((_user) => {
    if (_user != null) {
      goto("/app");
    }
    else {
      goto("/auth");
    }
  })
}

export const ssr = false;

