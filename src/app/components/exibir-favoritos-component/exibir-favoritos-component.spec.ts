import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirFavoritosComponent } from './exibir-favoritos-component';

describe('ExibirFavoritosComponent', () => {
  let component: ExibirFavoritosComponent;
  let fixture: ComponentFixture<ExibirFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirFavoritosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExibirFavoritosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
