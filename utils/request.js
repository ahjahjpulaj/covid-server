const https = require("https");

const options = {
  hostname: "whatever.com",
  port: 443,
  path: "/todos",
  method: "GET"
};

module.exports = url => {
  return new Promise((resolve, reject) => {
    https
      .get(url, response => {
        let body = "";
        response.on("data", chunk => (body += chunk));
        response.on("end", () => {
          try {
            // let res = { list: body };
            let json = JSON.parse(body);
            resolve(json);
          } catch (error) {
            console.error(error.message);
          }
        });
      })
      .on("error", reject);
  });
};
