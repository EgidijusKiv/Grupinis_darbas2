const newMembershipSubmitData = document.getElementById("memberForm")
newMembershipSubmitData.addEventListener('submit', function(event) {
  event.preventDefault()
  const newMembership = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
  }
  newMembershipSubmitData.reset()
  
  return console.log(newMembership)
})

const newUserSubmitData = document.getElementById("userForm")
newUserSubmitData.addEventListener('submit', function(event) {
  event.preventDefault()
  const newUserData = {
    firstName: document.getElementById("fname").value,
    lastName: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    membership: document.getElementById("membership").value,
  }
  newUserSubmitData.reset()
  return console.log(newUserData)
})





