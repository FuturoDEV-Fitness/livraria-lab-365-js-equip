/* codigo, nome, tipo(ex: violao, teclado) e estado(ex: danificado, novo, usado) */
const crypto = require("crypto");
class Instrumento {
  #codigo = 0;
  #nome = "";
  #tipo = "";
  #estado = "";

  constructor(nome, tipo, estado) {
    this.#codigo = crypto.randomUUID();
    this.#nome = nome;
    this.#tipo = tipo;
    this.#estado = estado;
  }

  get getCodigo() {
    return this.#codigo;
  }

  get getNome() {
    return this.#nome;
  }
  set setNome(nome) {
    this.#nome = nome;
  }

  get getTipo() {
    return this.#tipo;
  }
  set setTipo(tipo) {
    this.#tipo = tipo;
  }

  get getEstado() {
    return this.#estado;
  }
  set setEstado(estado) {
    this.#estado = estado;
  }
}

module.exports = Instrumento;
