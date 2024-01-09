/* eslint-disable react/prop-types */
//Import de composant
import RepoResult from "./RepoResult";
//Import d'élément css avec semantic-ui
import { Card } from "semantic-ui-react";

const ReposResults = ({ repos }) => {
  console.log(repos);
  return (
    <Card.Group itemsPerRow={3} stackable>
        {/* Pour afficher que les 9 premiers=> repos.slice(0,9).map ... */}
      {repos.map((repo) => {
        //const repo = {id:1234,name:"React-modele"}

        return <RepoResult key={repo.id} {...repo} />;
      })}
    </Card.Group>
  );
};

export default ReposResults;
