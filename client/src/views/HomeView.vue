<template>
  <div>
    <label>Masukkan Account</label>
    <input type="text" v-model="App.input.user.account" >
    <br>
    <label>Masukkan Username</label>
    <input type="text" v-model="App.input.user.username" >
    <br>
    <label>Masukkan Password</label>
    <input type="password" v-model="App.input.user.password">
    <br>
    <label>Masukkan Master Key</label>
    <input type="password" v-model="App.input.user.key">
    <br>
    <button @click="App.addAccount(App.input.user)">Create</button>

    <!-- <div v-for="user in App.users" :key="user.id">
      {{ user.account }}
      {{ user.password }}
    </div> -->
  </div>
</template>

<script>
import {useApp} from '../stores/index';
export default {
  setup() {
    const App = useApp();
    return {
      App,
    }
  },
  created() {
  }
}
</script>
