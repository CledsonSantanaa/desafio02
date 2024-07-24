
// Declaração da função que recebe os valores de vitorias e derrota
function calcularSaldoRankeadas(vitorias, derrotas) {
    // A variável saldo foi criada para calcular o saldo de rankeadas
    let saldo = vitorias - derrotas;

    /// Estrutura de decisão onde determina a classificação com base no número de vitórias
    let classificacao;
    if (vitorias < 10) {
        classificacao = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        classificacao = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        classificacao = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        classificacao = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        classificacao = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        classificacao = "Lendário";
    } else if (vitorias >= 101) {
        classificacao = "Imortal";
    }

    // Resultado da operação que retorna o saldo e a classificação
    return { saldo: saldo, classificacao: classificacao };
}

// Código que imprime o resultado da operação
let resultado = calcularSaldoRankeadas(85, 20);
console.log(`O herói tem de saldo: ${resultado.saldo}, está no nível: ${resultado.classificacao}`);