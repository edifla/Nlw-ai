import ytdl from "ytdl-core"
import fs from "fs"
import { info } from "console"
import { on } from "events"

export const download = (videoID) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoID
  console.log("Realizando download do vídeo: " + videoID)
  ytdl(videoID, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60) {
        throw new Error("A duração do vídeo é maior que 60 segundos.")
      }
    })
    .on("end", () => {
      console.log("Download do vídeo finalizado.")
    })
    .on("error", (Error) => {
      console.log("Não foi possivel fazer o download do vídeo")
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
