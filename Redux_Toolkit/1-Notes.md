1. install all the dependencies using npm 
2. make a folder store inside it create another sub folder called slices
3. create userSlice.jsx inside slices folder


import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});

export default userSlice.reducer;


4. create a index.js for store inside store folder

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;

// Inside Index.js
<Provider store = {store}>
  <App/>
</Provider>

5. connect store using provider and pass store as props to provider

addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload)
    },


export const { addUser, removeUser, clearAllUsers } = userSlice.actions;



import {useDispatch} from "react-redux";
import {addUser} from "../store/slices/UserSlice.jsx";

const dispatch = useDispatch()
  const addNewUser = (name ) => {
    dispatch(addUser(name))
  }


6. now we can access users state using useSelcter

import {useDispatch, useSelector} from "react-redux";
const data = useSelector((state) => {
    return state.users;
  })

7. delete user


 const deleteUser= (id) => {
    dispatch(removeUser(id))
  }



8. Thunks

export function checkauth() {
    return async function checkAuthThunk(dispatch,getState) {

        try{
                const response = await axios.get('https://seminar.rohankm.online/api/details', {
                    withCredentials: true
                    });
                if(response.data.status === 'Authenticated'){
                    dispatch(addStatus(response.data.details.type));
                }
                else{
                    dispatch(removeStatus());
                }      
        }
        catch(err){
            console.log(err);
        }
    }
}