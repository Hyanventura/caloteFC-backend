
import cors from 'cors'
import v1 from './v1/index';
import express from 'express';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api/v1', v1);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
