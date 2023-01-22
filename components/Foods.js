import { auth, db } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where, //We need to use this select only elements from the document that matches the user id
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";

export default function Foods() {
  const [itemName, setItemName] = useState({ description: "" });
  const [itemPrice, setItemPrice] = useState({ description: "" });
  const [parentCategory, setParentCategory] = useState({ description: "" });
  const [allFoods, setAllFoods] = useState([]);

  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  const submitFoodForm = async (e) => {
    e.preventDefault();
    const documentRef = doc(db, "users", user.uid);

    await setDoc(documentRef, {
      user: user.uid,
      user_name: user.displayName,
      user_email: user.email,
      food: [
        {
          id: uuidv4(),
          name: itemName,
          price: itemPrice,
          parent_category: parentCategory,
        },
      ],
    });
  };

  const updateFoodArray = async (e) => {
    e.preventDefault();

    const docCollection = collection(db, "users");
    const documentRef = doc(db, "users", user.uid);
    if ((await (await getDocs(docCollection)).empty) == true) {
      submitFoodForm(e);
    } else {
      await updateDoc(documentRef, {
        food: arrayUnion({
          id: uuidv4(),
          name: itemName,
          price: itemPrice,
          parent_category: parentCategory,
        }),
      });
    }
  };

  const getData = async () => {
    const getDataCollectionRef = collection(db, "users");
    const q = query(getDataCollectionRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllFoods(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-screen flex justify-evenly flex-col items-center">
      <form className="flex justify-evenly items-center gap-10">
        <div className="flex flex-col gap-2 justify-center">
          <label className="text-xl">Name: </label>
          <input
            onChange={(e) =>
              setItemName({ ...itemName, description: e.target.value })
            }
            type="text"
            className="border-[2px] border-teal-400 p-2 w-[240px] rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <label className="text-xl">Price: </label>
          <input
            onChange={(e) =>
              setItemPrice({ ...itemPrice, description: e.target.value })
            }
            type="text"
            className="border-[2px] border-teal-400 p-2 w-[240px] rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <label className="text-xl">Parent Category: </label>

          <select
            onChange={(e) =>
              setParentCategory({
                ...parentCategory,
                description: e.target.value,
              })
            }
            className="border-[2px] border-teal-400 p-2 h-[44px] w-[240px] rounded-md"
          >
            <option>Test</option>
          </select>
        </div>

        <button
          onClick={(submitFoodForm, updateFoodArray)}
          className="bg-teal-700 text-white p-3"
        >
          Add Item
        </button>
      </form>

      <table className="border-[2px] border-black w-[800px] text-center">
        <tr className="border-[2px] border-black">
          <th className="border-[2px] border-black">Name</th>
          <th className="border-[2px] border-black">Price</th>
          <th className="border-[2px] border-black">Parent Category</th>
          <th className="border-[2px] border-black">Extras</th>
        </tr>

        {allFoods.map((food) =>
          food.food.map((item) => (
            <tr>
              <td className="border-[2px] border-black">
                {item.name.description}
                <button className="bg-red-400 text-white text-center rounded-md ml-4 h-[25px] w-[80px]">
                  Delete
                </button>
              </td>
              <td className="border-[2px] border-black">
                {item.price.description}
              </td>
              <td className="border-[2px] border-black">
                {item.parent_category.description}
              </td>
              <td className="border-[2px] border-black"></td>
            </tr>
          ))
        )}
      </table>
    </div>
  );
}
