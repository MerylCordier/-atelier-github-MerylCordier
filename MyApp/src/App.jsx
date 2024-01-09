import { useState, useEffect } from "react";
//Import de axios
import axios from "axios";
//Import de fausse donnée
//import repos from "./data/repos";
import githubLogo from "./assets/img/logo-github.png";

//Imports de composants
import Search from "./components/Search";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  //Init repos avec un tableau vide pour eviter l'erreur de undefined sur le repos.items.map
  const [repos, setRepos] = useState([]);
  const [total, setTotal] = useState(0);
  //Gestion du contenu du message, erreur ou pas, et affichage ou pas
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const displayMessage = (newMessage, isErrorMessage = false) => {
    //Indiquer si c'est une erreur ou non
    setHasError(isErrorMessage);
    //Indiquer le contenu textuel
    setMessage(newMessage);
    //Indiquer si on doit afficher le message ou pas
    setIsVisible(true);
  };

const reset=()=>{
  setRepos([])
  setTotal(0),
  setHasError(false)
  setPage(1)
}

  const fetchResults = async () => {
    setLoading(true);

    try {
      //Avec une ternaire, on verifie que query est vide, si oui on va chercher les top repos
      //Sinon on utilise nos termes de recherche
      const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&page=${page}&per_page=9`;

      //On fait un appel à l'API github
      const response = await axios.get(url);
      if (response.data.items.length > 0) {
        setTotal(response.data.total_count);
        //Ici on redéfinit la valeur de repos
        //Je prend tous les objet qu'il y aavais dans l'ancien repos (meme vide)
        //Et je les mets dans le nouveau tableau que je vient de créer
        //Et je rajoute aussi d'autres objet sortis du tableau de ma réponse

        //Pour faire court
        //setRepos===[anciensObjetDuTableauRepos + ObjetsDuTableauRecuAprèsLaRequete]
        setRepos([...repos, ...response.data.items]);
        const { total_count } = response.data;
        displayMessage(
          `La recherche a donné ${total_count} résultat${
            total_count > 1 ? "s" : ""
          }`,
        );
        //Appeler une fonction qui va:
        //-mettre une erreur a true ou false
        //-mettre un message à afficher
        //-Indiquer si le message est à afficher ou non
      } else {
        setRepos([]);
        displayMessage("Aucun repertoire trouvé", true);
      }
    } catch (error) {
      console.log(error);
      setRepos([]);
      displayMessage(
        "Une erreur est survenue lors de la requête, DOMMAGE!",
        true,
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query !== "") fetchResults();
  }, [query, page]);

  return (
    <div className='app'>
      <header className='logo'>
        <img alt='logo github' src={githubLogo} className='logo-img' />
      </header>
      <Search
        repos={repos}
        loading={loading}
        setQuery={setQuery}
        hasError={hasError}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        total={total}
        setPage={setPage}
        page={page}
        reset={reset}
      />
    </div>
  );
}

export default App;
