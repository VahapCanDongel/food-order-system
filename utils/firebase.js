import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

/*
  Rough databse structure as json
  
    user1:{
        name: someName,
        id: someId
        photo: somePhoto,
        categories:{
          c1:{
            name:'kebabs'
            foods:[
              f1:{
                name: 'lamb doner',
                price: 12.99,
                extras:[
                  salad,
                  ketchup,
                  mayo,
                ]
              },
              f2:{
                name: 'chicken doner',
                price: 12.99,
                extras:[
                  salad,
                  ketchup,
                  mayo,
                ]
              }
            ]
          },

            c2:{
            name:'burgers'
            foods:[
              f1:{
                name: 'chick burger',
                price: 12.99,
                extras:[
                  salad,
                  ketchup,
                  mayo,
                ]
              },
              f2:{
                name: 'ham burger',
                price: 12.99,
                extras:[
                  salad,
                  ketchup,
                  mayo,
                ]
              }
            ]
          }
        }
  }





*/
