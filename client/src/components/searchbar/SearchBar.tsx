import "./Searchbar.css";
interface SearchbarProps {
  search: string;
  setSearch: (value: string) => void;
}

function Searchbar({ search, setSearch }: SearchbarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <form className="searchbar">
        <input
          id="character"
          name="character"
          type="text"
          value={search}
          onChange={(event) => handleChange(event)}
          placeholder="Nom du restaurant ou type de cuisine"
          className="input"
        />
      </form>
    </>
  );
}
export default Searchbar;
