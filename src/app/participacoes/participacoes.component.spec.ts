import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacoesComponent } from './participacoes.component';

describe('ParticipacoesComponent', () => {
  let component: ParticipacoesComponent;
  let fixture: ComponentFixture<ParticipacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});