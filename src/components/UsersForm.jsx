import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import ReactModal from "react-modal";

const UsersForm = ({ addUser, userSelected, editUser }) => {
  const { register, handleSubmit, reset, closeModal } = useForm();

  const emptyUser = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""
  }

  useEffect(() => {
    if (userSelected !== null) {
        reset(userSelected)
    } else {
        reset(emptyUser)
    }
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
        editUser(data)
    }else {
        addUser(data)
    }
    
  };

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit(submit)}>
        <h1>Crear Usuario</h1>
        <div className="input-wrapper">
          <label htmlFor="first_name">Nombre: </label>
          <input type="text" id="first_name" {...register("first_name")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="last_name">Apellido: </label>
          <input type="text" id="last_name" {...register("last_name")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">email: </label>
          <input type="text" id="email" {...register("email")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Contraseña: </label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="birthday">Fecha de Nacimiento: </label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button className="add-user" type="Submit" 
        onClick={() => closeModal()}
        >ADD NEW USER <box-icon name='check' ></box-icon></button>
      </form>
    </div>
  );
};

export default UsersForm;
