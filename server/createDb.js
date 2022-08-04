import db from './utils/db.ts';

// create user table
await db.queryObject(
  `CREATE TABLE IF NOT EXISTS users
  (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL
  )`
);

// create projects table
await db.queryObject(
  `CREATE TABLE IF NOT EXISTS projects
  (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    date TIMESTAMP default CURRENT_TIMESTAMP,
    delete_status VARCHAR(50),
    user_id INTEGER REFERENCES users(id) 
  )`
);

//create entries table
await db.queryObject(
  `CREATE TABLE IF NOT EXISTS elements
  (
    id INTEGER NOT NULL,
    element VARCHAR(100) NOT NULL,
    text VARCHAR(100),
    textAlign VARCHAR(100),
    textDecoration VARCHAR(100),
    backgroundColor VARCHAR(100),
    color VARCHAR(100),
    margin VARCHAR(100),
    width VARCHAR(100),
    height VARCHAR(100),  
    padding VARCHAR(100),
    fontsize VARCHAR(100),
    classname VARCHAR(100),
    project_id INTEGER REFERENCES projects(id)
  )`
);

