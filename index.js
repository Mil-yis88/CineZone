

 app.get("/movies", (req, res) => {
   
    database
    .query("SELECT * FROM movies")
    .then((results) => {
        console.log(results);
        const [movies] = results;
        res.json(movies);
    })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500)
  });
 });

  app.get("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convertit l'ID en nombre

  if(isNaN(id)) {
    res.json(400)
  }

  database
  .query("SELECT * FROM movie WHERE id=?", [id])
  .then((results) => {
    console.log(results);
    const [movies] = results;
     if (movies.length > 0) {
    res.json(movies); // Retourne l'movie trouvé
  } else {
    res.sendStatus(404); // movie non trouvé
  }
  })
    .catch((err) => {
        console.error(err);
        res.sendStatus(500);
    })
 });
  


app.post ("/movies/",(req, res) => {
  // Vérification si le body est valide
  if (req.body == undefined) {
    return res.sendStatus(400); // Erreur 400 si body invalide
  }
  // Récupère les données du POST
  const movie = req.body;

  movie.push(movie); // Ajoute l'movie au tableau
  res.status(201).json({ message: "Ajouté", movie: movie }); // Confirme l'ajout
});

  app.put("/movies/:id", (req, res) => {
  // Vérification si le body est valide
  if (req.body == undefined) {
    return res.sendStatus(400); // Erreur 400 si body invalide
  }
  const id = parseInt(req.params.id); // Convertit l'ID en nombre
  // Trouve l'index de l'movie
  const index = movies.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.sendStatus(404); // movie non trouvé
  }
  movies[index] = req.body; // Remplace l'movie
  res.json({ message: "Modifié", movie: req.body }); // Confirme la modification
});

 app.delete ("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convertit l'ID en nombre
  // Trouve l'index de l'movie
  const index = movies.findIndex((t) => movies.id === id);
  if (index === -1) {
    return res.sendStatus(404); // movie non trouvé
  }
  movies.splice(index, 1); // Supprime l'movie du tableau
  res.json({ message: `movie #${id} supprimé` }); // Confirme la suppression
});


export default movie;