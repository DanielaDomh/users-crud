import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import Esxample from './components/Esxample'

function App() {
  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  const addUser = (user) => {
    axios
      .post("https://users-crud.academlo.tech/users/", user)
      .then(() => getData())
      .catch((resp) => console.log(error));
  };

  const getData = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setUserList(resp.data))
      .catch((resp) => console.log(error));
  };
  
  const deleteUser = (userId) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${userId}/`)
      .then(() => getData())
      .catch((resp) => console.log(error));
  };

  const selectUser = (userId) => {
    axios
      .get(`https://users-crud.academlo.tech/users/${userId}/`)
      .then((resp) => setUserSelected(resp.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const editUser = async (user) => {
    try {
      const respond = await axios
      .put(`https://users-crud.academlo.tech/users/${user.id}/`, user);
      getData()
      setUserSelected(null)
    } catch {
      (error) => console.error(error);
    }
  };

  return (
    <div className="users-container">
      
      <Esxample/>
      <UsersForm
      addUser={addUser}
      userSelected={userSelected}
      editUser={editUser}
      />
      <UsersList
        userList={userList}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </div>
  );
}

export default App;
