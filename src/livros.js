const readline = require("readline/promises");
const Livro = require("./classes/Livro");
const LivroCrud = require("./classes/LivroCrud");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  const resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  );

  switch (resposta) {
    case "criar":
      const livro = new Livro();

      livro.setNome = await rl.question("Digite o nome do livro ");

      livro.setQuantidadePaginas = await rl.question(
        "Digite a Quantidade de Paginas "
      );

      livro.setGenero = await rl.question("Digite o genero do livro");

      livro.setAutor = await rl.question("Digite o autor do livro");
      const crud = new LivroCrud();
      crud.criar(livro);

      rl.close();
      break;

    case "deletar": {
      const codigoLivroParaDeletar = await rl.question(
        "Digite o codigo do livro para deletar"
      );
      const crud = new LivroCrud()
      crud.deletar(codigoLivroParaDeletar)
      
      rl.close();
      break;
    }
    case "consultar": {
      const codigoLivroParaConsultar = await rl.question(
        "Digite o codigo do livro para consultar"
      );
      const crud = new LivroCrud();
      crud.consultar(codigoLivroParaConsultar);

      rl.close();
      break;
    }

    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();

