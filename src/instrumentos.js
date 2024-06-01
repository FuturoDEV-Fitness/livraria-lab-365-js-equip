const readline = require("readline/promises");
const Instrumento = require("./classes/Instrumento");
const InstrumentoCrud = require("./classes/IntrumentoCrud");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function run() {
  const resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  );

  switch (resposta) {
    case "criar":
      const nome = await rl.question(
        "Digite o nome do instrumento (marca/modelo): "
      );

      const tipo = await rl.question(
        "Digite o tipo do instrumento (ex: violao, teclado): "
      );

      const estado = await rl.question(
        "Digite o estado do instrumento (ex: danificado, novo, usado): "
      );

      const instrumento = new Instrumento(nome, tipo, estado);

      const instrumentoCrud = new InstrumentoCrud();

      instrumentoCrud.criar(instrumento);

      rl.close();
      break;
    case "deletar": {
      const codigo = await rl.question(
        "Digite o código do instrumento que deseja deletar: "
      );
      const instrumentoCrud = new InstrumentoCrud();
      instrumentoCrud.deletar(codigo);

      rl.close();
      break;
    }
    case "consultar": {
      const resposta = await rl.question(
        "Digite o nome do instrumento que deseja consultar: "
      );

      const instrumentoCrud = new InstrumentoCrud();
      instrumentoCrud.consultar(resposta);

      rl.close();
      break;
    }
    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();
