const api: string = 'matera.com/api/v1';
let headers: object = {};

function setHeader() {
  headers = {
    Authorization : localStorage.getItem('token'),
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
}

// GET
export const getUsuarios = () => {
  setHeader();
  fetch(`${api}/usuarios`, {headers: headers})
    .then(res => res.json())
};

export const getUsuarioPorId = id => {
  setHeader();
  fetch(`${api}/usuarios/${id}`, {headers: headers})
    .then(res => res.json())
};

export const getDisciplinas = () => {
  setHeader();
  fetch(`${api}/disciplinas`, {headers: headers})
    .then(res => res.json())
};

export const getDisiplinaPorId = id => {
  setHeader();
  fetch(`${api}/disciplinas/${id}`, {headers: headers})
    .then(res => res.json())
};

export const getAlonosPorDisiplinaId = id => {
  setHeader();
  fetch(`${api}/disciplinas/${id}/alunos`, {headers: headers})
    .then(res => res.json())
};

export const getPresençasPorDisciplina = disciplina => {
  setHeader();
  fetch(`${api}/relatorio/${disciplina}`, {headers: headers})
    .then(res => res.json())
};

export const getPresençasPorAluno = (disciplina, aluno) => {
  setHeader();
  fetch(`${api}/relatorio/${disciplina}/${aluno}`, {headers: headers})
    .then(res => res.json())
};

export const getQrCode = (disciplina, data) => {
  setHeader();
  fetch(`${api}/frequencia/${disciplina}/${data}`, {headers: headers})
    .then(res => res.json())
};

// POST
export const login = post =>
  fetch(`${api}/login`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(post)})
    .then(res => res.json())
    .catch(err => err.json());

export const criarUsuario = usuario => {
  setHeader();
  fetch(`${api}/usuarios`, {method: 'POST', headers: headers, body: JSON.stringify(usuario)})
    .then(res => res.json())
    .catch(err => err.json());
};

export const criarDisciplina = disciplina => {
  setHeader();
  fetch(`${api}/disciplinas`, {method: 'POST', headers: headers, body: JSON.stringify(disciplina)})
    .then(res => res.json())
    .catch(err => err.json());
};

export const realizarPresenca = (disciplina, aluno, data) => {
  setHeader();
  fetch(`${api}/frequencia/${disciplina}/${aluno}`, {method: 'POST', headers: headers, body: JSON.stringify(data)})
    .then(res => res.json())
    .catch(err => err.json());
};

// PUT
export const atualizarAluno = data => {
  setHeader();
  fetch(`${api}/usuarios/${data.id}`, {method: 'PUT', headers: headers, body: JSON.stringify(data)})
    .then(res => res.json())
    .catch(err => err.json());
};

export const atualizarDisciplina = data => {
  setHeader();
  fetch(`${api}/disciplinas/${data.id}`, {method: 'PUT', headers: headers, body: JSON.stringify(data)})
    .then(res => res.json())
    .catch(err => err.json());
};

//DELETE
export const excluirAluno = id => {
  setHeader();
  fetch(`${api}/usuarios/${id}`, {method: 'DELETE', headers: headers})
    .then(res => res.json())
    .catch(err => err.json());
};

export const excluirDisciplina = id => {
  setHeader();
  fetch(`${api}/disciplinas/${id}`, {method: 'DELETE', headers: headers})
    .then(res => res.json())
    .catch(err => err.json());
};

export const excluirPresenca = (disciplina, aluno) => {
  setHeader();
  fetch(`${api}/frequencia/${disciplina}/${aluno}`, {method: 'DELETE', headers: headers})
    .then(res => res.json())
    .catch(err => err.json());
};
