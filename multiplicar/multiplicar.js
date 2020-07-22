const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    let u = ``;

    for (var j = 1; j <= limite; j++) {
        u = u + `${base}*${j}=${j*base}\n`
    }
    console.log(u.green);
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("no es un numero")
            return;
        }

        let u = ``;

        for (var j = 1; j <= limite; j++) {
            u = u + `${base}*${j}=${j*base}\n`
        }

        fs.writeFile(`tablas/tabla del ${base}.txt`, u, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla del ${base}.txt`)

            }
        });

    })
}
module.exports = {
    crearArchivo,
    listarTabla
}