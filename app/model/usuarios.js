module.exports = function(app, sql) {

    app.get("/registros", function(req, res) {

        sql.getRegistros(function(result) {
            res.send(result);

        });
    });

    app.post("/register", function(request, response) {
        sql.createAsignacion(request.body, function(result) {
            response.send(result);
        })
    })
}