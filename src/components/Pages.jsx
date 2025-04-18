import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

function Pages() {
  return (
    <div className=" w-full overflow-x-auto bg-mainBg">
      <Tabs />
      <section className="min-h-[85vh] bg-mainBg mr-4 border border-tabBorder">
        <Outlet />
      </section>
    </div>
  );
}

export default Pages;
