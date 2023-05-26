import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import styled from "styled-components";

function App() {
  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

// ADD AND READ
  const addUser = (user) => {
    axios
      .post("https://users-crud.academlo.tech/users/", user)
      .then(() => getData(), closeModal())
      .catch((resp) => console.log(error));
  };

  const getData = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setUserList(resp.data))
      .catch((resp) => console.log(error));
  };
  
  useEffect(() => {
    getData();
  }, []);

// DELETE
  const deleteUser = (userId) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${userId}/`)
      .then(() => getData())
      .catch((resp) => console.log(error));
  };

//UPDATE
  const editUser = async (user) => {
    try {
      const respond = await axios.put(
        `https://users-crud.academlo.tech/users/${user.id}/`,
        user
      );
      getData();
      setUserSelected(null);
    } catch { (error) => console.error(error) }};

  const selectUser = (userId) => {
    axios
      .get(`https://users-crud.academlo.tech/users/${userId}/`)
      .then((resp) => setUserSelected(resp.data), OpenModal())
      .catch((error) => console.error(error));
  };

//Modal logistic
  const OpenModal = () => {
    setShowForm(true);
  };
  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <div className="users-container">
      <div className="header">
        <h1>Users</h1>
        <button className="sign-up-button" onClick={setShowForm}>Sign Up</button>
      </div>
      <ReactModal isOpen={showForm} contentLabel="Sign Up">
        <Overlay>
          <Content>
            <UsersForm
              addUser={addUser}
              userSelected={userSelected}
              editUser={editUser}
            />
            <CloseButton>
              <button className="close-button" onClick={closeModal}>
                <box-icon name="x" rotate="180" color="#FFFFFF"/>
              </button>
            </CloseButton>
          </Content>
        </Overlay>
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

// Modal Styling
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  position: relative;
  padding: 20px;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
`;
