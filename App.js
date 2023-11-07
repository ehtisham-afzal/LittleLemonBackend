import express from "express";
import morgan from 'morgan';
import DishRoutes from './Routes/Dish.js'
import catagoriesRouter from './Routes/catagories.js';
import connectDB from './MongoDB/Connect.js';
import * as dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(cors());
app.use(morgan("dev"));
app.use("/api/dishes", DishRoutes);
app.use("/api/catagories", catagoriesRouter);


const port = process.env.PORT || 3002;

const StartServer = async () => {
    try {
        // eslint-disable-next-line no-undef
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`app is runnig on ${port} `);
        });
    } catch (error) {
        console.log(error);
    }
}
StartServer();