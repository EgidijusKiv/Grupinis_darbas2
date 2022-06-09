document.getElementById('memberships').addEventListener('click', () => {
  window.location.replace('http://127.0.0.1:9000');
});

document.getElementById('users').addEventListener('click', () => {
  window.location.replace('http://127.0.0.1:9000/users/users.html');
});

document.getElementById('add_user').addEventListener('click', () => {
  window.location.replace('http://127.0.0.1:9000/users/addusers.html');
});

async function fetchUsers() {
  const result = await fetch(
    'http://127.0.0.1:9000/users',
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  const json = await result.json();
  console.log(json);
  // console.log(json);
  createUserCards(json);
}

fetchUsers();

function createUserCards(objects) {
  // console.log(objects);
  objects.forEach((element) => {
    const {
      name, surname, email, service_id,
    } = element;

    const main = document.querySelector('.card-holder');
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const pEmail = document.createElement('p');
    const pMembership = document.createElement('p');
    const pIp = document.createElement('p');
    const createIP = `IP: 78.${new Date().getHours()}.${new Date().getSeconds()}.${new Date().getMinutes()}`;
    div.className = 'user_card card';

    main.appendChild(div);
    div.appendChild(h4).innerText = `${name} ${surname}`;
    div.appendChild(pEmail).innerText = `Email Address: ${email}`;
    div.appendChild(pMembership).innerText = `Membership: ${service_id}`;
    div.appendChild(pIp).innerText = createIP;
  });
}
