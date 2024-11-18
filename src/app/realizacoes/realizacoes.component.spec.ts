import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizacoesComponent } from './realizacoes.component';

describe('RealizacoesComponent', () => {
  let component: RealizacoesComponent;
  let fixture: ComponentFixture<RealizacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
