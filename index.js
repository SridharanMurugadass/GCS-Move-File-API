"use strict";

var cmd = require('node-cmd');
const express = require('express');
const app = express();

app.post('/sendData', function (req, res) {
    let body = '';
    req.on('data', chunk => {
        var data = JSON.parse(chunk.toString());
        console.log('data', data.sourceBucket);
        console.log('data', data.destinationBucket);

        cmd.get(
            'gsutil mv ' + data.sourceBucket + ' ' + data.destinationBucket,

        );
    });

    res.json({ message: 'Task successfully Done' });
});

var server = app.listen(4444, '0.0.0.0');