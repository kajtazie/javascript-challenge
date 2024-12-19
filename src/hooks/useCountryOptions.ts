import { useEffect, useState } from "react";
import CountryList from "country-list";

type CountryOption = {
  label: string;
  value: string;
};

const useCountryOptions = () => {
  const [countryOptions, setCountryOptions] = useState<CountryOption[]>([]);

  useEffect(() => {
    const countryListData = CountryList.getData();
    const options = countryListData.map((country) => ({
      label: country.name,
      value: country.code,
    }));
    setCountryOptions(options);
  }, []);

  return countryOptions;
};

export default useCountryOptions;
