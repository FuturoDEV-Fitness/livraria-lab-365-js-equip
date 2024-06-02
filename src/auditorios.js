const readline = require('readline/promises');
const Auditorio = require('./classes/Auditorio');
const AuditorioCrud = require('./classes/AuditorioCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nome = await rl.question('Qual o nome do Auditório?')
            const numeroPessoas = await rl.question('Quantas pessoas estarão presentes?')
            const descricao = await rl.question("Descreva o auditório em poucas palavras")
            
            const auditorio = new Auditorio()
            auditorio.setNome = nome
            auditorio.setQuantidadePessoasSuportada = numeroPessoas    
            auditorio.setDescricao = descricao
            
            const auditorioCrud = new AuditorioCrud()
            auditorioCrud.criar(auditorio)

            rl.close();
            break;
        case 'deletar': {
            const codigo = await rl.question('Qual o código do auditório que deseja deletar?')

            const auditorioCrud = new AuditorioCrud()
            auditorioCrud.deletar(codigo)

            rl.close();
            break;
        }
        case 'consultar': {
            
            const palavra = await rl.question('Qual o nome do Auditório?')

            const auditorioCrud = new AuditorioCrud()
            auditorioCrud.consultar(palavra)
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
