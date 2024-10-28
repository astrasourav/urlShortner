//This module handels the functionality of generating the short id

const express = require('express');
const model = require('../model/url');
const shortid = require('shortid');


const urlShortner = async function (req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ msg: "Enter url" });
    }

    const id = shortid();

    await model.create({
        shortid: id,
        originalUrl: body.url,
        visit: []
    });

    return res.status(200).json({short_id: id});

}


module.exports = urlShortner;