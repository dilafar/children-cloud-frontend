import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export const ChildProfile = () => {
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <Sidebar />
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};