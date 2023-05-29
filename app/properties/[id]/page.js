import { PropertyDetailsPageComponents } from "@/app/(components)";
import { fetchProperties } from "@/utils/fetchProperties";
import { fetchPropertyDetails } from "@/utils/fetchPropertyDetails";
import React from "react";

export async function generateStaticParams() {
  const data = await fetchProperties(50);

  const properties = data?.data?.home_search?.results;

  return properties.map((property) => ({
    id: property.property_id,
  }));
}

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
