var penv = process.env,
    _ = require('lodash'),
    express = require('express'),
        app = express(),
    staticPaths = {
        'static': 'static'
    },
    path = require('upath'),
    appRootPath = require('app-root-path')
;

_.each(staticPaths||{}, function (el, idx) {
    var a = idx ? idx : path.relative(appRootPath.path, el)
    app.use('/'+a, express.static(el));
});

app.get('/', (req, res, next)=>{ res.send(
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VS Code Debug Adapter for Firefox test web app</title>
    <script src="https://api-maps.yandex.ru/2.1/?lang=en&coordorder=longlat" type="text/javascript"></script>
    <script src="/static/js/lib/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="/static/js/common.js"></script>
    <script type="text/javascript" src="/static/js/index.js"></script>
</head>
<body>
    <div id="output"></idv>
    <div id="main_map"></div>
</body>
</html>`
) })

app.listen(penv.WA_PORT, penv.WA_HOST, function () {
  console.log(`App listening on ${penv.WA_HOST}:${penv.WA_PORT}!`);
});