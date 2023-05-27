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

export const locationDetails = (property) => {
  const location = [
    {
      name: "State",
      data: property?.location?.address?.state,
    },
    {
      name: "City",
      data: property?.location?.address?.city,
    },
    {
      name: "Street ",
      data: property?.location?.address?.street_name,
    },
    {
      name: "Postal ",
      data: property?.location?.address?.postal_code,
    },
    {
      name: "Line",
      data: property?.location?.address?.line,
    },
  ];
  return location;
};

export const addressDetails = (address) => {
  const data = [
    {
      name: "Line",
      data: address?.line,
    },
    {
      name: "City",
      data: address?.city,
    },
    {
      name: "Postal code",
      data: address?.postal_code,
    },
    {
      name: "State code",
      data: address?.state_code,
    },
    {
      name: "State",
      data: address?.state,
    },
    {
      name: "Country",
      data: address?.country,
    },
  ];

  return data;
};
