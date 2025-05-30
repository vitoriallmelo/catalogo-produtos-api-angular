import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoDetalhesComponent } from './produto-detalhes.component';

describe('ProdutoDetalhesComponent', () => {
  let component: ProdutoDetalhesComponent;
  let fixture: ComponentFixture<ProdutoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
