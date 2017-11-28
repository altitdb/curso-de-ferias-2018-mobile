import {Injectable} from "@angular/core"
import {Http} from "@angular/http"

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable()
export class ApiService {

  private api = 'http://localhost:3000';
  public data: any = {};

  constructor(private http: Http) {
  }

  getUsuarios = () => {
    return this.http.get(`${this.api}/usuarios`)
      .map(res => res.json())
  };

  getUsuarioPorId = id => {
    return this.http.get(`${this.api}/usuarios/${id}`)
      .map(res => res.json())
  };

  getDisciplinas = () => {
    return this.http.get(`${this.api}/disciplinas`)
      .map(res => res.json())
  };

  getDisiplinaPorId = id => {
    return this.http.get(`${this.api}/disciplinas/${id}`)
      .map(res => res.json())
  };

  getAlonosPorDisiplinaId = id => {
    return this.http.get(`${this.api}/disciplinas/${id}/alunos`)
      .map(res => res.json())
  };

  getPresençasPorDisciplina = disciplina => {
    return this.http.get(`${this.api}/relatorio/${disciplina}`)
      .map(res => res.json())
  };

  getPresençasPorAluno = (disciplina, aluno) => {
    return this.http.get(`${this.api}/relatorio/${disciplina}/${aluno}`)
      .map(res => res.json())
  };

  getQrCode = (disciplina, data) => {
    return this.http.get(`${this.api}/frequencia/${disciplina}/${data}`)
      .map(res => res.json())
  };

// POST
  login = data =>
    this.http.post(`${this.api}/login`, data)
      .map(res => res.json());

  criarUsuario = usuario => {
    this.http.post(`${this.api}/usuarios`, usuario)
      .map(res => res.json())
  };

  criarDisciplina = disciplina => {
    this.http.post(`${this.api}/disciplinas`, disciplina)
      .map(res => res.json())
  };

  realizarPresenca = (disciplina, aluno, data) => {
    this.http.post(`${this.api}/frequencia/${disciplina}/${aluno}`, data)
      .map(res => res.json())
  };

// PUT
  atualizarAluno = data => {
    return this.http.put(`${this.api}/usuarios/${data.id}`, data)
      .map(res => res.json())
  };

  atualizarDisciplina = data => {
    return this.http.put(`${this.api}/disciplinas/${data.id}`, data)
      .map(res => res.json())
  };

//DELETE
  excluirAluno = id => {
    return this.http.delete(`${this.api}/usuarios/${id}`)
      .map(res => res.json())

  };

  excluirDisciplina = id => {
    return this.http.delete(`${this.api}/disciplinas/${id}`)
      .map(res => res.json())
  };

  excluirPresenca = (disciplina, aluno) => {
    return this.http.delete(`${this.api}/frequencia/${disciplina}/${aluno}`)
      .map(res => res.json())
  };

}
