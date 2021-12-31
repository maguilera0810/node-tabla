const fs = require('fs');
require('colors');

const randomColor = (cad = '') => {
  const i = Math.floor(Math.random() * (100000 - 0)) % 7;
  if (i == 0) {
    return cad.green
  } else if (i == 1) {
    return cad.rainbow
  } else if (i == 2) {
    return cad.trap
  } else if (i == 3) {
    return cad.blue
  } else if (i == 4) {
    return cad.underline.red
  } else if (i == 5) {
    return cad.yellow
  } else if (i == 6) {
    return cad.cyan
  }

}
const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
  try {
    let salida = []
    for (let i = 1; i <= hasta; i++) {
      salida.push(`${base} x ${i} = ${base * i}`)
    }
    if (listar) {
      console.log(randomColor(`=============================`));
      console.log(randomColor(`${'\t'}Tabla del ${base}`));
      console.log(randomColor(`=============================`));
      salida.forEach((s, idx) => {
        console.log(randomColor(s));
      })

    }
    const file = `./salida/tabla-${base}.txt`
    fs.writeFileSync(file, salida.join('\n'))
    return file;
  } catch (err) {
    throw err

  }
}

module.exports = {
  crearArchivo
}