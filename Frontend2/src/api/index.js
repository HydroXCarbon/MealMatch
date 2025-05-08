import axios from "axios";
// 13.8000091
// 100.3385407
export const getPlacesData = async (type, sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                    //   restaurant_tagcategory_standalone: '10591',
                    //   restaurant_tagcategory: '10591',
                    //   limit: '30',
                    //   currency: 'USD',
                    //   open_now: 'false',
                    //   lunit: 'km',
                    //   lang: 'en_US'
                },
                headers: {
                    "x-rapidapi-key":import.meta.env.VITE_APP_RAPIDAPI_API_KEY,
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                },
            }
        );
        console.log(sw, ne)
        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
};