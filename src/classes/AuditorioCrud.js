const fs = require('fs')

class AuditorioCrud {
    
    constructor() {
        this.filePath = './src/files/auditorios.json';
    }

    criar(auditorio){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        conteudoAtual.push({
            codigo: auditorio.getCodigo,
            nome: auditorio.getNome,
            capacidade: auditorio.getQuantidadePessoasSuportada,
            descricao: auditorio.getDescricao
        })
        
        fs.writeFileSync(
            this.filePath, JSON.stringify(conteudoAtual, null, 2), 'utf-8'
        )
    }

    consultar(palavra){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        
        const auditorioEncontrado = conteudoAtual.find(auditorio => auditorio.nome === palavra)

        if(auditorioEncontrado){
            console.log(auditorioEncontrado)
        } else {
            console.log('Auditório não foi encontrado')
        }
    }

    deletar(codigo){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        const auditorioFiltrado = conteudoAtual.filter(auditorio => auditorio.codigo === codigo);

        if (auditorioFiltrado === 0) {
            console.log('Auditório não foi encontrado')
        } else {
            const conteudoNovo = conteudoAtual.filter(auditorio => auditorio.codigo !== codigo);
            fs.writeFileSync(this.filePath, JSON.stringify(conteudoNovo), 'utf-8')
        }
    }

}

module.exports = AuditorioCrud