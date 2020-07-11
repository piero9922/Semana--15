const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const agregar = document.getElementById('agregar');
const str = document.getElementById('url');

agregar.addEventListener('click', (event) => {
  event.preventDefault();

  const urlValue = str.value;
  const res = urlValue.split('=');
  const embedUrl = 'https://www.youtube.com/embed/' + res[1];

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  // URLSearchParams() Crea y retorna un nuevo objeto

  const urlencoded = new URLSearchParams();
  urlencoded.append('title', titulo.value);
  urlencoded.append('url', embedUrl);
  urlencoded.append('description', descripcion.value);
  urlencoded.append('views', 0);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };
  fetch('http://localhost:3000/video', requestOptions)
    .then((response) => response.text())
    .then((results) => {
      console.log(results);
      location.href = 'lista.html';
    })
    .catch((error) => console.log('error', error));
});
