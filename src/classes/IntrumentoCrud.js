const fs = require("fs");
class InstrumentoCrud {
  constructor() {
    this.filePath = "./src/files/instrumentos.json";
  }

  ler() {
    const data = fs.readFileSync(this.filePath, "utf-8");
    return JSON.parse(data);
  }

  consultar(nome) {
    const conteudoAtual = this.ler();
    const instrumentoEncontrado = conteudoAtual.find(
      (instrumento) => instrumento.nome === nome
    );

    if (instrumentoEncontrado) {
      console.log(
        `Instrumento buscado: ${JSON.stringify(instrumentoEncontrado)}`
      );
    } else {
      console.log("Instrumento não encontrado.");
    }
  }

  criar(instrumento) {
    const conteudoAtual = this.ler();

    conteudoAtual.push({
      codigo: instrumento.getCodigo,
      nome: instrumento.getNome,
      tipo: instrumento.getTipo,
      estado: instrumento.getEstado
    });
    fs.writeFileSync(this.filePath, JSON.stringify(conteudoAtual), "utf-8");
    console.log("Instrumento criado com sucesso!");
  }

  deletar(codigo) {
    const consteudoAtual = this.ler();

    const instrumentoFiltrado = consteudoAtual.filter(
      (instrumento) => instrumento.codigo === codigo
    );

    if (instrumentoFiltrado.length === 0) {
      console.log("Instrumento não encontrado.");
    } else {
      const novoConteudo = consteudoAtual.filter(
        (instrumento) => instrumento.codigo !== codigo
      );
      fs.writeFileSync(this.filePath, JSON.stringify(novoConteudo), "utf-8");
      console.log("Instrumento deletado com sucesso.");
    }
  }
}

module.exports = InstrumentoCrud;
