import express from 'express';
import connectDb from './connectDb.js';
import cors from 'cors';
import urlRoutes from './routes/url.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

connectDb();

app.use("/url", urlRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
