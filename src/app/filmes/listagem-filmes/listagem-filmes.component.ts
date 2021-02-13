import { Component, OnInit } from '@angular/core';
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

  constructor(private filmeServices: FilmesService) {

  }

  ngOnInit() {
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
