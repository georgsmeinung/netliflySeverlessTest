const fetch = require('node-fetch')

exports.handler = async (event, context) => {
    const COUNTRY = event.queryStringParameters.iso
    const API_URL = 'https://restcountries.com/v3.1/alpha/'+COUNTRY
    
    if (!COUNTRY) {
        return {
        statusCode: 400,
        body: JSON.stringify({
          message: "ERROR: Parameter COUNTRY missing"
        })
    };
    }
    
    const response = await fetch(API_URL)
    const data = await response.json()
    
    return {
        statusCode: 200,
        body: JSON.stringify({
          name: data[0].name.common,
          flag: data[0].flags.png
        })
    };
};