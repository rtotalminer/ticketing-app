<script>
  import DashboardIcon from "./icons/DashboardIcon.svelte";
  import KanbanIcon from "./icons/KanbanIcon.svelte"
  import TicketIcon from "./icons/TicketIcon.svelte"
  
  import { pb } from "$lib/services/pocketbase.ts";

  function logout() {
    pb.authStore.clear(); 
  }

</script>


<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="/app" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <DashboardIcon/> 
              <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="/app/tickets" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <TicketIcon/> 
              <span class="flex-1 ml-3 whitespace-nowrap">Tickets</span>
            </a>
         </li>
          <li>
            <a href="#" on:click={logout} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <TicketIcon/> 
              <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

