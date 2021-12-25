const express = require("express")
const path = require("path")

const app = express()
const distDir = path.join(__dirname, "client_build/")
const port = process.env.PORT || 8080

app.use(express.static(distDir))

// Handle get requests to return the build app.
app.get("*", (req, res) => {
  res.sendFile(path.resolve(distDir, "index.html"))
})

app.listen(port)
