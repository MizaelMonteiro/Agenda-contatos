import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirContatoComponent } from './exibir-contato-component';

describe('ExibirContatoComponent', () => {
  let component: ExibirContatoComponent;
  let fixture: ComponentFixture<ExibirContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirContatoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExibirContatoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
