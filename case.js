 function estruturaCase(opcao) {
    switch (opcao) {
        case 1:
            return "Opção 1 selecionada";
        case 2:
            return "Opção 2 selecionada";
        case 3:
            return "Opção 3 selecionada";
        default:
            return "Opção inválida";
    }
}

export {estruturaCase}