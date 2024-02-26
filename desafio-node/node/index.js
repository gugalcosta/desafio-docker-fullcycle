const express = require("express");
const mysql = require("mysql2/promise");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 3000;
const config = {
  host: "mysql",
  user: "root",
  password: "root",
  database: "nodedb",
};

async function main() {
  const connection = await mysql.createConnection(config);

  createTable(connection);

  insertPeople(connection);

  const results = await selectPeople(connection);

  connection.end();

  listHTML = buildList(results);

  const response = "<h1>Full Cycle Rocks!</h1>" + listHTML;

  app.get("/", (req, res) => {
    res.send(response);
  });

  app.listen(port, () => {
    console.log(`Running in port ${port}`);
  });
}

main();

function createTable(connection) {
  try {
    const queryCreate =
      "CREATE TABLE IF NOT EXISTS people (id int auto_increment NOT NULL, name VARCHAR(255), primary key(id))";

    connection.query(queryCreate);
  } catch (error) {
    console.log(error);
  }
}

function insertPeople(connection) {
  try {
    const name = faker.person.firstName();

    const query = `INSERT INTO people (name) values ('${name}')`;

    connection.query(query);
  } catch (error) {
    console.log(error);
  }
}

async function selectPeople(connection) {
  const query = "SELECT id, name from people;";

  try {
    const [rows] = await connection.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

function buildList(results) {
  const tableHeader = `<table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>`;

  const tableRows = results
    .map((person) => `<tr><td>${person.id}</td><td>${person.name}</td></tr>`)
    .join("");

  return tableHeader + tableRows + "</table>";
}
