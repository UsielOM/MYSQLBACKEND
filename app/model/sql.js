const Sequelize = require('sequelize');
const createTable = require('./crateTable');

const sequelize = new Sequelize("bfcv19", "root", "sasa", {
    host: "localhost",
    dialect: "mysql",
    port: 3307
});

const Registro = sequelize.define('registro', {
    id_Registro: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: { type: Sequelize.STRING },
    LastName: { type: Sequelize.STRING },
    Email: { type: Sequelize.STRING },
    Phone: { type: Sequelize.STRING },
    Password: { type: Sequelize.STRING },
    Cpassword: { type: Sequelize.STRING }
}, {
    freezeTableName: true,
    timestamps: false
});

const Roll = sequelize.define('roll', {
    roll_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roll_name: {
        type: Sequelize.DataTypes.STRING,

    }
}, {
    freezeTableName: true,
    timestamps: false
})

const Asignacion = sequelize.define('asignacion', {
    id_asignacion: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_Registro: {
        type: Sequelize.DataTypes.INTEGER
    },
    id_roll: {
        type: Sequelize.DataTypes.INTEGER,

    }
}, {
    freezeTableName: true,
    timestamps: false
})

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexión establecida exitosamente con mysql.");
    }).catch(err => {
        console.error("conexión no establecida: ", err);
    });

    // createTable(Roll);
};

createAsignacion = function(request, callback) {

    Registro.create({
        FirstName: request.FirstName,
        LastName: request.LastName,
        Email: request.Email,
        Phone: request.Phone,
        Password: request.Password,
        Cpassword: request.Cpassword,

    }), Asignacion.create({

        id_Registro: request.id_Registro,
        id_roll: request.id_roll
    }).then(callback(true));



};


getRegistros = function(callback) {
    Registro.findAll().then(registros => callback(registros));
};

module.exports.getRegistros = getRegistros;
module.exports.createAsignacion = createAsignacion
module.exports.init = init;