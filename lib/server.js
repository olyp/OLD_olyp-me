var express = require("express");

app.get("/", function (req, res) {
    if (isLoggedIn(req)) {
        // render home page
    } else {
        res.redirect("/login");
    }
});

app.get("/login", function (req, res) {
    if (isLoggedIn(req)) {
        res.redirect("/");
    } else {
        // render login page
    }
});

app.post("/login", function (req, res) {
    getUserFromAuth(req.params.username, req.params.password).then(
        function () {
            // set cookie
            res.redirect("/");
        },
        function () {
            // render login page
        }
    )
});
