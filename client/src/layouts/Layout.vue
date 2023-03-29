<template>
    <div class="min-h-screen w-full !m-0 !p-0">
      <Header />
  
      <div class="min-h-screen bg-gray-100 relative flex items-start">
        <div
          class="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg"
        >
          <div class="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <ul class="mt-6 space-y-2 tracking-wide">
                <!--nambah-->
                <li class="min-w-max">
                  <as
                    @click="() => setPage('create')"
                    aria-label="dashboard"
                    class="cursor-pointer relative text-blue-900 flex items-center space-x-4 hover:bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
  
                    <span class="-mr-1 hover:font-medium">Dashboard</span>
                  </as>
                </li>
                <li class="min-w-max">
                  <a
                    @click="setPage('list')"
                    class="cursor-pointer relative text-blue-900 flex items-center space-x-4 hover:bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      />
                    </svg>
  
                    <span class="hover:font-medium">My Keys</span>
                  </a>
                </li>
                <li class="min-w-max">
                  <a
                    @click="App.Logout()"
                    class="cursor-pointer relative text-blue-900 flex items-center space-x-4 hover:bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
  
                    <span class="hover:font-medium">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="p-10">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from "./Header.vue";
  import Footer from "./Footer.vue";
  import {useApp} from '../stores/index';
  
  export default {
    setup() {
      const App = useApp();
      return {
        App,
      }
    },
    name: "Layout",
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        //   currentPage: "/",
      };
    },
    methods: {
      setPage(page) {
        if (page === "logout") {
          alert("Anda keluar");
        }
        this.$router.push(`/${page}`);
      },
    },
  };
  </script>

  
  