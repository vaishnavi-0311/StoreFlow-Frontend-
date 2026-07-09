// import { redirect } from "next/navigation";


// export default function RootPage() {
//   redirect("/Home");
// }

// src/app/page.jsx

import HomePage from "@/components/Home/HomePage";

export default function RootPage() {
  return <HomePage />;
}