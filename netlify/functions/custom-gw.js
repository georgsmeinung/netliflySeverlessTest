exports.handler = async (event, context) => {
    var opDate = new Date().toISOString;
    console.log("### CUSTOM GS ### "+opDate+" ###")
    console.log(JSON.stringify(event.body))
    console.log("##################################################")
    return {
        statusCode: 200,
        body: JSON.stringify({
          request: JSON.stringify(event.body)
        })
    };
};