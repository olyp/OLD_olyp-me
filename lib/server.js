var ejs = require('ejs');
var express = require('express');
var app = express();


app.use(express.static('public'));
app.set('views', './views');
app.engine('html', ejs.renderFile);
    

app.get("/", function (req, res) {
    res.render('index.html');
    // if (isLoggedIn(req)) {
    //     // render home page
    // } else {
    //     res.redirect("/login");
    // }
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

app.listen(3001, function(){
        console.log('listening on port http://localhost:3001');
    }
);

console.log("yeah")
