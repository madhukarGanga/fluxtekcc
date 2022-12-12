import { Routes, Route } from 'react-router-dom';
import { users } from './userData';
import { NavLink } from 'react-router-dom';
import UserPref from './UserPref';
import { useTheme } from 'common/util/themeService';

function UsersPage() {
  const { theme } = useTheme();
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
      <div className="flex-1 px-10 py-4" style={{ backgroundColor: theme.userBackground }}>
        <Routes>
          <Route
            path=""
            element={<h1 className="text-2xl font-light">Please Select a user from left.</h1>}
          />
          <Route path=":id" element={<UserPref />} />
        </Routes>
      </div>
    </div>
  );
}

export default UsersPage;
