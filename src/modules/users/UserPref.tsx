import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from './userData';

interface UserPrefProps {
  showInterests?: boolean;
  showSalaryRange?: boolean;
  showAvailability?: boolean;
}

function UserPref(props: UserPrefProps) {
  const { showInterests = true, showSalaryRange = true, showAvailability = true } = props;
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return <h4>Unknow user</h4>;
  }

  return (
    <div>
      <h1 className="text-3xl mb-6">
        User Preference: <span className="text-teal-800">{user.fullName}</span>
      </h1>
    </div>
  );
}

export default UserPref;
