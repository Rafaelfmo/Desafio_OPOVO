# Documentação Técnica

Este documento detalha as principais decisões técnicas e arquitetura do projeto.

## Estrutura do Projeto

- `/frontend`: Aplicação React, responsiva, com componentes modulares e hooks
- `/backend`: API PHP simples, simulando um backend REST
- `/docs`: Documentação complementar (guia do usuário e técnico)

## Frontend

- React com hooks (`useState`, `useEffect`, `useParams`, etc)
- Estilização mobile first, CSS modularizado por sessão
- Navegação por React Router, rotas dinâmicas para cada curso
- Carrosséis customizados para cursos e depoimentos
- Scroll suave entre seções via navbar

## Backend

- PHP simples, único arquivo (`cursos.php`)
- Dados dos cursos em array estático, retornando JSON
- Suporte a CORS para integração com frontend
- Busca dinâmica de curso por id via parâmetro GET

## Decisões de Design

- Mobile first para garantir acessibilidade e responsividade
- Paleta institucional UANE para identidade visual
- Separação clara entre frontend e backend
- Estrutura de pastas pensada para fácil manutenção

## Sugestões de Evolução

- Adicionar banco de dados para persistência dos cursos
- Separar backend em múltiplos arquivos (rotas, modelos, controllers)
- Implementar autenticação e painel administrativo
- Adicionar testes automatizados
- Melhorar acessibilidade e usabilidade

---

Para detalhes de uso, consulte o guia do usuário ou README principal.
