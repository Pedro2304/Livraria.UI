import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarLivrosComponent } from './alterar-livros.component';

describe('AlterarLivrosComponent', () => {
  let component: AlterarLivrosComponent;
  let fixture: ComponentFixture<AlterarLivrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarLivrosComponent]
    });
    fixture = TestBed.createComponent(AlterarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
