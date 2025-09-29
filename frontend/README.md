# Landing Page de Cursos UANE

> Projeto institucional responsivo para divulgação de cursos da UANE, com frontend React e backend PHP simples.

## Instalação e Execução

### Backend (API PHP)

1. Acesse a pasta `/backend`.
2. Execute o servidor embutido do PHP:
   ```powershell
   php -S localhost:8000
   ```
3. Acesse `http://localhost:8000/cursos.php` para ver os dados dos cursos.

### Frontend (React)

1. Acesse a pasta `/frontend`.
2. Instale as dependências:
   ```powershell
   npm install
   ```
3. Inicie o projeto:
   ```powershell
   npm start
   ```
4. O frontend irá consumir a API PHP e exibir os cursos dinamicamente.

## Decisões Técnicas

- **Frontend:**

  - React com componentes funcionais e hooks (`useState`, `useEffect`, `useParams`, etc).
  - Estilização mobile first, com CSS modularizado por sessão e breakpoints institucionais.
  - Navegação por React Router, rotas dinâmicas para cada curso (`/curso/:id`).
  - Carrosséis customizados para cursos e depoimentos, sem dependências externas.
  - Scroll suave entre seções via navbar, com gerenciamento de estado para navegação.

- **Backend:**

  - PHP simples, apenas um arquivo (`cursos.php`) simulando uma API REST.
  - Dados dos cursos em array estático, retornando JSON.
  - Suporte a CORS para integração com frontend local.
  - Busca dinâmica de curso por id via parâmetro GET.

- **Responsividade:**

  - Layout adaptado para mobile, tablet e desktop.
  - Componentes e grids ajustados para diferentes tamanhos de tela.

- **Gerenciamento de Estado:**

  - Uso de `useState` para dados dinâmicos, navegação de carrossel, curso selecionado, etc.
  - `useEffect` para buscar dados da API e atualizar interface.

- **Hooks:**
  - Utilização de hooks do React para estado, efeitos, navegação e parâmetros de rota.

## Estrutura

- `/frontend`: Aplicação React (responsiva)
- `/backend`: API PHP que retorna os dados dos cursos em JSON
- `/docs`: Documentação do projeto

## Observações

- O backend é estático, ideal para prototipação ou sites institucionais simples.
- Para projetos maiores, recomenda-se evoluir a estrutura do backend.
- O frontend pode ser facilmente expandido para novas sessões ou integrações.

---

Projeto desenvolvido por [Rafaelfmo](https://github.com/Rafaelfmo) para avaliação técnica.
