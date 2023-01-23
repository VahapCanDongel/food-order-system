import { auth, db } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  arrayRemove,
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
  const [itemID, setItemID] = useState(0);

  const [categoryName, setCategoryName] = useState({ description: "" });

  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  const generalFormSubmit = async (e) => {
    e.preventDefault();
    const documentRef = doc(db, "users", user.uid);

    await setDoc(documentRef, {
      user: user.uid,
      user_name: user.displayName,
      user_email: user.email,
    });
  };

  const updateFoodArray = async (e) => {
    e.preventDefault();

    const docCollection = collection(db, "users");
    const documentRef = doc(db, "users", user.uid, "categories");
    if ((await (await getDocs(docCollection)).empty) == true) {
      submitFoodForm(e);
    } else {
      await setDoc(documentRef, {
        categor: {
          c_id: uuidv4(),
          name: categoryName,
        },
      });
    }
  };

  const updateCategoryArray = async (e) => {
    e.preventDefault();

    const docCollection = collection(db, "users");
    const documentRef = doc(db, "users", user.uid);
    if ((await (await getDocs(docCollection)).empty) == true) {
      generalFormSubmit(e);
    } else {
      await updateDoc(documentRef, {
        category: arrayUnion({
          id: uuidv4(),
          name: categoryName,
          food: [],
        }),
      });
    }
  };
  const checkingItemID = async (itemID) => {
    setItemID(itemID);
    const documentRef = doc(db, "users", user.uid);
    await updateDoc(documentRef, {
      food: arrayRemove(itemID),
    });
    console.log(itemID);
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
      {/* Add Food Form */}
      <div className="flex  gap-5">
        <form className="flex flex-col justify-evenly items-center gap-10 w-[400px] p-4 rounded-md shadow-xl border-[1px] border-teal-400">
          <div className="flex flex-col gap-2 justify-center">
            <label className="text-xl"> Category Name: </label>
            <input
              onChange={(e) => {
                setCategoryName({
                  ...categoryName,
                  description: e.target.value,
                });
              }}
              type="text"
              className="border-[2px] border-teal-400 p-2 w-[240px] rounded-md"
            />
          </div>

          <button
            className="bg-teal-500 text-white p-3 rounded-md"
            onClick={updateCategoryArray}
          >
            Add Category
          </button>
        </form>

        <form className="flex flex-col justify-evenly items-center gap-10 w-[400px] p-4 rounded-md shadow-xl border-[1px] border-teal-400">
          <div className="flex flex-col gap-2 justify-center">
            <label className="text-xl">Food Name: </label>
            <input
              onChange={(e) =>
                setItemName({ ...itemName, description: e.target.value })
              }
              type="text"
              className="border-[2px] border-teal-400 p-2 w-[240px] rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2 justify-center">
            <label className="text-xl">Food Price: </label>
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
            onClick={updateFoodArray}
            className="bg-teal-500 text-white p-3 rounded-md"
          >
            Add Food
          </button>
        </form>

        <form className="flex flex-col justify-evenly items-center gap-10 w-[400px] p-4 rounded-md shadow-xl border-[1px] border-teal-400">
          <div className="flex flex-col gap-2 justify-center">
            <label className="text-xl">Selected Food:</label>

            <select className="border-[2px] border-teal-400 p-2 h-[44px] w-[240px] rounded-md">
              {allFoods.map((item) => {
                item.category.map((food) => {
                  <option>food</option>;
                });
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2 justify-center">
            <label className="text-xl">Extra Item Name: </label>
            <input
              type="text"
              className="border-[2px] border-teal-400 p-2 w-[240px] rounded-md"
            />

            <button className="bg-teal-400 text-white p-3 w-[90px] rounded-md">
              Add
            </button>
          </div>

          <div className="w-[300px] bg-teal-400 min-h-[100px] rounded-md flex justify-center p-1">
            <div className="text-xs bg-white w-[80px] flex justify-center items-center rounded-sm h-[20px]">
              <button>
                <svg
                  width="46"
                  height="46"
                  fill="none"
                  stroke="#d95454"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[15px] text-red-900"
                >
                  <path d="M6.343 17.657 17.657 6.344m-11.314 0 11.314 11.313L6.343 6.344Z"></path>
                </svg>
              </button>
              Tomato
            </div>
          </div>

          <button className="bg-teal-500 text-white p-3 rounded-md">
            Complete
          </button>
        </form>
      </div>

      {/* <table className="border-[1px] border-teal-500 w-[800px] text-center">
        <tr className="border-[2px] border-teal-500">
          <th className="border-[2px] border-b-black border-t-black border-l-black bg-teal-500 text-white">
            Name
          </th>
          <th className="border-[2px] border-b-black border-t-black bg-teal-500 text-white">
            Price
          </th>
          <th className="border-[2px] border-b-black border-t-black bg-teal-500 text-white">
            Parent Category
          </th>
          <th className="border-[2px] border-b-black border-t-black bg-teal-500 text-white">
            Extras
          </th>
          <th className="border-[2px] border-b-black border-t-black border-r-black bg-teal-500 text-white">
            Operations
          </th>
        </tr>

        {allFoods.map((food) =>
          food.food.map((item) => (
            <tr>
              <td className="border-[2px] border-teal-500">
                {item.name.description}
              </td>
              <td className="border-[2px] border-teal-500">
                {item.price.description}
              </td>
              <td className="border-[2px] border-teal-500">
                {item.parent_category.description}
              </td>
              <td className="border-[2px] border-teal-500"></td>
              <td className="border-[2px] border-teal-500">
                <button
                  className="bg-red-300 text-white text-center rounded-md ml-4 h-[25px] w-[80px] hover:bg-red-400"
                  onClick={() => checkingItemID(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </table> */}
    </div>
  );
}
