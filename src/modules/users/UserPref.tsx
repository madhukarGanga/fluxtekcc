import { useParams } from 'react-router-dom';
import { users } from './userData';
import DynamicUserPref from './DynamicUserPref';

interface UserPrefProps {
  showInterests?: boolean;
  showExpectedSalary?: boolean;
  showAvailability?: boolean;
}

function UserPref(props: UserPrefProps) {
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return <h4>Unknow user</h4>;
  }

  return <DynamicUserPref {...user} key={user.id} />;
}

export default UserPref;
