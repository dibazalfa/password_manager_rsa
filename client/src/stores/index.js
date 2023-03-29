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
            acc: {
                account: "",
                username: "",
                password: "",
                key: "",
                edit: false,
            },
            user: {
                email: "",
                password: "",
            }
        }
    }),
    actions: {
        async Register(user) {
            await axios.post('http://127.0.0.1:3000/register', {
              // nama: user.name,
              email: user.email,
              password: user.password
            })
              .then((response) => {
                if (response.status) {
                  Swal.fire({
                    icon: 'success',
                    title: 'Register Success',
                    text: `You have register with an email: ${user.email}`,
                    footer: '<a href="login">Continue to Login</a>'
                  })
                }
              }, (error) => {
                Swal.fire({
                  icon: 'error',
                  title: 'There is an Error',
                  text: `You failed to register with this email: ${user.email}`,
                })
              });
            // this.input.user.name = '';
            this.input.user.email = '';
            this.input.user.password = '';
          },
          async Login(user) {
            await axios.post('http://127.0.0.1:3000/login', {
              email: user.email,
              password: user.password
            })
              .then((response) => {
                console.log(response.data.userid)
                  localStorage.setItem("userId", response.data.userid )
                  this.router.push("/create");
              }).catch((err) => {
                (error) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Check Your Email / Password again',
                    text: `You failed to login with this email: ${user.email}`,
                  })
                }
              });
            this.input.user.email = '';
            this.input.user.password = '';
          },
          async Logout() {
            this.user = null;
            this.router.push("/login")
          },
        async addAccount(acc) {
            console.log(`account: ${acc.account}`);
            console.log(`username: ${acc.username}`);
            console.log(`password: ${acc.password}`);
            console.log(`key: ${acc.key}`);
            const uid = localStorage.getItem("userId")
            console.log(uid)
            await axios.post("http://localhost:3000/create", {
                account: acc.account,
                username: acc.username,
                password: acc.password,
                key: acc.key,
                edit: acc.edit,
                userId: uid
            })
            .then((response) => {
                if(response.status) {
                    console.log(response)
                }
            })
            this.input.acc.account = "";
            this.input.acc.username = "";
            this.input.acc.password = "";
            this.input.acc.key = "";
        },
        async getAccount() {
            // let that = this
            console.log(localStorage.getItem("userId"))
            axios.get("http://localhost:3000/get/")            
            .then(res => {
                this.manage = res.data.data
                this.manage.forEach(acc=>{
                  acc.edit = false
                })
                console.log("test")
                console.log(res.data.data)
            })
        },

        // async getAccount(acc) {
        //     console.log(acc)
        //     await axios.get(`http://localhost:3000/get/${acc.id}`)
        //     .then((response) => {
        //         if(response.status) {
        //           this.manage = res.data.data
        //           console.log("test")
        //         }
        //     })
        // },
        async editAccount(acc) {
            let key = this.input.acc.key;
            console.log(acc)
            await axios.put(`http://localhost:3000/update/${acc.id}`, {
                account: acc.account,
                username: acc.username,
                password: acc.password,
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