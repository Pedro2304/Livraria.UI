import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarLivrosComponent } from './adicionar-livros.component';

describe('AdicionarLivrosComponent', () => {
  let component: AdicionarLivrosComponent;
  let fixture: ComponentFixture<AdicionarLivrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarLivrosComponent]
    });
    fixture = TestBed.createComponent(AdicionarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
