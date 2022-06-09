import { UniqueIdService } from "./unique-id.service";


// describe('O artefato que queremos testar', () => {
//     it('Primeira condição que queremos testar', () => {
//     });

//     it('Segunda condição que queremos testar', () => {
//     });
// })

//JASMINE É PARA ESCREVER TESTES 
//KARMA É QUEM RODA OS TESTES 

describe(`Teste do ${UniqueIdService.name}`, () => {
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {

        //cria uma instancia da classe UniqueIdService
        const service = new UniqueIdService(); 

        //gera um id
        const id = service.generateUniqueIdWithPrefix('app'); 

        //espera que o id começe com 'app-'
        expect(id.startsWith('app-')).toBeTrue(); 
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs whe called multiple times` , ()=>{

        const service = new UniqueIdService();
        const ids = new Set(); // Set() não aceita valores duplicados

        for(let i = 0; i < 50; i++){
            ids.add(service.generateUniqueIdWithPrefix('app')); //so vai adicionar se nenhum id for igual ao outro
        }

        expect(ids.size).toBe(50); //testa se a quantidade de ids, se for significa que nenhum é igual ao outro
    })
})