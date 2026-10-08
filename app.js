require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const livestockRoutes = require("./routes/livestockRoutes");
const logger = require("./middleware/logger");
const {
    notFound,
    errorHandler
} = require("./middleware/errorMiddleware");

app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
    res.json({
        nama: "Arief Gunawan",
        npm: "2428240087",
        kelas: "SI5B",
        topik: "Peternakan",
        resource: "livestock",
        endpoints: {
            getAll: "GET /livestock",
            getById: "GET /livestock/:id",
            create: "POST /livestock",
            update: "PUT /livestock/:id",
            delete: "DELETE /livestock/:id"
        }
    });
});

app.use("/livestock", livestockRoutes);

// 404
app.use(notFound);

// Error handler
app.use(errorHandler);

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
    });
}

module.exports = app;