import { AiFillHome } from "react-icons/ai";
import { MdPerson, MdVilla } from "react-icons/md";

export const SidebarItems = [
  {
    name: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    name: "Properties",
    path: "/properties",
    icon: <MdVilla />,
  },
  {
    name: "Agents",
    path: "/agents",
    icon: <MdPerson />,
  },
];
