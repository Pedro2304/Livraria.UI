import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro.model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-adicionar-livros',
  templateUrl: './adicionar-livros.component.html',
  styleUrls: ['./adicionar-livros.component.css']
})
export class AdicionarLivrosComponent {
  novoLivro : Livro = {
    id: '',
    titulo:'',
    subtitulo:'',
    corDaCapa:'',
    preco: 0
  };


  constructor(private LivroService: LivrosService, private router: Router){}


  adicionarLivro(){
    this.LivroService.adicionarLivro(this.novoLivro)
    .subscribe({

      next:(livro) =>{
        this.router.navigate(['livros']);
      },
      error:(response) =>{
        console.log(response);
      }

    });


  }


}
