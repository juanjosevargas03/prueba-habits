
function calcular(input) {
    let array = input.split("");
    if (array.length > 22) return "No se puede calcular bro, longitud maxima 20 caracteres";
    let arr = [];

    //Organizar los numeros y operadores en un array
    for (let i = 0; i < array.length; i++) {
        let concat = "";
        while (!isNaN(array[i]) || array[i] === ".") {
            concat = concat + array[i];
            i++;
        }
        if (concat !== "") arr.push(concat);

        if (["+", "-", "*", "/", "^", "√"].includes(array[i])) {
            arr.push(array[i]);
        }
    }

    var result = 0;

    //Calcular raices
    let raizIndex = 0;
    while (raizIndex !== -1) {
        raizIndex = arr.indexOf("√");
        if (raizIndex !== -1) {
            result = Math.pow(parseFloat(arr[raizIndex + 1]), 1 / parseFloat(arr[raizIndex - 1]));
            arr.splice(raizIndex - 1, 3, result)
        }
    }

    //Calcular potencias
    let potIndex = 0;
    while (potIndex !== -1) {
        potIndex = arr.indexOf("^");
        if (potIndex !== -1) {
            result = Math.pow(parseFloat(arr[potIndex - 1]), parseFloat(arr[potIndex + 1]));
            arr.splice(potIndex - 1, 3, result)
        }
    }

    //Calcular divisiones
    let divIndex = 0;
    while (divIndex !== -1) {
        divIndex = arr.indexOf("/");
        if (parseFloat(arr[divIndex + 1]) === 0) return "No se puede calcular bro, Division entre cero";
        if (divIndex !== -1) {
            result = parseFloat(arr[divIndex - 1]) / parseFloat(arr[divIndex + 1]);
            arr.splice(divIndex - 1, 3, result)
        }
    }

    //Calcular multiplicaciones
    let mulIndex = 0;
    while (mulIndex !== -1) {
        mulIndex = arr.indexOf("*");
        if (mulIndex !== -1) {
            result = parseFloat(arr[mulIndex - 1]) * parseFloat(arr[mulIndex + 1]);
            arr.splice(mulIndex - 1, 3, result)
        }
    }

    //Calcular restas
    let resIndex = 0;
    while (resIndex !== -1) {
        resIndex = arr.indexOf("-");
        if (resIndex !== -1) {
            result = parseFloat(arr[resIndex - 1]) - parseFloat(arr[resIndex + 1]);
            arr.splice(resIndex - 1, 3, result)
        }
    }

    //Calcular sumas
    let sumIndex = 0;
    while (sumIndex !== -1) {
        sumIndex = arr.indexOf("+");
        if (sumIndex !== -1) {
            result = parseFloat(arr[sumIndex - 1]) + parseFloat(arr[sumIndex + 1]);
            arr.splice(sumIndex - 1, 3, result)
        }
    }

    return result;
}

module.exports = calcular;

