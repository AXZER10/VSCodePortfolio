import Explorer from "./Explorer";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Pages from "./Pages";
import SideBar from "./SideBar";
import { useTheme } from "../context/ThemeContext";

function Main() {
  const { theme } = useTheme();
  return (
    <div className={`theme-${theme} h-screen flex flex-col`}>
      <NavBar />
      <main className="flex flex-1 overflow-hidden">
        <div className="flex flex-shrink-0">
          <SideBar />
          <Explorer />
        </div>
        <div className="flex-1 overflow-y-auto h-full bg-mainBg">
          <Pages />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
