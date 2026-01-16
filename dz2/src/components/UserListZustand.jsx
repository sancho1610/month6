import { useEffect } from 'react';
import { useUserStore } from '../zustand/store';
import './UserList.css';

function UserListZustand() {
  const { items: users, loading, error, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="user-container">
      <h1>User List (Zustand)</h1>

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

export default UserListZustand;
