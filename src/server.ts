import express from "express"

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const PORT = Number(process.env.PORT) || 3000;
const app = express()

app.use(express.json())
app.use(routes)

app.use(errorHandling)

app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on port ${PORT}`));

