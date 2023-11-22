const clientes = [];

function montaTabela() {
    const tabelaCorpo = document.querySelector("#tabela-corpo");

    // limpar a tabela de qualquer sujeira
    tabelaCorpo.innerHTML = "";

    clientes.forEach((cliente) => {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.innerHTML = cliente.id;

        const tdTitular = document.createElement("td");
        tdTitular.innerHTML = cliente.titular;

        const tdConta = document.createElement("td");
        tdConta.innerHTML = cliente.conta;

        const tdSaldo = document.createElement("td");
        tdSaldo.innerHTML = cliente.saldo;

        const tdAcoes = document.createElement("td");
        tdAcoes.innerHTML = "";

        tr.appendChild(tdId);
        tr.appendChild(tdTitular);
        tr.appendChild(tdConta);
        tr.appendChild(tdSaldo);
        tr.appendChild(tdAcoes);

        tabelaCorpo.appendChild(tr);
    });
}

function geraUltimoId() {
    const id = document.querySelector("#id");
    const ultimoId =
        clientes.length == 0 ? 1 : +clientes[clientes.length - 1].id + 1;

    id.value = ultimoId;
    id.innerHTML = ultimoId;
}

function obterDados() {
    const id = document.querySelector("#id").value;
    const titular = document.querySelector("#titular").value;
    const conta = document.querySelector("#conta").value;
    const saldo = document.querySelector("#saldo").value;

    return { id, titular, conta, saldo };
}

function limparFormulario() {
    const id = (document.querySelector("#id").value = "");
    const titular = (document.querySelector("#titular").value = "");
    const conta = (document.querySelector("#conta").value = "");
    const saldo = (document.querySelector("#saldo").value = "");
}

function salvarDados() {
    const dados = obterDados();

    clientes.push(dados);

    limparFormulario();
    iniciar();
}

function iniciar() {
    montaTabela();
    geraUltimoId();
}
