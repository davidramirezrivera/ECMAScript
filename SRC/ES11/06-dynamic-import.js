const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./module.js");
    console.log(module);
    module.hello();
})

/// este permite que no cargue el modulo en la pagina web hasta que se ejecute una accion