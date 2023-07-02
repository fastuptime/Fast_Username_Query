const sorgu = require('./sorgu.js');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
////////////////////////////// GET - POST //////////////////////////////
app.get('/', (req, res) => {
    res.render('index',
        {
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        }
    );
});

app.post('/post', async (req, res) => {
    let {
        username,
        platform
    } = req.body;
    let platforms = ['instagram', 'tiktok', 'telegram', 'youtube', 'github'];
    if (!username || !platform) return res.send('Lütfen tüm alanları doldurun!');

    if (!platforms.includes(platform)) return res.send('Lütfen geçerli bir platform seçin!');
    let result;
    switch (platform) {
        case 'instagram':
            result = await sorgu.instagram(username);
            break;
        case 'tiktok':
            result = await sorgu.tiktok(username);
            break;
        case 'telegram':
            result = await sorgu.telegram(username);
            break;
        case 'youtube':
            result = await sorgu.youtube(username);
            break;
        case 'github':
            result = await sorgu.github(username);
            break;
    }

    res.redirect(`/?&status=${result.status}&message=${result.message}`);
});

////////////////////////////// GET - POST //////////////////////////////

app.listen(80, () => {
    console.log(`Site başlatıldı! Port: 80`);
});