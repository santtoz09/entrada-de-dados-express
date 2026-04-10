 function estruturaCase() {
    let opcao1 = 2;
    switch (opcao1) {
        case 1:
            return("opção escolhida: opcao um");
            break;

        case 2:
            return("opção escolhida: opcao dois")
            break;

        default:
            return("opção escolhida: opcao invalida")
            break;
    }
}

export {estruturaCase}