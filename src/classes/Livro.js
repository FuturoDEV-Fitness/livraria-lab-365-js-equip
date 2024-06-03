class Livro {
  #codigo = 0;
  #nome = "";
  #quantidadePaginas ="";
  #genero = "";
  #autor = "";

  constructor() {
    this.#codigo = Date.now();
    
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

  get getQuantidadePaginas() {
    return this.#quantidadePaginas;
  }
  set setQuantidadePaginas(quantidadePaginas) {
    this.#quantidadePaginas = quantidadePaginas;
  }

  get getGenero() {
    return this.#genero;
  }
  set setGenero(genero) {
    this.#genero = genero;
  }

  get getAutor() {
    return this.#autor;
  }
  set setAutor(autor) {
    this.#autor = autor;
  }
}

module.exports = Livro;
