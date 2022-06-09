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

    let service: UniqueIdService=null;

    beforeEach(()=>{ // "antes de cada", esta função é executada antes de cada teste realizado.
        service = new UniqueIdService();    // antes da execução de cada teste cria uma instancia da classe UniqueIdService
    })

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {

        //gera um id
        const id = service.generateUniqueIdWithPrefix('app'); 

        //espera que o id começe com 'app-'
        expect(id.startsWith('app-')).toBeTrue(); 
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs whe called multiple times` , ()=>{

        const ids = new Set(); // Set() não aceita valores duplicados

        for(let i = 0; i < 50; i++){
            ids.add(service.generateUniqueIdWithPrefix('app')); //so vai adicionar se nenhum id for igual ao outro
        }

        expect(ids.size).toBe(50); //testa se a quantidade de ids for 50, se for significa que nenhum é igual ao outro
    })

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generateIds when called`, ()=>{
        service.generateUniqueIdWithPrefix("app"); //gerando ids duas vezes
        service.generateUniqueIdWithPrefix("app");

        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2); //gerei id duas vezes, então estou testando se o numero de ids existentes é igual a 2
    })

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw exception when called with empty`,()=>{

        //deve ser passado dentro de uma função para dar certo no caso de exceções
        expect(()=>service.generateUniqueIdWithPrefix(null)).toThrow(); //testando se ao ser chamado sem o prefixo, lança o erro que definimos ou seja É esperado lançar o erro
        expect(()=>service.generateUniqueIdWithPrefix(undefined)).toThrow();
        expect(()=>service.generateUniqueIdWithPrefix('')).toThrow();
    })
})