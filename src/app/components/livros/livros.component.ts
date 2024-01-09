import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro.model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit{
  livros: Livro[] = [];

  constructor(private livroService: LivrosService, private router: Router){}


  ngOnInit(): void 
  {
    this.livroService.getAllLivros()
    .subscribe({
      next:(livros) =>{
        this.livros = livros;
      },
      
      error : (response) =>{
        console.log(response);

      }

    })
    
  }

  deleteLivro(id : string){

  this.livroService.deletelivro(id)
  .subscribe({

    next: (response) =>{

      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', { skipLocationChange: true})
      .then(() =>
        {
          this.router.navigate([currentUrl]);
        }
        )
    }

  })
  }
 

}
