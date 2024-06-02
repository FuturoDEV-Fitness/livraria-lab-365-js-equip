const crypto = require("crypto")

class Auditorio {

    #nome = ''
    #codigo = ''
    #descricao = ''
    #quantidadePessoasSuportada = 0

    constructor(nome) {
        this.#nome = nome
        this.#codigo = crypto.randomUUID()
    }

    get getCodigo(){
        return this.#codigo
    }

    set setCodigo(codigo){
        this.#codigo = codigo
    }

    get getNome(){
        return this.#nome
    }

    set setNome(nome){
        this.#nome = nome
    }

    get getDescricao(){
        return this.#descricao
    }

    set setDescricao(descricao){
        this.#descricao = descricao
    }

    get getQuantidadePessoasSuportada(){
        return this.#quantidadePessoasSuportada
    }

    set setQuantidadePessoasSuportada(quantidadePessoasSuportada){
        this.#quantidadePessoasSuportada = quantidadePessoasSuportada
    }

}

module.exports = Auditorio;