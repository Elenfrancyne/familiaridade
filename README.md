O projeto “Familiaridade” é um projeto  que tem como objetivo acolher familias inteiras, que possuem carencias financeiras , e ressocializa-las, de modo a sentirem que pertencem a sociedade e são dignas garantindo que os Direiros Humanos básicos sejam respeitados. Foi dividido em duas vertentes, de um lado  teremos o cadastro da familia carente, e do outro o padrinho. A familia será cadastrada na API com informações básicas, as dificuldades que estão passando ee em qual categoria precisam de ajuda  e os Padrinhos também com as informações básicas e qual o tipo de ajuda que poderá fornecer á família apadrinhada.
Assim atraves das duas listas, sera criado os bancos de dados, com o intuito de ligar um padrinho á familia conforme sua necessidade
Iniciei o meu projeto, criando as pastas e arquivos necessarios para montar a estrutura para criar minhas estruras em MVC e com o CRUD.

<h2 align="center">
    <br>
    <p align="center">Projeto Final {reprograma}<p>
    <p align="center">Familiaridade<p>
    <p align="center">Caridade em Familia<p>
</h2>
<p align="center">
<img src="./assepts/familiaridade-logo.jpg" width="50%" height="50%"/>
</p>
<br>

## 📚 Descrição da API

<br>

<p align="justify">
O projeto “Familiaridade” é um projeto  que tem como objetivo acolher familias inteiras, que possuem carencias financeiras , e ressocializa-las, de modo a sentirem que pertencem a sociedade e são dignas garantindo que os Direiros Humanos básicos sejam respeitados. Foi dividido em duas vertentes, de um lado  teremos o cadastro da familia carente, e do outro o padrinho. A familia será cadastrada na API com informações básicas, as dificuldades que estão passando ee em qual categoria precisam de ajuda  e os Padrinhos também com as informações básicas e qual o tipo de ajuda que poderá fornecer á família apadrinhada.
Assim atraves das duas listas, sera criado os bancos de dados, com o intuito de ligar um padrinho á familia conforme sua necessidade.
  
<br>


## ⚙️ Funcionalidades

- Cadastro de familias que possuemdificuldades financiras e carências sociais, tais como "nome em SPC, Nececidade de Cestas Básicas, Medicamentos, Escolas, Ajuda de Custo. 
- Cadastro de Padrinhos, que são colaboradores para ajudar uma familia apadrinhando conforme a dificuldade da mesma.
- Listagem das Familias necessitadas.
- Listagem dos Padrinhos dispostos a ajudar.

<br>

## 📚 Aprendizados

Desenvolvimento de uma API Restful fundamentada no CRUD (Create, Read, Update, Delete) com integração com o banco de dados MongoDB, e GitHub, uso do terminal GItBash, com enfase em seus comandos. Criação de rotas públicas. Realização de Delay no Heroku e Testes no Postman

<br>

## 🛠️ Tecnologias

<br>

Tecnologias utilizadas para desenvolvimento do projeto:

