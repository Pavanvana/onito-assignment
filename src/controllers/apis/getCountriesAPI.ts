const getCountriesList = async (): Promise<string[]> => {
  const URL = "https://restcountries.com/v3.1/all";
  const options = {
    method: "GET",
  };
  const response = await fetch(URL, options);
  if (response.ok) {
    const data = await response.json();
    const countryNames = data.map((item: any) => item.name.common);
    return countryNames;
  }
  return [];
};

export default getCountriesList;
