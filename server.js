const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});