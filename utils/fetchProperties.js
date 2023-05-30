export const fetchProperties = async (limit) => {
  const url = "https://realty-in-us.p.rapidapi.com/properties/v3/list";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
    body: JSON.stringify({
      limit: limit,
      offset: 0,
      postal_code: "90004",
      status: ["for_sale"],
      sort: {
        direction: "desc",
        field: "list_price",
      },
    }),
    next: { revalidate: 86400 },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to fetch properties data");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
