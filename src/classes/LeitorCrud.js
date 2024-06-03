const fs = require("fs");

class LeitorCrud {
  constructor() {
    this.filePath = "./src/files/leitores.json";
  }

  criar(leitor) {
    const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

    conteudoAtual.push({
      codigo: leitor.getCodigo,
      nome: leitor.getNome,
      cpf: leitor.getCpf,
      nascimento: leitor.getNascimento,
    });

    fs.writeFileSync(
      this.filePath,
      JSON.stringify(conteudoAtual, null, 2),
      "utf-8"
    );
  }

  consultar(cpfDigitado) {
    const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

    const cpfEncontrado = conteudoAtual.find(
      (procuraLeitor) => procuraLeitor.cpf === cpfDigitado
    );

    if (cpfEncontrado) {
      console.log(cpfEncontrado);
    } else {
      console.log("Leitor não encontrado!");
    }
  }

  deletar(excluirCpf) {
    const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

    const cpfEncontrado = conteudoAtual.find(
      (procuraLeitor) => procuraLeitor.cpf === excluirCpf
    );

    if (cpfEncontrado) {
      console.log(`CPF: ${excluirCpf}, deletado!`);
    } else {
      console.log("Leitor não encontrado!");
    }
  }
}

module.exports = LeitorCrud;
