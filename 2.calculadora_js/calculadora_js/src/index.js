const calcular = require("./calculadora");

function main() {
    console.log("ingrese una operación");
    var stdin = process.openStdin();

    stdin.addListener("data", function (input) {
        console.log("Resultado: " + calcular(input.toString()));
        console.log(" ");
        console.log("********************");
        console.log("ingrese una operacion");
    });
}

main();