<template>
    <nav
      id="header"
      class="w-full z-30 py-1 bg-white shadow-lg border-b border-blue-400"
    >
      <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
        <div>
          <router-link to="/">
            <div class="text-blue-500 font-bold text-xl font-sans cursor-pointer">
              Password Manager
            </div>
          </router-link>
        </div>
  
        <div>
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer"
            src="../assets/alien.png"
            alt="logo"
          />
        </div>
        <!-- </div> -->
      </div>
      <!-- </div> -->
    </nav>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  