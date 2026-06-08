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
    let textoResultado = ""; 

    if (valorInput === "") {
        textoResultado = "Por favor, ingrese elementos separados por comas.";
    } else {
        const arrayOriginal = valorInput.split(",").map(transformarTipo);
        const arrayResultado = eliminarDuplicados(arrayOriginal);

        const resultadoFormateado = arrayResultado.map(item => 
            typeof item === "string" ? `"${item}"` : item
        );

        textoResultado = `[ ${resultadoFormateado.join(", ")} ]`;
    }

    resultadoDuplicados.textContent = textoResultado;

    inputDuplicados.value = "";
    inputDuplicados.focus();
});

