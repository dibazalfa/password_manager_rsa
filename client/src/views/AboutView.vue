<template>
  <div>
    <div v-for="acc in App.manage" :key="acc.id">
      <div>{{ acc.account }}</div>
      <div>{{ acc.username }}</div>
      <div>{{ acc.password }}</div>

      <button v-if="acc.edit == false" @click="acc.edit = true">Edit</button>
      <div v-if="acc.edit">
        <input v-model="acc.account">
        <input v-model="acc.username">
        <input v-model="acc.password">
        <input type="password" placeholder="masukkan masterkey" v-model="App.input.acc.key">
        <button @click="App.editAccount(acc), acc.edit = false">Save</button>
      </div>
      <div>
        <button @click.prevent="App.deleteAccount(acc.id)">Delete</button>
      </div>
      <div>
        <!-- {{ App.manage }}  -->
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
