import express from "express";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = 5000;

// Define rate limiting middleware
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: "<h1>Too many requests from this IP, please try again later.</h1>",
});

app.get("/", (req, res) => {
  try {
    res
      .status(200)
      .send(
        "<h4>Please Visit <a href='http://localhost:5000/rate'> Rate Limit </a> </h4>"
      );
  } catch (error) {
    res.status(500).json({ msg: "Erro" });
  }
});

// Shutdown App Route

app.get("/shutdown", (req, res) => {
  try {
    res.status(200).send("Mubarak Band Kardiye App Server 📉");
    process.exit(0);
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
});


app.use(limiter);

app.get("/rate", (req, res) => {
  try {
    res.status(200).send("<h4>Click Me 5 Times in a Duration of 1 min </h4>");
  } catch (error) {
    res.status(500).json({ msg: "Erro" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
