import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "./init";

const createUser = async (email, password) => {
  try {
    const letCreate = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return letCreate;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

    return null;
  }
};

const signinUser = async (email, password) => {
  try {
    const letSignin = await signInWithEmailAndPassword(auth, email, password);

    return letSignin;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

    return null;
  }
};

const authState = async () => {
  try {
    const user = await new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log("user : ",user)
        unsubscribe();
        resolve(user);
      });
    });
    if (user) {
      const uid = user.uid;
      return uid;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const authSignOut = async () => {
    try {
        await signOut(auth)
        return "sign out";
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { createUser, signinUser, authState,authSignOut };
