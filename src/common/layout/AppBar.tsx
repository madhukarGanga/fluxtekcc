import TopNavigation from "./TopNavigation";

function AppBar() {
  return (
    <div className="py-1 shadow flex items-center h-appHeader px-14">
      <h1 className="text-xl font-semibold text-teal-600">Fluxtekcc</h1>
      <TopNavigation />
    </div>
  );
}
export default AppBar;
