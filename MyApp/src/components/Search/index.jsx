/* eslint-disable react/prop-types */
import ReposResults from "../ReposResults";
import RepoLoading from "../ReposResults/RepoLoading";
import SearchBar from "./SearchBar";
import Message from "../Message";
import MoreResults from "../MoreResults";

const Search = ({
  repos,
  loading,
  setQuery,
  hasError,
  isVisible,
  message,
  setIsVisible,
  total,
  setPage,
  page,
  reset,
}) => {
  return (
    <>
      <SearchBar loading={loading} setQuery={setQuery} reset={reset} />
      {/* Affichage d'un message si erreur ou si resultat */}
      {/* Si résultat, on veut afficher le nombre de repos trouvés */}
      {isVisible && (
        <Message
          hasError={hasError}
          message={message}
          setIsVisible={setIsVisible}
        />
      )}
      {/* Quand loading vaut true, RepoLoading est affiché */}
      {loading && <RepoLoading />}
      <ReposResults repos={repos} />
      {total !== repos.length && <MoreResults setPage={setPage} page={page} />}
    </>
  );
};
export default Search;
