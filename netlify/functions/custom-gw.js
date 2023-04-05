exports.handler = async (event, context) => {
    var currenTime = new Date().toISOString;
    console.log("### CUSTOM GS ### "+currenTime+" ###")
    console.log(JSON.stringify(event.body))
    console.log("##################################################")
    return {
        statusCode: 200,
        body: JSON.stringify({
          isodate: currenTime,
          message: JSON.stringify(event.body)
        })
    };
};