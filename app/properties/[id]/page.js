import { PropertyDetailsPageComponents } from "@/app/(components)";
import { fetchPropertyDetails } from "@/utils/fetchPropertyDetails";
import React from "react";

const PropertyDetail = async ({ params }) => {
  const data = await fetchPropertyDetails(params?.id);
  const propertyDetails = data?.data?.home;

  return (
    <div>
      <PropertyDetailsPageComponents propertyDetails={propertyDetails} />
    </div>
  );
};

export default PropertyDetail;
