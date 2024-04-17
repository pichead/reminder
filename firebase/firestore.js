import {
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  where,
} from "@/firebase/init";

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "./init";

// สร้าง (เพิ่ม) ข้อมูล
async function addDocument(data) {
  try {
    const docRef = await addDoc(collection(db, "card"), {
      ...data,
      isActive: true,
    });
    console.log("เพิ่มเอกสารสำเร็จ ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.log("error");
    return null;
  }
}

// อ่านข้อมูล
async function readDocument(docId) {
  try {
    const docSnapshot = await getDoc(doc(db, "card", docId));
    if (docSnapshot.exists()) {
      console.log("ข้อมูลเอกสาร:", docSnapshot.data());
    } else {
      console.log("ไม่มีเอกสารที่ตรงกัน!");
    }
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการอ่านเอกสาร:", error);
  }
}

async function getAllDocuments() {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, "card"),
        where("isActive", "==", true), // เพิ่มเงื่อนไขที่ต้องการ
        orderBy("createDate", "desc"),
        // limit(20)
      )
    );
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการอ่านเอกสาร:", error);
    return null;
  }
}

async function updateRemove(docId) {
  try {
    const docRef = doc(db, "card", docId);
    await updateDoc(docRef, { isActive: false });
    return true;
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการอัปเดตเอกสาร:", error);
    return false;
  }
}

// อัปเดตข้อมูล
async function updateData(docId,data) {
  try {
    const docRef = doc(db, "card", docId);
    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการอัปเดตเอกสาร:", error);
    return false;
  }
}

// ลบข้อมูล
async function deleteDocument(docId) {
  try {
    await deleteDoc(doc(db, "collectionName", docId));
    console.log("ลบเอกสารสำเร็จ!");
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการลบเอกสาร:", error);
  }
}

export {
  addDocument,
  readDocument,
  updateRemove,
  deleteDocument,
  getAllDocuments,
  updateData
};
