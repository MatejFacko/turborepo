import express from "express";

const app = express();
const port = 5005;

app.get("/workspaces", (_, response) => {
    response.json({ data: [] });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
