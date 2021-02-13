import { CampoGenerico } from "./campo-generico";

export interface ConfigParams {
  pagina?: number;
  registrosPorPagina?: number;
  pesquisa?: string;
  campo?: CampoGenerico;
}
