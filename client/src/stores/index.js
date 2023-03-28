import { defineStore } from "pinia";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
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