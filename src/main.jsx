import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";

// const LoadingIndicator = () => {
//   return (
//     <div className="flex items-center justify-center h-screen w-full">
//       <h1 className="text-3xl font-bold text-[#632EE3]">Loading...</h1>
//     </div>
//   );
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <RouterProvider router={router} />
    
  </StrictMode>
);
