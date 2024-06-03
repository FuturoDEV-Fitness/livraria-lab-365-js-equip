class LivroCrud {
    constructor() {
      this.filePath = "./src/files/livros.json";
    }
    criar(livro) {
      const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
      conteudoAtual.push({
        codigo: livro.getCodigo,
        nome: livro.getNome,
        quantidadePaginas: livro.getQuantidadePaginas,
        genero: livro.getGenero,
        autor: livro.getAutor,
      });
  
      fs.writeFileSync(
        this.filePath,
        JSON.stringify(conteudoAtual, null, 2),
        "utf-8"
      );
      console.log("arquivo Inserido com sucesso");
    }
    consultar(codigoLivroParaConsultar) {
      const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
      const codigoEncontrado = conteudoAtual.find(
        (livro) => livro.codigo == codigoLivroParaConsultar
      );
      if (codigoEncontrado) {
        console.log(codigoEncontrado);
      } else {
        console.log(
          `Livro com codigo ${codigoLivroParaConsultar} não encontrado.`
        );
      }
    }
    deletar(codigoLivroParaDeletar) {
      const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
      const novoConteudo = conteudoAtual.filter(
        (livro) => livro.codigo != codigoLivroParaDeletar
      );
  
      if (novoConteudo.length !== conteudoAtual.length) {
        fs.writeFileSync(
          this.filePath,
          JSON.stringify(novoConteudo, null, 2),
          "utf-8"
        );
        console.log(`Livro com código ${codigoLivroParaDeletar} deletado.`);
      } else {
        console.log("Codigo não encontrado");
      }
      /*Verificação de Alterações : Após a filtragem, o método verifica se o tamanho do 
      novo array ( novoConteudo.length) 
      é diferente do tamanho do array original ( conteudoAtual.length). Se forem diferentes, 
      isso significa que pelo menos um livro foi removido durante a filtragem, indicando que 
      um livro com o código especificado foi encontrado e excluído.*/
      /*Escrita do Novo Conteúdo : Há diferenças nos tamanhos dos arrays, o método escreve 
      o novo conteúdo filtrado de volta ao arquivo JSON usando fs.writeFileSync. Este método
      é síncrono e substitui todo o conteúdo do arquivo pelo novo array JSON formatado. O uso 
      de JSON.stringifycomo os argumentos null e 2 garante que o JSON seja formatado de maneira 
      legível, com dois espaços de indentação.*/
    }
  }
  
  module.exports = LivroCrud;