import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

function MainLayout() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
