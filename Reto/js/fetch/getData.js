const getData = () => {
  return fetch('http://localhost:3000/video')
    .then((response) => response.json())
    .then((data) => data);
};

export default getData;
