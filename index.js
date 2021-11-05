// need to intialise it
const express = require("express")();
const app = express(express.json());
const PORT = 8080;

// you fire it up on the server is
app.listen(PORT, () => console.log(`its alive on http://localhost:${PORT}`));

// look at your network tab in chrome

// app.get ('/tshirt is the route ), afterwards the req, and res is the handler and you run this function when the route is requested
// this sends back two different objects request incoming and response outgoing
app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "blue",
    size: "large",
  });
});

//:id is the route params capture dynamic values in the URL
// post is new data the user is trying to create
app.post("/tshirt/:id"),
  (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
      res.status(418).send({ message: "we need a logo!" });
    }

    res.send({
      tshirt: `tshirt with your ${logo} and ID of ${id}`,
    });
  };

// video for reference https://www.youtube.com/watch?v=-MTSQjw5DrM
