import PocketBase from 'pocketbase';
import { settings } from "$lib/config/enviroment.ts";
import { writable } from "svelte/store";

export const pb = new PocketBase(settings.apiUrl);

export const user = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
  console.log('authStore changed', auth);
  user.set(pb.authStore.model);
});



