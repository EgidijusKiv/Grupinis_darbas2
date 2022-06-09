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
  createMembershipsList(json);
}
fetchMemberships();

function createMembershipsList(objects) {
  objects.forEach((element) => {
    const membershipName = element.name;
    console.log(membershipName);

    const main = document.getElementById('memebership');
    const option = document.createElement('option');

    option.value = membershipName; // element._id.
    main.appendChild(option).innerText = membershipName; // option.text = element.name
  });
}
