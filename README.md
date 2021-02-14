Esta é uma aplicação desenvolvida para realizar o teste para vaga de estágio na VegaTech

Utilizei o template do próprio Visual Studio utilizando .NET Core para backend com ReactJS para frontend.
Os Models e páginas foram criados por mim para atender os pedidos do teste, mas a estrutura e interface faz parte do Template. Controllers gerados pelo Visual Studio.
Utilizado wampserver para hospedagem de banco de dados MySQL local. Foi incluso um arquivo com os comandos para criação do banco de dados.

Não consegui completar todos os requerimentos, mas achei melhor entregar o projeto incompleto do que não responder. 
A estrutura das páginas e dos Controllers está pronta, além do banco de dados em si. Porém não executei a conexão com o banco de dados, o cadastro em si não está funcionando.
Tive dificuldade em aprender as tecnologias, entendo que isso não atende o básico pedido pelo teste, mas ainda preferi entregar desta forma.

Segue abaixo uma breve explicação do que entendi sobre a lógica do teste mas não consegui implementar por falta de conhecimento da tecnologia e suas sintaxes: 
O QRCode não é um campo na tabela em si, mas sim uma variável da aplicação que deve procurar o CNPJ, CEP e Data de Cadastro no banco de dados e retornar através de uma função. 
Os caracteres "%" fazem parte da validação da Form, mas não devem ser registrados no banco de dados em si.
Quando o usuário seleciona o ID do Fornecedor, deveria ser chamada a função mencionada préviamente, para procurar os dados relevantes no banco de dados e mostrar na página.

Muito obrigado pela atenção e oportunidade!
