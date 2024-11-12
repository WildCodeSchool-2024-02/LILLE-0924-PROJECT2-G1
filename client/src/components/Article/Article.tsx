import "./Article.css";
function Article() {
  return (
    <>
     

      <section className="image-resto-plat">
        <img
          className="img-plat"
          src="/public/images/plat.png"
          alt="photo-plat"
        />
        <img
          className="img-resto"
          src="/public/images/resto.png"
          alt="photo-restau"
        />
      </section>

      <div className="reservation">
        <button type="button">réservation</button>
      </div>
      <div className="info-resto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora
          esse doloribus eaque veniam, pariatur quam architecto at quaerat ipsa,
          inventore dolor deleniti nam! Beatae doloribus dicta in veniam iste?
        </p>
      </div>

      <div className="fav-enr">
        <button className="button-enr" type="button">
          deja fait
        </button>
        <button className="button-fav" type="button">
          favoris
        </button>
      </div>

      <section className="avis">
        <h1>Avis google</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          asperiores nihil illum deleniti similique nam, neque eum sit vel
          facilis quod laboriosam obcaecati mollitia sint explicabo sunt,
          incidunt quas laudantium.
        </p>
      </section>

      <section className="google-map">
        <h1>Google map</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          quia a repellendus exercitationem labore, modi harum sunt soluta
          quisquam assumenda neque atque cumque quas consequuntur repellat
          ratione. Quaerat, corrupti tenetur.
        </p>
      </section>

      <footer>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        deleniti ab delectus quisquam accusamus quia alias est optio obcaecati,
        illo dolor quis eligendi, at, iste nemo natus nam. Exercitationem, sunt.
      </footer>
    </>
  );
}

export default Article;
