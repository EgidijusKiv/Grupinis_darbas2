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
  // console.log(json);
  createCards(json);
}
fetchMembership();

function createCards(objects) {
  console.log(objects);
  objects.forEach((element) => {
    const {
      _id, price, name, description,
    } = element;
    const main = document.querySelector('main');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const span = document.createElement('span');
    const hr = document.createElement('hr');
    const button = document.createElement('button');

    div.className = 'member_card';
    span.className = 'how_long';
    button.className = 'delete_member';
    button.value = _id;

    main.appendChild(div);
    div.appendChild(h2).innerText = `$${price} ${name}`;
    div.appendChild(span).innerText = description;
    div.appendChild(hr);
    div.appendChild(button).innerText = 'Delete';
  });
}

document.querySelectorAll('.delete_member').forEach((el) => {
  el.addEventListener('click', () => {
    console.log(el);
  });
});
