const readline = require("readline/promises");
const Leitor = require("./classes/Leitor");
const LeitorCrud = require("./classes/LeitorCrud");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function verificaCpf(cpf) {
  if (!isNaN(cpf) && cpf.length === 11) {
    return cpf;
  } else {
    console.log("Por favor, digite um CPF válido com 11 dígitos.");
    const novoCpf = await rl.question("Digite seu CPF (Apenas com números): ");
    return verificaCpf(novoCpf);
  }
}
async function verificaNascimento(nascimento) {
  if (!isNaN(nascimento) && nascimento.length === 6) {
    return nascimento;
  } else {
    console.log(
      "Por favor, digite a data de seu nascimento com o seguinte formato, DDMMAA."
    );
    const novoNascimento = await rl.question(
      "Digite a data de seu nascimento com o seguinte formato, DDMMAA."
    );
    return verificaNascimento(novoNascimento);
  }
}

async function run() {
  const resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  );

  switch (resposta) {
    case "criar":
      const leitor = new Leitor();

      const novoNome = await rl.question("Insira seu nome: ");
      leitor.setNome = novoNome;

      const cpfInput = await rl.question(
        "Digite seu CPF (Apenas com números):"
      );
      const cpfValido = await verificaCpf(cpfInput);
      leitor.setCpf = cpfValido;

      const nascimentoInput = await rl.question(
        "Digite a data de seu nascimento, com o seguinte formato (DDMMAA):"
      );
      const nascimentoValido = await verificaNascimento(nascimentoInput);
      leitor.setNascimento = nascimentoValido;

      console.log("Leitor criado com sucesso!");

      const crudLeitor = new LeitorCrud();
      crudLeitor.criar(leitor);

      rl.close();
      break;

    case "deletar":
      const excluirCpf = await rl.question(
        "Insira o número de CPF que deseja excluir: "
      );
      const confirmacao = await rl.question(
        `Você tem certeza que deseja excluir o cpf ${excluirCpf}: `
      );

      if (confirmacao == "sim") {
        const crudExclusao = new LeitorCrud();
        crudExclusao.deletar(excluirCpf);
      } else if (confirmacao == "nao") {
        console.log("Finalizando requisição!");
      }

      rl.close();
      break;

    case "consultar":
      const cpfDigitado = await rl.question(
        "Insira o número de cpf que você deseja procurar, em nosso cadastro de leitores: "
      );

      const crudConsulta = new LeitorCrud();
      crudConsulta.consultar(cpfDigitado);

      rl.close();
      break;

    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();
