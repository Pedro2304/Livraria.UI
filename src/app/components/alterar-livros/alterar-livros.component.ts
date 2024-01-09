import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro.model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-alterar-livros',
  templateUrl: './alterar-livros.component.html',
  styleUrls: ['./alterar-livros.component.css']
})
export class AlterarLivrosComponent implements OnInit {

  alterarLivroRequest: Livro = {
    id: '',
    titulo:'',
    subtitulo:'',
    corDaCapa:'',
    preco: 0
  };

  constructor(private router: Router, 
    private livroService: LivrosService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');

        if(id){
          this.livroService.getLivro(id)
          .subscribe({
            next : (response) =>{
              this.alterarLivroRequest = response;

            }
          })
        }

      }
    })

  }
  alterarLivro(){
    this.livroService.alterarLivro(this.alterarLivroRequest.id, this.alterarLivroRequest)
    .subscribe({

      next :(response) =>
      {
        this.router.navigate(['livros']);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
