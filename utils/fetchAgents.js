export const fetchAgents = async (limit) => {
  const url = `https://realty-in-us.p.rapidapi.com/agents/list?postal_code=11234&offset=0&limit=${limit}&sort=recent_activity_high&types=agent`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
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
