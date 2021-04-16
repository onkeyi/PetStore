module.exports = function superdebug(output) {
    return function (request) {
        request
            .on("request", (request) => {
                output("REQUES >>>", `${request.method} : ${request.url}`);
            })
            .on("response", (response) => {
                output("RESPONSE <<<", response.body);
            })
            .on("error", (error) => {
                output("ERROR :::", error);
            });
    };
};