- [Git/GitHub](https://github.com/)
- [Heroku](https://dashboard.heroku.com/apps)
- [JavaScript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)
- [VScode](https://code.visualstudio.com/)  

### Pacotes Utilizados 


- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv-safe](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

<br>

## 📁 Arquitetura MVC 

```
 📁 faniliaridade
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 familyController.js
   |         |- 📑 parentsController.js
   |
   |    |- 📁 database
   |         |- 📑 MongoConfig.js
   |
   |    |- 📁 models
   |         |- 📑 familySchema.js
   |         |- 📑 parentsSchema.js
   |
   |    |- 📁 routes
   |         |- 📑 familyRoutes.js 
   |         |- 📑 parentsRoutes.js
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 LICENSE
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js

```
<br>

## 🔃 Rotas

* local: http://localhost:9060

* Heroku:  (https://familiaridade.herokuapp.com)
* Rota Listar Familias: (https://familiaridade.herokuapp.com/family/listen)
* Rota Listar Padrinhos: (https://familiaridade.herokuapp.com/parents/listen)

    * Os endpoints da API podem ser testados através do [Postman](https://www.postman.com/).
<br>

## 🔃 Rota Index 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:9060/`     |  Apresentação (Index)    |             |

<br>      |

<br>

## 🔃 Rotas de Busca de Familias e Padrinhos, por ID e Geral:

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/family/listen`         | Retorna todas as famílias               |
| GET          | `/family/listen/:id`     | Filtra uma família por ID    |
| GET         | `/parents/listen`   | Retorna todos os Padrinhos cadastrados
| GET          | `/postos/listen/:id`     |Filtra um Padrinho por ID        |           

<br>

## 🔃 Rotas de Cadastro Atualização e Delete de Familias e Padrinhos:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| POST         | `/family/register`    | Cadastra uma nova Familia                       |
| PUT          | `/family/update/:id`          | Atualiza informações de uma família                    
| DELETE       | `/family/delete:id`          | Remove uma familia em específico                        |
| POST         |`/parents/register`    | Cadastra um novo Padrinho                       |
| PUT          | `/parents/update/:id`          | Atualiza informações dos Padrinhos                    
| DELETE       | `/parents/delete:id`          | Remove um padrinho em específico                        |

<br>

## ✅ Dados para Collection Familias

- id: autogerado e obrigatório
- nameOwner: texto e obrigatório 
- contact: texto e obrigatório
- adress: texto e obrigatório
- citty: texto 
- numberOfMembers: número 
- minor: number  
- nameOfMembers: array 
- averageWage:: texto e obrigatório 
- CPF: texto e obrigatório  e unico
- lack: array e obrigatório 
- criadoEm: data gerada automaticamente

<br>

## ✅ API deve retornar seguinte JSON:

```jsx

{
      "message": "Familia cadastrada com sucesso!",
    "saveFamily": {
        "nameOwner": "Jocemara Farias",
        "contact": "(43) 1313-1120",
        "adress": "Rua Da Onça ,27",
        "citty": "Ibiporã ",
        "nameOfMembers": [
            "Jocemara ",
            "Juliana"
        ],
        "averageWage": "R$375,00",
        "CPF": "232625247",
        "lack": [
            "Aluguel",
            "Cesta Básica",
            "Creche"
        ],
        "createdAt": null,
        "_id": "62e1974fa0c4596f9ba865c5",
        "__v": 0
    }
}
    
```
 <br>

  ## ✅ Dados para Collection Padrinhos

- id: autogerado e obrigatório
- name: texto e obrigatório 
- contact: texto e obrigatório
- cpfOuCnpj: texto e obrigatório  
- email: texto e obrigatório
- kindOfHelp: array e obrigatótrio
- criadoEm: data gerada automaticamente

<br>

## ✅ API deve retornar seguinte JSON:
```jsx
{
  {
    "message": " Lista de Padrinhos cadastrados",
    "listParents":[{"_id":"62e163ff9ae57b501301ec2e",
    "name":"Igreja do Sagrado Coração",
    "contact":"3333-3333",
    "adress":"Rua da Fé, nº 85",
    "email":"sagradocorcacao@gmail.com",
    "kindOfHelp":["Cesta básica","Remédios"],
    "createdAt":"2022-07-27T16:12:41.018Z",
    "__v":0}]
    }
    }
    

```
<br>

## 🚧 Implementações Futuras

<br>

* Desenvolvimento de login, token e autenticação 
* Desenvolvimento Front-end da aplicação.
* Mecanismo de busca dos possíveis padrinhos por proximidade da familia.
* Mecanismo deintegração do API com mídias sociais, buscando novos cadastros. 
* Gerenciamento de autorização do sistema.


<br>


## 👨‍💻 Autora

## [Elen Francyne H. dos Santos](https://github.com/Elenfrancyne)
## [LinkedIn](https://www.linkedin.com/in/elen-francyne-henriques-dos-santos-03705247/) 

<br>
 

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).

