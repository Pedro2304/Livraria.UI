import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './components/livros/livros.component';
import { AdicionarLivrosComponent } from './components/adicionar-livros/adicionar-livros.component';
import { FormsModule } from '@angular/forms';
import { AlterarLivrosComponent } from './components/alterar-livros/alterar-livros.component';



@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    AdicionarLivrosComponent,
    AlterarLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
