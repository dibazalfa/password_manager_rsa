<template>
    <div>
        <div>
            <label for="">Email</label>
            <input type="text" v-model="App.input.user.email">
        </div>
        <div>
            <label for="">Password</label>
            <input type="text" v-model="App.input.user.password">
        </div>
        <div>
            <button @click="App.Login(App.input.user)">Login</button>
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
  created() {
  }
}
</script>