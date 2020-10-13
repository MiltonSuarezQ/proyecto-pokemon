import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDosComponent } from './pokemon-dos.component';

describe('PokemonDosComponent', () => {
  let component: PokemonDosComponent;
  let fixture: ComponentFixture<PokemonDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
