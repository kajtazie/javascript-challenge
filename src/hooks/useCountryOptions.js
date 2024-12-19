import { useEffect, useState } from "react";
import CountryList from "country-list";
const useCountryOptions = () => {
    const [countryOptions, setCountryOptions] = useState([]);
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
