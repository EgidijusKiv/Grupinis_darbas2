async function fetchMembership() {
  const result = await fetch(
    'http://127.0.0.1:9000/memberships',
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  const json = await result.json();
  createCards(json);
}

fetchMembership();

function createCards(objects) {
  console.log(objects);
  const h1 = document.querySelector('h1');
  h1.innerText = objects[0].name;
}
