import TopNavigation from './TopNavigation';
import { themeService } from 'common/util/themeService';
import { Routes, Route } from 'react-router-dom';

const UserPrefTheme = () => {
  const onChangeUserTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    themeService.updateTheme({ userBackground: event?.currentTarget.value });
  };
  return (
    <>
      <h1 className="mr-2">User Pref Background</h1>
      <select name="interests" className="w-32" onChange={onChangeUserTheme}>
        <option value="#FFFFFF">White</option>
        <option value="#fef3c7">Amber-100</option>
        <option value="#bef264">Lime-300</option>
        <option value="#2dd4bf">Teal-400</option>
        <option value="#bfdbfe">Blue-200</option>
        <option value="#fae8ff">Fuchsia-100</option>
        <option value="#fecdd3">Rose-200</option>
      </select>
    </>
  );
};

function AppBar() {
  return (
    <div className="py-1 shadow flex items-center h-appHeader px-14">
      <h1 className="text-xl font-semibold text-teal-600 w-30 pr-8">Fluxtekcc</h1>
      <TopNavigation />
      <div className="flex-1" />
      <Routes>
        <Route path="/users/:id" element={<UserPrefTheme />} />
      </Routes>
    </div>
  );
}
export default AppBar;
