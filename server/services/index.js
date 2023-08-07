const axios = require('axios');
const IP_API_URL = "http://ip-api.com/json/";

const ipAddressRequest = async (ipAddress) => {
    let resData = {
        status: "",
        statusText: "",
        data: {}
    };

    try {
        console.log(ipAddress);
        const params = { fields: 'status,city,country' };
        const response = await axios.get(IP_API_URL + ipAddress, {
            params
        }
        );
        console.log(response);

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

            if (resData.data != undefined)
                console.log("asd", resData.data);

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