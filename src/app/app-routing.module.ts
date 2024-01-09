import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './components/livros/livros.component';
import { AdicionarLivrosComponent } from './components/adicionar-livros/adicionar-livros.component';
import { AlterarLivrosComponent } from './components/alterar-livros/alterar-livros.component';

const routes: Routes = [
  {
    path:'',
    component:LivrosComponent
  },
  {
    path:'livros',
    component:LivrosComponent
  },
  {
    path:'livros/adicionar',
    component: AdicionarLivrosComponent
  },
  {
    path:'livros/alterar/:id',
    component: AlterarLivrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
