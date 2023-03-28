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
    apiKey: "AIzaSyCb1zeNb6DP-Dz-IiC4MB8aImaExLv4pOw",
    authDomain: "passwordmanager-e08e4.firebaseapp.com",
    projectId: "passwordmanager-e08e4",
    storageBucket: "passwordmanager-e08e4.appspot.com",
    messagingSenderId: "256643935779",
    appId: "1:256643935779:web:ec2760adc6e1eba26b8b96"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const useApp = defineStore({
    id: "App",
    state: () => ({
        users: [],
        input: {
            user: {
                account: "",
                password: "",
                key: "",
            },
        }
    }),
    actions: {
        async Create(user) {
            // console.log(`account: ${this.input.user.account}`);
            // console.log(`password: ${this.input.user.password}`);
            // console.log(`key: ${this.input.user.key}`);
            await axios.post('http://localhost:3000/create', {
                account: this.input.user.account,
                password: this.input.user.password,
                key: this.input.user.key
            })
            .then((response) => {
                if (response.status) {
                    console.log(response);
                }
            })
        }
    }
})