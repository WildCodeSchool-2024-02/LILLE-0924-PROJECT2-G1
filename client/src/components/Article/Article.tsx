function Article() {
  return (
    <>
      <header>
        <img
          src="/public/images/DALL·E-2024-11-05-11.41.34-A-logo-for-a-restaurant-named-_Flandresto_-with-a-minimalistic-design.png"
          alt="logo"
        />
        <section>
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Recherche"
          />
        </section>
      </header>
      <main>
        <section>
          <img
            src="/public/images/photoplatrestautest.png"
            alt="photo-plat"
          />
          <img
            src="/public/images/photorestautest.png"
            alt="photo-restau"
          />
        </section>

        <button type="button">réservation</button>

        <div>
          <button type="button">deja fait</button>
          <button type="button">favoris</button>
        </div>

        <section>
          <h1>Avis google</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            asperiores nihil illum deleniti similique nam, neque eum sit vel
            facilis quod laboriosam obcaecati mollitia sint explicabo sunt,
            incidunt quas laudantium.
          </p>
        </section>

        <section>
          <h1>Google map</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            quia a repellendus exercitationem labore, modi harum sunt soluta
            quisquam assumenda neque atque cumque quas consequuntur repellat
            ratione. Quaerat, corrupti tenetur.
          </p>
        </section>
      </main>
      <footer>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        deleniti ab delectus quisquam accusamus quia alias est optio obcaecati,
        illo dolor quis eligendi, at, iste nemo natus nam. Exercitationem, sunt.
      </footer>
    </>
  );
}

export default Article;
