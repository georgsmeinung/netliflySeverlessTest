exports.handler = async (event, context) => {
    console.log("### CUSTOM GS ### "+(new Date()).toISOString)
    console.log("### EVENT ###")
    console.log(JSON.stringify(event))
    console.log("### CONTEXT ###")
    console.log(JSON.stringify(context))
    return {
        statusCode: 200,
        body: JSON.stringify({
          event: event,
          context: context
        })
    };
};