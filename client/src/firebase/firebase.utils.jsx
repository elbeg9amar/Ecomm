import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCe2UCTE9DYpw-5v45qgWwfnMVA0yePdxo",
  authDomain: "ecomm-783a3.firebaseapp.com",
  databaseURL: "https://ecomm-783a3.firebaseio.com",
  projectId: "ecomm-783a3",
  storageBucket: "ecomm-783a3.appspot.com",
  messagingSenderId: "314770671479",
  appId: "1:314770671479:web:d3bd9ad4aaf3f973f68372"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);


  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
    await userRef.set({
      displayName,
      email,
      createAt,
      ...additionalData
    })
    } catch(err) {
      console.log(err)
    }
  }
  
  return userRef
};

export const getUserCartRef = async userId => {
  const cartsRef = firestore.collection('carts').where('userId','==',userId)
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({userId, cartItems: []});
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref
  }
};

export const addCollectionandDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj)
  });

  return await batch.commit()
};


export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data()  
    
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollection.reduce((acc,coll) => {
    acc[coll.title.toLowerCase()] = coll
    return acc;
  },{})
};

export const convertDirectorySnapshotToMap = (directories) => {
  const transformedDirectory = directories.docs.map(doc => {
    const {
      title, imageUrl,id,size,linkUrl
    } = doc.data()

    return {
      title,
      imageUrl,
      id,
      // size,
      linkUrl
    }
  })
  return transformedDirectory
}



firebase.initializeApp(config)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();

