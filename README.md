# MyContacts 📇

Aplicação Full Stack desenvolvida para o gerenciamento de contatos, focada na prática de integração de ponta a ponta, padrões de projeto e deploy em ambiente real.

## 📝 Sobre o Projeto

O **MyContacts** é um projeto de portfólio que permite o gerenciamento completo de uma lista de contatos (CRUD). O objetivo central foi aprofundar os conhecimentos na comunicação entre as camadas de uma aplicação web, desde a interface até a persistência de dados, finalizando na orquestração de infraestrutura para o deploy.

---

## 🚀 Tecnologias Utilizadas

### **Frontend**
- **React**: Biblioteca principal para construção da interface.
- **Styled Components**: Estilização baseada em componentes.
- **Hooks Customizados:** Separação da lógica de negócio dos componentes visuais, facilitando a manutenção.
- **Feedback em Tempo Real:** Uso de notificações (Toasts) para ações de sucesso ou erro do usuário.
- **Design Responsivo:** Interface otimizada para diferentes tamanhos de tela usando Styled Components.

### **Backend**
- **Node**: Ambiente de execução Javascript no servidor.
- **Express**: Framework para construção de rotas e middlewares.
- **PostgreSQL**: Banco de dados relacional.
- **CORS:** Configuração de segurança para controle de acesso à API.

### **Infraestrutura e Deploy**
- **Docker**: Utilizado para a conteinerização do banco de dados PostgreSQL.
- **VPS Linux (Debian)**: Servidor virtual onde a aplicação está hospedada.
- **Nginx**: Configurado como servidor web e Proxy Reverso para gerenciar as requisições.

---

## 🏗️ Padrões de Projeto e Arquitetura

Para garantir uma aplicação organizada e escalável, foram aplicados os seguintes conceitos:

- **Repository Pattern**: Camada responsável exclusivamente pelo acesso e manipulação dos dados, isolando a lógica de banco de dados do restante da aplicação.
- **Controller Pattern**: Responsável por receber as requisições, validar entradas e retornar as respostas ao cliente.
- **Singleton Pattern**: Implementação de classes para Repositories e Controllers garantindo uma única instância por serviço, otimizando o consumo de recursos da API.
- **Clean Architecture**: Separação clara de responsabilidades entre as camadas de rotas, lógica de negócio e infraestrutura.

