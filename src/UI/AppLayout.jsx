import React from "react";
import "../index.css";
import Header from "./Header";
import CartOverview from "../Cart Feature/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto] bg-slate-200">
      {isLoading && <LoadingIndicator />}
      <Header />

      <div className="overflow-scroll">
        <main className=" max-w-4xl  mx-auto ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
