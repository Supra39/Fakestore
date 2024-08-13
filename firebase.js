
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
export { db };


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration, this is simmilar in funktion to a DB url, user and password
const firebaseConfig = {
  apiKey: "AIzaSyCMcYIQhvbicpul7MqC4UhdZU4m38J2rCo",
  authDomain: "fakestore-1-52848.firebaseapp.com",
  projectId: "fakestore-1-52848",
  storageBucket: "fakestore-1-52848.appspot.com",
  messagingSenderId: "207724685734",
  appId: "1:207724685734:web:d3fc7367bba34344140767"
};

//initialize firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//"create" or "add"
//to add a new order i will use the addDoc funktion, imported from firestore
// by creating the "orders" here they can be viewed in the firebase console under collection later
const addOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), order);
    console.log('Order added with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding order: ', e);
  }
};

//"read" or "fetch"
// to read the orders i will use the getDocs firestore function
const fetchOrders = async () => {
  const querySnapshot = await getDocs(collection(db, 'orders'));
  const orders = [];
  querySnapshot.forEach((doc) => {
    orders.push({ id: doc.id, ...doc.data() });
  });
  return orders;
};

//"update"
// to update a order i use the updateDoc firestore function
const updateOrder = async (orderId, updatedOrder) => {
  const orderRef = doc(db, 'orders', orderId);
  await updateDoc(orderRef, updatedOrder);
};

        
//"Delete"
//to delete a order i use the deleteDoc funtion from firebase
const deleteOrder = async (orderId) => {
    await deleteDoc(doc(db, 'orders', orderId));
  };


