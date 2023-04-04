import express from "express";

const { PORT = 3333 } = process.env;

const app = express();

app.use(express.static("public"));

app.get('/syllabus-download', (req, res) => {
  res.download('./assets/fe-syllabus.pdf', 'syllabus.pdf', (err) => {
    if(err) {
      console.log(err)
    return res.status(500).send(err);
    }
    console.log('file sent');
  })
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
