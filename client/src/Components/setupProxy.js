const proxy = require("http-proxy-middleware")

module.exports = function(app)
{
    app.use(
        proxy("/v1/plate-reader/",{
            target:"https://api.platerecognizer.com/v1/plate-reader/",
            secure:false,
            changeOrigin:true
        })
    )
}