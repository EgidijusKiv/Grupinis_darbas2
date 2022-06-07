document.getElementById('cancel').addEventListener('click', () => {
  window.location.replace('http://127.0.0.1:9000/users/users.html');
});

let userData = {};
document.getElementById('newuser').addEventListener('click', (e) => {
  e.preventDefault();
  const userName = document.getElementById('fname').value;
  const userSurname = document.getElementById('lname').value;
  const userEmail = document.getElementById('eaddress').value;
  const usermembership = document.getElementById('memebership').value;

  userData = {
    name: userName,
    surname: userSurname,
    email: userEmail,
    service_id: usermembership,
  };
  fetchNewUser();
});

async function fetchNewUser() {
  const result = await fetch(
    'http://127.0.0.1:9000/users',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    },
  );
  window.location.replace('http://127.0.0.1:9000/users/users.html');
  return result.json();
}

async function fetchMemberships() {
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
  console.log(json);
  // createMembershipsList(json)
}
fetchMemberships();

function createMembershipsList(objects) {
  objects.forEach((element) => {
    const membershipName = element.name;
    // const {
    //   _id, price, name, description,
    // } = element;
    // const main = document.querySelector('main');
    // const div = document.createElement('div');
    // const h2 = document.createElement('h2');
    // const span = document.createElement('span');
    // const hr = document.createElement('hr');
    // const button = document.createElement('button');

    // div.className = 'member_card';
    // span.className = 'how_long';
    // button.className = 'delete_member';
    // button.value = _id;

    // main.appendChild(div);
    // div.appendChild(h2).innerText = `$${price} ${name}`;
    // div.appendChild(span).innerText = description;
    // div.appendChild(hr);
    // div.appendChild(button).innerText = 'Delete';
  });
}
