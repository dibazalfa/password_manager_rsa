import { defineStore } from "pinia";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  QuerySnapshot,
  deleteDoc
} from "firebase/firestore";
import Swal from 'sweetalert2';

// isikan firebaseConfig disini
const firebaseConfig = {
    apiKey: "AIzaSyCbRTM0eSuKFfoN1wyscgJqUW9Kpku3trM",
    authDomain: "rsa-password.firebaseapp.com",
    projectId: "rsa-password",
    storageBucket: "rsa-password.appspot.com",
    messagingSenderId: "334746649365",
    appId: "1:334746649365:web:2f65cf88596e43e4fbdf1c"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const useApp = defineStore({
    id: "App",
    state: () => ({
        users: [],
        manage: [],
        input: {
            user: {
                account: "",
                username: "",
                password: "",
                key: "",
                edit: false,
            },
        }
    }),
    actions: {
        async addAccount(user) {
            console.log(`account: ${user.account}`);
            console.log(`username: ${user.username}`);
            console.log(`password: ${user.password}`);
            console.log(`key: ${user.key}`);
            await axios.post("http://localhost:3000/create", {
                account: user.account,
                username: user.username,
                password: user.password,
                key: user.key,
                edit: user.edit
            })
            .then((response) => {
                if(response.status) {
                    console.log(response)
                }
            })
            this.input.user.account = "";
            this.input.user.username = "";
            this.input.user.password = "";
            this.input.user.key = "";
        },
        async getAccount() {
            let that = this
            axios.get("http://localhost:3000/get")
            .then(res => {
                that.manage = res.data.data
                that.manage.forEach(user=>{
                    user.edit = false
                })
            })
        },
        async editAccount(user) {
            let key = this.input.user.key;
            console.log(user)
            await axios.put(`http://localhost:3000/update/${user.id}`, {
                account: user.account,
                username: user.username,
                password: user.password,
                key
            })
            .then((response) => {
                if(response.status) {
                    console.log(response)
                    key = '';
                }
            })
        },
        async deleteAccount(user_id) {
            await axios.delete("http://localhost:3000/delete/" + user_id)
            .then((response) => {
                if(response.status) {
                    console.log(response)
                }
                this.getAccount()
                this.manage = []
            })
        }
    }
})