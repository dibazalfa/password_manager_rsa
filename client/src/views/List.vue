<template>
  <Layout>
  <div>
     <!-- membuat tabel -->
     <div class="w-full max-w-3xl max-h-full mx-auto">
       <div class="flex justify-center items-center">
         <div
           class="py-2 align-middle my-auto inline-block min-w-full sm:px-6 lg:px-8"
         >
           <div
             class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-4"
           >
             <table class="mx-auto min-w-full divide-y divide-gray-200">
               <thead class="bg-gray-50">
                 <tr>
                   <th
                     scope="col"
                     class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   >
                     Account
                   </th>
                   <th
                     scope="col"
                     class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   >
                     Username
                   </th>
                   <th
                     scope="col"
                     class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                   >
                     Password
                   </th>
                   <th scope="col" class="relative px-6 py-3">
                     <span class="sr-only">Edit/Delete</span>
                   </th>
                 </tr>
               </thead>
               <tbody class="bg-white divide-y divide-gray-200">
                 <tr v-for="acc in App.manage" :key="acc.id">
                   <td class="px-6 py-4 whitespace-nowrap">
                     <div class="text-sm font-medium text-gray-900">
                       {{ acc.account }}
                     </div>
                   </td>
                   <td class="px-6 py-4 whitespace-nowrap">
                     <div class="text-sm text-gray-900">{{ acc.username }}</div>
                   </td>
                   <td class="px-6 py-4 whitespace-nowrap">
                     <div class="text-sm text-gray-900">{{ acc.password }}</div>
                   </td>
                   <td
                     class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                   >
                     <button
                     v-if="acc.edit == false" @click="acc.edit = true"
                       class="text-indigo-600 hover:text-indigo-900 mr-4"
                       
                     >
                       Edit
                     </button>
                     <div v-if="acc.edit" class="mt-4">
         <div class="flex flex-col md:flex-row ">
           <div class="font-bold mr-2">Account:</div>
           <input v-model="acc.account" class="form-input flex-1 border border-blue-400 rounded-md text-center mx-3 ">
         </div>
         <div class="flex flex-col md:flex-row">
           <div class="font-bold mr-2">Username:</div>
           <input v-model="acc.username" class="form-input flex-1 border border-blue-400 rounded-md text-center ">
         </div>
         <div class="flex flex-col md:flex-row">
           <div class="font-bold mr-2">Password:</div>
           <input v-model="acc.password" class="form-input flex-1 border border-blue-400 rounded-md text-center mx-1">
         </div>
         <div class="flex flex-col md:flex-row">
           <div class="font-bold mr-2">Masterkey:</div>
           <input type="password" v-model="App.input.acc.key" class="form-input flex-1 border border-blue-400 rounded-md text-center -mx-1">
         </div>
         <button @click="App.editAccount(acc), acc.edit = false" class="text-green-600 hover:text-indigo-900 mr-4 py-2 mt-4 md:mt-0 md:ml-4">Save</button>
       </div>
                     <button
                     @click.prevent="App.deleteAccount(acc.id)"
                       class="text-red-600 hover:text-indigo-900 mr-4"
                     >
                       Delete
                     </button>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
 
    
           
   </div>
   </Layout>
 </template>

<script>
import {useApp} from '../stores/index';
import Layout from "../layouts/Layout.vue";

export default {
  setup() {
    const App = useApp();
    return {
      App,
    }
  },
  components: {
    Layout,
  },
  mounted() {
    this.App.getAccount();
  }
}
</script>
