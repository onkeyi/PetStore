module.exports = function superdebug(output) {
    return function (request) {
        request
            .on("request", (request) => {
                output.debug(
                    "HTTP",
                    "REQUES >>>",
                    `${request.method} : ${request.url}`
                );
            })
            .on("response", (response) => {
                output.debug("HTTP", "RESPONSE <<<", response.body);
            })
            .on("error", (error) => {
                output.error("ERROR :::", error);
            });
    };
};
