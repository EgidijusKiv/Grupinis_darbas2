document.querySelector('.cancel_button').addEventListener('click', () => {
  window.location.replace('http://127.0.0.1:9000');
});
let membershipData = {};
document.querySelector('.new_membership').addEventListener('click', (e) => {
  e.preventDefault();
  const packageName = document.getElementById('name').value;
  const packagePrice = document.getElementById('price').value;
  const packageDescription = document.querySelector('textarea').value;

  membershipData = {
    name: packageName,
    price: Number(packagePrice),
    description: packageDescription,
  };
  fetchNewMembership();
});

async function fetchNewMembership() {
  const result = await fetch(
    'http://127.0.0.1:9000/memberships',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(membershipData),
    },
  );
  window.location.replace('http://127.0.0.1:9000');
  return result.json();
}
