# Landing Page de Cursos UANE

Este projeto contém uma landing page responsiva desenvolvida em React para exibir os cursos da UANE, consumindo dados de uma API PHP.

## Estrutura

- `/frontend`: Aplicação React (responsiva)
- `/backend`: API PHP que retorna os dados dos cursos em JSON
- `/docs`: Documentação do projeto

## Como rodar

### Backend (API PHP)

1. Entre na pasta `/backend`.
2. Execute o servidor embutido do PHP:
   ```powershell
   php -S localhost:8000
   ```
3. Acesse `http://localhost:8000/cursos.php` para ver os dados dos cursos.

### Frontend (React)

1. Entre na pasta `/frontend`.
2. Instale as dependências:
   ```powershell
   npm install
   ```
3. Inicie o projeto:
   ```powershell
   npm start
   ```
4. O frontend irá consumir a API PHP e exibir os cursos dinamicamente.

## Documentação

Consulte a pasta `/docs` para detalhes técnicos e instruções adicionais.
