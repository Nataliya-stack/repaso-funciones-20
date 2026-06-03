const inputDuplicados = document.getElementById("input");
const btnEliminarDuplicados = document.getElementById("btn");
const resultadoDuplicados = document.getElementById("resultado");

const eliminarDuplicados = (arrayElementos) => [...new Set(arrayElementos)];

const transformarTipo = (item) => {
    let texto = item.trim();
    if (texto === "true") return true;
    if (texto === "false") return false;
    if ((texto.startsWith("'") && texto.endsWith("'")) || (texto.startsWith('"') && texto.endsWith('"'))) {
        return texto.slice(1, -1);
    }
    return !isNaN(texto) && texto !== "" ? Number(texto) : texto;
};

btnEliminarDuplicados.addEventListener("click", () => {
    const valorInput = inputDuplicados.value;

    if (valorInput === "") {
        resultadoDuplicados.textContent = "Por favor, ingrese elementos separados por comas.";
        return;
    }

    const arrayOriginal = valorInput.split(",").map(transformarTipo);

    const arrayResultado = eliminarDuplicados(arrayOriginal);

    const resultadoFormateado = arrayResultado.map(item => {
        if (typeof item === "string") return `"${item}"`;
        return item;
    });

    resultadoDuplicados.textContent = `[ ${resultadoFormateado.join(", ")} ]`;

    inputDuplicados.value = "";
    inputDuplicados.focus();
});

