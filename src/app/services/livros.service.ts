import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  baseApiUrl: string = "https://localhost:7245";

  constructor(private http: HttpClient) { }

  getAllLivros(): Observable<Livro[]>
  {
    return this.http.get<Livro[]>(this.baseApiUrl + '/api/livros');
}
  adicionarLivro (novoLivro : Livro): Observable<Livro>{

    novoLivro.id ='00000000-0000-0000-0000-000000000000';
    return this.http.post<Livro>(this.baseApiUrl + "/api/livros", novoLivro);

  }

  getLivro(id : string) : Observable<Livro>{
    return this.http.get<Livro>(this.baseApiUrl + '/api/livros/' + id);
  }

  alterarLivro(id : string, alterarLivroRequest: Livro) : Observable<Livro>{
    return this.http.put<Livro>(this.baseApiUrl + '/api/livros/' + id, alterarLivroRequest);
    
  }

  deletelivro(id: string) : Observable<Livro>{

    return this.http.delete<Livro>(this.baseApiUrl + '/api/livros/' + id);
  }
}
