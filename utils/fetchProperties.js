export const fetchProperties = async (limit) => {
  const url = "https://realty-in-us.p.rapidapi.com/properties/v3/list";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "49dabdc927msh9723b28c4229520p13ac75jsn25be4fb76640",
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
    body: JSON.stringify({
      limit: limit,
      offset: 0,
      postal_code: "90004",
      status: ["for_sale", "ready_to_build"],
      sort: {
        direction: "desc",
        field: "list_price",
      },
    }),
    next: { revalidate: 86400 },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
