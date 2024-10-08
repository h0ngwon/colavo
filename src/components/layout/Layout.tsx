import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <header>
      <h1>Header</h1>
      <main>
        <Outlet />
      </main>
    </header>
  );
};

export default Layout;
