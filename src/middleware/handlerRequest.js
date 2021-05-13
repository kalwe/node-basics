const handlerRequest = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(req.headers.host);

  if (url === "/" && method === "GET") {
    res.write("welcome");
    res.end();
    return;
  } else if (url === "/about" && method === "GET") {
    res.write("about");
    res.end();
    return;
  }

  res.statusCode = 404;
  res.write("404 not found");
  res.end();
};

module.exports = handlerRequest;
