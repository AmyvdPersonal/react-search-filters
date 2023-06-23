import express from "express";
const app = express();
import { Books } from "./Books.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["title_book", "writer_book", "genre"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(Books).slice(0, 20)) : res.json(Books.slice(0, 20));
});

app.listen(5000, () => console.log("API is working!"));
