//validar y no romper el uso de nuestra aplicacion 
//seleccionar elementos dentro de un array
const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
console.log(user.gndx.country);
//optional chaining
console.log(users?.bebeloper?.country);
//esta actualizacion lo que no s permite es evitar romper el codigo
//impidiendo que se genere un error que interrumpa el flujo del trabajo y haciendo que solo se obtenga
//un valor undefined
