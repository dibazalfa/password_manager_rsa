import express from "express";
import { db } from "./config.js";
import bodyparser from "body-parser";
import {
  onSnapshot,
  collection,
  query,
  getDocs,
  where,
  updateDoc
} from "firebase/firestore";
import cors from "cors";
import { rsa } from "./rsa.js";
import { middleware } from "./middleware.js";

const app = express();
app.use(bodyparser.json());
app.use(cors());
const port = 3000;

const privateKey = { d: 317, n: 469 };
const publicKey = { e: 5, n: 469 };

// CREATE
app.post('/create', middleware.checkMasterKey, async (req, res) => {
  try {
    let account = req.body.account;
    let username = req.body.username;
    let password = req.body.password;

    const querySnapshot = await db.collection('manage').get();
    querySnapshot.forEach(async (doc) => {
      await db.collection('manage').add({
        account: rsa.encryptRSA(account, publicKey),
        username: rsa.encryptRSA(username, publicKey),
        password: rsa.encryptRSA(password, publicKey),
      });
    });
    return res.status(200).send({
      code: 200,
      message: 'Data inserted successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      code: 500,
      message: 'Internal Server Error',
      error
    })
  }
});

// GET
app.get('/get', async (req, res) => {
  try {
    const querySnapshot = await db.collection('manage').get();
    const data = [];
    querySnapshot.forEach((doc) => {
      const account = rsa.decryptRSA(doc.data().account, privateKey);
      const username = rsa.decryptRSA(doc.data().username, privateKey);
      const password = rsa.decryptRSA(doc.data().password, privateKey);
      data.push({ id: doc.id, account, username, password });
    });
    return res.status(200).send({
      code: 200,
      message: 'Success get data from Firestore',
      data: data,
    });
  } catch (err) {
    return res.status(500).send({
      code: 500,
      message: 'Internal Server Error',
      error: err
    });
  }
});

// UPDATE
app.put('/update/:id', middleware.checkMasterKey, async (req, res) => {
  try {
    const docId = req.params.id;
    const account = req.body.account;
    const username = req.body.username;
    const password = req.body.password;
    await db.collection('manage').doc(docId).update({
      account: rsa.encryptRSA(account, publicKey),
      username: rsa.encryptRSA(username, publicKey),
      password: rsa.encryptRSA(password, publicKey)
    });
    return res.status(200).send({
      code: 200,
      message: `Success updating data in Firestore with id ${docId}`,
    });
  } catch (err) {
    return res.status(500).send({
      code: 500,
      message: 'Internal Server Error',
      error: err
    });
  }
});

// DELETE
app.delete('/delete/:id', async (req, res) => {
  try {
    const docId = req.params.id;
    await db.collection('manage').doc(docId).delete();
    return res.status(200).send({
      code: 200,
      message: 'Success deleting data from Firestore',
    });
  } catch (err) {
    return res.status(500).send({
      code: 500,
      message: 'Internal Server Error',
      error: err
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});