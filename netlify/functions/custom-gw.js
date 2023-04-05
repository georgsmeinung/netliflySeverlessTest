exports.handler = async (event, context) => {
    var timestamp = new Date().toISOString;
    console.log("### CUSTOM GS ### "+timestamp+" ###")
    console.log(JSON.stringify(event.body))
    console.log("##################################################")
    return {
        statusCode: 200,
        body: JSON.stringify({
          currentDateTime: timestamp.toString(),
          message: JSON.stringify(event.body)
        })
    };
};