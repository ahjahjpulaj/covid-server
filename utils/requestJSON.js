module.exports = (url, res) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, response => {
        let body = "";
        response.on("data", chunk => (body += chunk));
        response.on("end", () => resolve(body));
      })
      .on("error", reject);
  });
};
