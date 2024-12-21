import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./applayout";
import Repositories from "./components/repositories";
import { useState } from "react";
import { menuContext } from "./contexts/menu";
import { Auth, SAAS, Self } from "./components/auth";
import Sidebar from "./components/sidebar";
import UnderDevelopment from "./components/under";

function App() {
  const [state, set] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "saas",
          element: <SAAS />,
        },
        {
          path: "self-hosted",
          element: <Self />,
        },
      ],
    },
    {
      path: "/app",
      element: <AppLayout />,
      children: [
        {
          path: "repositories",
          element: <Repositories />,
        },
        {
          path: "code-review",
          element: <UnderDevelopment />,
        },
        {
          path: "cloud-security",
          element: <UnderDevelopment />,
        },
        {
          path: "how-to-use",
          element: <UnderDevelopment />,
        },
        {
          path: "settings",
          element: <UnderDevelopment />,
        },
        {
          path: "report",
          element: <UnderDevelopment />,
        },
      ],
    },
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <SAAS />,
        },
      ],
    },
  ]);

  return (
    <>
      <menuContext.Provider value={{ state, set }}>
        <RouterProvider router={router}></RouterProvider>
      </menuContext.Provider>
    </>
  );
}

export default App;
