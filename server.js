const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('server is working...')
})

app.listen(port, () => console.log(`app is now listening on port ${port}`))