const UserList = ({ userList, deleteUser, selectUser }) => {
  return (
    <div className="user-list">
      <ul>
        {userList?.map(user => (
          <li
            className="user-card"
            key={user.id}>
            <h2 className="user-card--name">{user.first_name} {user.last_name}</h2>
            <p className="user-card--title">Email:</p>
            <p className="user-card--email">{user.email}</p>
            <p className="user-card--title">Birthday:</p>
            <p className="user-card--birthday">
            <box-icon name='cake' type='solid' class='cake'/> {user.birthday}</p>
            <button
            className="trash"
            onClick={() => deleteUser(user.id)}>
            <box-icon name='trash' color='#fffefe' type='solid'/>
            </button>
            <button
            className="edit"
            onClick={() => selectUser(user.id)}>
            <box-icon name='edit' className='edit'/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
