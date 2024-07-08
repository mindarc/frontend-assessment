const API_URL =
  "https://raw.githubusercontent.com/mindarc/frontend-assessment/master/data.json";

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
