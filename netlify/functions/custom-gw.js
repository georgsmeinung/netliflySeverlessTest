exports.handler = async (event, context) => {
    console.log("### CUSTOM GS ### "+(new Date()).toISOString+" ###")
    console.log(JSON.stringify(event.body))
    console.log("##################################################")
    return {
        statusCode: 200,
        body: JSON.stringify({
          event: event,
          context: context
        })
    };
};