import { app } from "./app.js";
import { PORT } from "./constant.js";
import connectDB from "./db/connection.js";

connectDB()
    .then(
        app.listen(PORT, (req, res) => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    )
    .catch((err) => {
        console.log("Database connection failed");
        console.error(err);
    });
