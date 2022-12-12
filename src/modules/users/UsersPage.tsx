import { Routes, Route, Navigate } from 'react-router-dom';
import { users } from './userData';
import { NavLink } from 'react-router-dom';
import UserPref from './UserPref';

function UsersPage() {
  return (
    <div className="flex">
      <div className="w-56 border-r">
        {users.map((user) => (
          <div
            key={user.id}
            className="border-b border-solid border-gray-200 cursor-pointer hover:bg-teal-100"
          >
            <NavLink className="navLink block p-4" to={`/users/${user.id}`}>
              {user.fullName}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex-1 px-10 py-4">
        <Routes>
          <Route path=":id" element={<UserPref />} />
        </Routes>
      </div>
    </div>
  );
}

export default UsersPage;
