import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';
import './UserList.css';

function UserListRedux() {
  const dispatch = useDispatch();
  const { items: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="user-container">
      <h1>User List (Redux Toolkit)</h1>

      {loading && <p className="loading">Загрузка...</p>}
      {error && <p className="error">Ошибка: {error}</p>}

      {!loading && !error && (
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserListRedux;
