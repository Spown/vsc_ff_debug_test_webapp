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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script type="text/javascript" src="/static/js/common.js"></script>
    <script type="text/javascript" src="/static/js/index.js?v=1.0"></script>
</head>
<body>
    <div id="output"></idv>
</body>
</html>`
) })

app.listen(penv.WA_PORT, penv.WA_HOST, function () {
  console.log(`App listening on ${penv.WA_HOST}:${penv.WA_PORT}!`);
});