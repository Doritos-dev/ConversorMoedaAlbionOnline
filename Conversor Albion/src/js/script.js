function conversor() {
    let valorPrata = prompt("Digite a quantidade de prata:");
    
    
    if (valorPrata === null || valorPrata.trim() === "") {
        alert("Operação cancelada ou valor vazio!");
        return;
    }

    valorPrata = parseFloat(valorPrata.replace(",", "."));
    if (isNaN(valorPrata)) {
        alert("Por favor, digite um número válido!");
        return;
    }

    const taxaConversao = 1.8;
    const valorEmReais = (valorPrata * taxaConversao).toFixed(2);
    
    alert(`R$${valorEmReais} - Valor convertido em reais`);
}
