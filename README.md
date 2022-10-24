# Insert generator

<p align="center">
    <img alt="Badge indicando que o projeto foi criado em julho de 2022" src="https://img.shields.io/badge/Data%20de%20cria%C3%A7%C3%A3o-Outubro%2F2022-blue">
    <img alt="Badge indicando que o status do projeto é 'em atualização'" src="https://img.shields.io/badge/Status-Concluído-yellow">
</p>

<p align="center">
    • <a href="#descricao">Descrição</a>
    • <a href="#funcionalidades">Funcionalidades</a>
    • <a href="#tecnologias">Tecnologias</a>
    • <a href="#Desenvolvedora">Desenvolvedora</a>
</p>


<h2 id="descricao">:pencil2: Descrição</h2>

### O que faz?

O Insert Generator é um site que recebe o nome dos campos de uma tabela numa base de dados e produz comandos DML insert com valores aleatórios de acordo com o tipo de dado em cada campo.

### Qual o objetivo?

O intuito do projeto é facilitar o povoamento das tabelas de um banco de dados em produção, permitindo que a obtenção dos dados para essas inserções não precisem ser realizadas de forma manual e já sejam dispostos num comando insert.

### Como a ideia surgiu?
Enquanto praticava comandos DML no postgreSQL, concluí que pensar no que deveria inserir em cada registro era cansativo e despendioso. Além disso, ainda que obtivesse dados de forma automatizada em algum site, teria que adaptá-los em um insert.


<h2 id="funcionalidades">:hammer: Funcionalidades</h2>
<center>
    <img src="src/README/funcionalidades.gif">
</center>

- Recebe a quantidade de tuplas de dados que deverão estar no insert.
- Recebe o nome de uma tabela e de seus campos.
- Recebe o tipo de dado de cada campo.
- Faz requisições para a API <a href="https://fakejson.com/">FakeJSON</a> com base no tipo de dado de cada campo.
- Retorna um comando insert com o nome da tabela, dos campos e com uma ou mais tupla de valores, esses valores são obtidos por meio das requisições para a API.


<h2 id="tecnologias">:computer: Tecnologias</h2>
<p align="center">
    <a href="https://www.w3.org/html/">
    <img alt="Logo do HTML" src="https://img.icons8.com/color/48/000000/html-5--v1.png">
  </a>
  <a href="https://www.w3.org/Style/CSS/Overview.en.html">
    <img alt="Logo do CSS" src="https://img.icons8.com/color/48/000000/css3.png">
  </a>
  <a href="https://www.javascript.com/">
    <img alt="Logo do javascript" src="https://img.icons8.com/color/48/000000/javascript--v1.png">
  </a>
  <a href="https://code.visualstudio.com/">
    <img alt="Logo do VS code" src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png">
  </a>
</p>

<h2 id="Desenvolvedora">:woman: Desenvolvedora</h2>

<p align="center">
  <a href="https://github.com/Danielle-Luz">
    <img width="120px" src="https://avatars.githubusercontent.com/u/99164019?v=4" alt="foto de uma mulher parda com o cabelo castanho, sorrindo levemente na frente de um fundo verde com bits">
  </a>
</p>

<p align="center">
Danielle da Luz Nascimento
</p>

<p align="center">
<a href="https://www.linkedin.com/in/danielle-da-luz-nascimento/">@Linkedin</a>
</p>
