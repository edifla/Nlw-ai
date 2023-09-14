import cors from "cors"
import express from "express"
import { download } from "./download.js"
const app = express()

app.get("/summary/:id", (req, res) => {
  download(req.params.id)
  res.json({ result: "Download do vídeo realizado com sucesso" })
})

app.use(cors())
app.listen(3333, () => console.log("Server is running on port 3333"))
