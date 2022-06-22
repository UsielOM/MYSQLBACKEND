module.exports = function(tabla) {

    tabla.sync({ force: true }).then((data) => {
        console.log("Tabla creada correctamente");
    }).catch((err) => {
        console.error("Error al crear la tabla: ", err);
    })
}