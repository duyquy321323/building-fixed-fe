import { Outlet } from "react-router-dom";
import Header from "../../Header";

function LayoutAdmin() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default LayoutAdmin;
