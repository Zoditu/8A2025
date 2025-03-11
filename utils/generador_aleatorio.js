var FileStream = require('fs');

function random_number(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function random_text(characters_num) {
    let text = "";
    for(let i = 0; i < characters_num; i++) {
        //65 - 89; 97 - 122
        const letra = String.fromCharCode(random_number(65, 89));
        text += letra;
    }

    return text;
}

function generate_csv(size) {
    let csv = "";
    for (let i = 0; i < size; i++) {
        const matricula = Math.random().toFixed(7).toString().replace('.', '');
        const año = Math.random().toFixed(3).toString().replace('.', '');
        const nombre = random_text(random_number(5, 20));
        const apellidos = random_text(random_number(10, 40));
        const password = random_text(random_number(8, 16));

        csv += `${matricula},${año},${nombre},${apellidos},${password}\n`        
    }

    return csv;
}

/**
 * 
 * @param {Number} size 
 * @param {WritableStream} stream 
 * @returns 
 */
function generate_json(size, stream) {
    let json = "";
    let _stream = stream ? FileStream.createWriteStream(stream, {flags: 'w'}) : null;
    for (let i = 0; i < size; i++) {
        const matricula = Math.random().toFixed(7).toString().replace('.', '');
        const año = Math.random().toFixed(3).toString().replace('.', '');
        const nombre = random_text(random_number(5, 20));
        const apellidos = random_text(random_number(10, 40));
        const password = random_text(random_number(8, 16));

        if(stream) {
            _stream.write(`{ "matricula": "${matricula}", "año": "${año}", "nombre": "${nombre}", "apellidos": "${apellidos}", "password": "${password}"}\n`);
        } else {
            json += `{ "matricula": "${matricula}", "año": "${año}", "nombre": "${nombre}", "apellidos": "${apellidos}", "password": "${password}"}\n`        
        }
    }

    if(!stream) {
        return json;
    }

    _stream.close();
}

module.exports = {
    random_number: random_number,
    random_text: random_text,
    generate_csv: generate_csv,
    generate_json: generate_json
};