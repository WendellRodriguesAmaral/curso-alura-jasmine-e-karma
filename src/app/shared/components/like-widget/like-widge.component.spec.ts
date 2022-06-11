import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";


describe( LikeWidgetComponent.name ,()=>{
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent=null;
    
    beforeEach(async ()=>{  //antes de cada teste, carregue o component LikeWidgetComponent

        await TestBed.configureTestingModule({ //TestBed permite configurar um modulo de teste que declara o component que quero testar
            declarations: [LikeWidgetComponent],
            providers: [UniqueIdService],
            imports: [FontAwesomeModule]

            //posso fazer tambem da seguinte forma, importar ja o modulo onde meu componete é declarado
            //imports: [LikeWidgetModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent); //retorna uma instancia de ComponentFixture que encapsula a instancia do component
        component = fixture.componentInstance;  //cria uma instancia do component que vou testar
    });

    it('should crete component' , ()=>{
        expect(component).toBeTruthy(); //verifica se criou a instancia, 'se houver instancia o .toBeTruthy() retorna true'
    });

    it('should auto generate ID during ngOnInit when (@Input id) is not assigned', ()=>{
        fixture.detectChanges(); // necessário este método para iniciar o ciclo de vida do component e gerar o id, senão passaria sem gerar
        expect(component.id).toBeTruthy(); //testando se foi gerado o ID, pois foi programado para assim que criar, ser gerado um ID
    })

    it('should NOT auto generate ID during ngOnInit when (@Input id) is assigned',()=>{
        const someId = 'someId'; // 'cria' um ID
        component.id = someId; // atribui o ID acima ao ID do component
        fixture.detectChanges(); //detecta a alteração no component

        expect(component.id).toBe(someId);
    })

    
    it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, ()=>{
        
        spyOn(component.liked, 'emit'); //espiando o objeto liked do component esperando a execução do metodo 'emit'
        fixture.detectChanges();
        component.like(); //executando o método que realiza a emisão

        expect(component.liked.emit).toHaveBeenCalled(); //verificando se o método emit foi chamado.

    });
})