const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./src/database/database.db')
module.exports = db
/* db.serialize(()=>{
  db.run(`
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        adress TEXT,
        adress2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
      );
  `)
  const query = `
    INSERT INTO places (
      image,
      name,
      adress,
      adress2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);`

    const values = [
      "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "Colectoria",
      "Guilherme Gemballa, Jardim América",
      "n 260",
      "Santa Catarina",
      "Rio do Sul",
      "Resíduso Eletronicos, Lampadas"
    ]
    function afterInsertData(err) {
      if(err){
        return console.log(err)
      }
      console.log("Cadastrado com sucesso")
      console.log(this)
    }
  db.run(query, values,afterInsertData )

  db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    if(err){
      return console.log(err)
    }
    console.log('Registro deletado com sucesso')
  })
  db.all(`SELECT * FROM places`, function(err,rows) {
    if(err){
      return console.log(err)
    }
    console.log('aqui estao seus registos: ')
    console.log(rows)
  })
}) */