const express = require("express")
const app = express()
// const PORT = process.env.PORT || 5000

const PORT = 5000

app.get("/api", (req, res) => {
    res.send("Hello from backend")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
