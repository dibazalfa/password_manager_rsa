<template>
  <div>
    <div v-for="user in App.manage" :key="user.id">
      <div>{{ user.account }}</div>
      <div>{{ user.username }}</div>
      <div>{{ user.password }}</div>

      <button v-if="user.edit == false" @click="user.edit = true">Edit</button>
      <div v-if="user.edit">
        <input v-model="user.account">
        <input v-model="user.username">
        <input v-model="user.password">
        <input type="password" placeholder="masukkan masterkey" v-model="App.input.user.key">
        <button @click="App.editAccount(user), user.edit = false">Save</button>
      </div>
      <div>
        <button @click.prevent="App.deleteAccount(user.id)">Delete</button>
      </div>
    </div>

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
  mounted() {
    this.App.getAccount();
  }
}
</script>
