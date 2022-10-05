exports.handler = async (req) => {
  const allowedReferer = "http://localhost:8888/";

  return req.headers.referer === allowedReferer
    ? {
        statusCode: 200,
        body: JSON.stringify({
          message: "Hello World!",
        }),
      }
    : {
        statusCode: 403,
        body: JSON.stringify({
          message: "FORBIDDEN not from allowed source",
        }),
      };
};
