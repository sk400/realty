export const fetchPropertyDetails = async (id) => {
  const url = `https://realty-in-us.p.rapidapi.com/properties/v3/detail?property_id=${id}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      },
      next: { revalidate: 86400 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch properties data");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
