<template>
  <div class="h-screen">
    <section class=" ">
		<!-- Stat Card -->
		<InvestoreStatCard />
		<div class=" mx-16">
      
			<div class="basis-1/2 pl-20 pt-24 relative">
				<!-- Random circle -->
				<div
					class="absolute right-[10%] top-1/2 rounded-full w-5 h-5 bg-green-900"
				></div>
				<!-- Random circle -->
				<div
					class="absolute left-[40%] bottom-7 rounded-full w-5 h-5 bg-yellow-500"
				></div>
				<h1
					class="font-bold text-6xl leading-[1.15] relative z-40 animate-slideDown"
				>
					<div
						class="absolute right-[20%] top-0 rounded-full w-20 h-20 bg-green-400/50 z-30"
					></div>
					Hello <br />
					This is <br />
					Password Manager 
				</h1>
				<p class="mt-5 text-gray-600 font-medium text-xl">
					Secure your digital life with ease using our password manager app.
				</p>
				<p class="mt-3 text-gray-600 font-medium text-xl">
					Stay protected and organized with just a few clicks.
				</p>
				<div class="mt-16">
					<router-link
						class="py-5 px-10 rounded-full font-medium bg-black text-white transition-all border border-transparent hover:bg-white/0 hover:border-black hover:text-black"
						to="./login"
						>Get Started</router-link
					>
				</div>
			</div>
			<div class="basis-1/2 overflow-hidden relative hidden lg:block">
				<!-- Chat link -->
				<Chat />
				<!-- Customer like -->
				<CustomerLike />
				</div>
		</div>
	</section>
  </div>
</template>

<script>
import { useApp } from "../stores/index";
export default {
  setup() {
    const App = useApp();
    return {
      App,
    };
  },
};
</script>

<style>
html {
  background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
