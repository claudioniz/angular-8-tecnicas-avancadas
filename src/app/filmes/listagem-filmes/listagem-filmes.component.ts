import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly registrosPorPagina = 4;
  filmes: Filme[]=[];
  pagina = 0;
  filtrosListagem: FormGroup;
  generos: Array<string>;

  constructor(private filmeServices: FilmesService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.filtrosListagem = this.fb.group({
      texto: [''],
      genero:['']
    });

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção Científica', 'Comédia', 'Drama']

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.pagina ++;
    this.filmeServices.listar(this.pagina, this.registrosPorPagina)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

}
