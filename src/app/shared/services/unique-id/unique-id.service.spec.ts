import { UniqueIdService } from "./unique-id.service";


// describe('O artefato que queremos testar', () => {
//     it('Primeira condição que queremos testar', () => {
//     });

//     it('Segunda condição que queremos testar', () => {
//     });
// })

//JASMINE É PARA ESCREVER TESTES 
//QUEM RODA OS TESTES É KARMA

describe(`Teste do ${UniqueIdService.name}`, () => {
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {

        //cria uma instancia da classe UniqueIdService
        const service = new UniqueIdService(); 

        //gera um id
        const id = service.generateUniqueIdWithPrefix('app'); 

        //espera que o id contenha 'app-'
        expect(id).toContain('app-'); 
    });
})