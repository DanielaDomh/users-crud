import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactModal from 'react-modal';
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";



function App() {
  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const closeModal = () => {
    setShowForm(false);
  };
  return (
    <div className="users-container">
      <div className="header">
      <h1>Users</h1>
      <button 
      className="sign-up-button"
      onClick={setShowForm}>Sign Up</button>
      </div>
      <ReactModal
      isOpen={showForm}
      contentLabel="Sign Up"       
      >
      <UsersForm
      addUser={addUser}
      userSelected={userSelected}
      editUser={editUser}
      closeModal={closeModal}
      />
      <button 
      className="close-button"
      onClick={closeModal} ><box-icon name='x' rotate='180' color='#000000' ></box-icon></button>
      </ReactModal>
      
      <UsersList
        userList={userList}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </div>
  );
}

export default App;
