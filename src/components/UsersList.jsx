
const UserList = ({ userList, deleteUser, selectUser }) => {
  return (
    <div className="user-list">
      <h1>Usuarios</h1>
      <ul>
        {userList?.map(user => (
          <li 
            className="user-card"
            key={user.id}>
            <p>Nombre: <br /> {user.first_name} {user.last_name}</p>
            <p>Fecha de Nacimiento: {user.birthday}</p>
            <p>email: <br /> {user.email}</p>
            <button onClick={() => deleteUser(user.id)}>Eliminar</button>
            <button onClick={() => selectUser(user.id)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
