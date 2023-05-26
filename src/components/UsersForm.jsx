import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UsersForm = ({ addUser, userSelected, editUser }) => {
  const { register, handleSubmit, reset } = useForm();

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
    }};

  return (
    <div >
      <form onSubmit={handleSubmit(submit)}>
        <h1>Crear Usuario</h1>
        <div className="input-wrapper">
          <label htmlFor="first_name">First Name: </label>
          <input type="text" id="first_name" {...register("first_name")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="last_name">Last Name: </label>
          <input type="text" id="last_name" {...register("last_name")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" {...register("email")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="birthday">Birthday: </label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button className="add-user" type="Submit">ADD<box-icon name='check' color='#fffefe' size='sm'/></button>
      </form>
    </div>
  );
};

export default UsersForm;
