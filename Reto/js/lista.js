import getData from './fetch/getData.js';

const main = document.getElementById('container');

const printVideo = async () => {
  const allVideos = await getData();
  const article = document.createElement('div');
  console.log(allVideos);
  article.innerHTML = allVideos
    .map(
      (el) => ` 
        <div class="video">
          <div class="content-video">
            <a href="editar.html"><i class="far fa-edit"></i></a>
            <iframe
            id="${el.id}"
            src="${el.url}"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
            <button class="trash"><i id="borrar" class="fas fa-trash-alt"></i></button>
          </div>
          <h4>${el.title}</h4>
          <small>${el.views} visualizaciones</small>
          <p>
            ${el.description}
          </p>
          <button>Ver Detalle</button>
        </div>
      `
    )
    .join('');

  article.classList.add('article');
  container.appendChild(article);

  const allTrash = document.querySelectorAll('.trash');
  console.log(allTrash);
  const allcards = document.querySelectorAll('.video');

  allTrash.forEach((trashbtn, key) => {
    trashbtn.addEventListener('click', (event) => {
      event.preventDefault();
      const cardKey = allcards[key];
      console.log(cardKey);
      article.removeChild(cardKey);
    });
  });
};

window.addEventListener('load', printVideo);
