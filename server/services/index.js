const axios = require('axios');
const IP_API_URL = "http://ip-api.com/json/";

// IP address request service
const ipAddressRequest = async (ipAddress) => {
    let resData = {
        status: "",
        statusText: "",
        data: {}
    };

    try {
        // console.log(`ipAddress => ${ipAddress}`);
        const params = { fields: 'status,city,country' };
        const response = await axios.get(IP_API_URL + ipAddress, {
            params
        }
        );
        // console.log(`response => ${response}`);

        if (response.status === 200) {
            if (response?.data == undefined) {
                throw new Error("Request failed");
            }
            let locationData = {
                city: response?.data.city,
                country: response?.data.country
            };

            resData = {
                status: response?.status,
                statusText: response?.statusText,
                data: locationData
            };

            return resData;
        } else {
            throw new Error("Request failed", 500);
        }
    } catch (error) {
        return error;
    }
};

module.exports = {
    ipAddressRequest
};