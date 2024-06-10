const crypto = require("crypto");

class Leitor {
  #codigo = 0;
  #nome = "";
  #cpf = 0;
  #nascimento = 0;

  constructor(nome, cpf, nascimento) {
    this.#codigo = crypto.randomUUID();
    this.#nome = nome;
    this.#cpf = cpf;
    this.#nascimento = nascimento;
  }

  get getCodigo() {
    return this.#codigo;
  }

  get getNome() {
    return this.#nome;
  }
  set setNome(novoNome) {
    this.#nome = novoNome;
  }

  get getCpf() {
    return this.#cpf;
  }
  set setCpf(novoCpf) {
    this.#cpf = novoCpf;
  }

  get getNascimento() {
    return this.#nascimento;
  }
  set setNascimento(novoNascimento) {
    this.#nascimento = novoNascimento;
  }
}

module.exports = Leitor;
