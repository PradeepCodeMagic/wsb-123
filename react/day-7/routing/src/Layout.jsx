import { Outlet } from "react-router-dom";
import Header from "./Comman/Header";


export default function Layout() {
  return (
    <>
        <header>
            <Header/>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            <Header/>
        </footer>
    </>
  )
}
