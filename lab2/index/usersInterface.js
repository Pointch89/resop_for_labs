function getUserInterface(
  firstName,
  lastName,
  schoolName,
  address,
  city,
  state,
  zipcode,
  schoolPosition,
  email,
  dataAttending
) 
{
  return `
        <div class="information"><p>First Name: ${firstName}</p></div>
        <div class="information"><p>Last Name: ${lastName}</p></div>
        <div class="information"><p>School Name: ${schoolName}</p></div>
        <div class="information"><p>Address: ${address}</p></div>
        <div class="information"><p>City: ${city}</p></div>
        <div class="information"><p>State: ${state}</p></div>
        <div class="information"><p>Zipcode: ${zipcode}</p></div>
        <div class="information"><p>School Position: ${schoolPosition}</p></div>
        <div class="information"><p>Email: ${email}</p></div>
        <div class="information"><p>Data attending: ${dataAttending}</p></div>
        <button>Delete</button>
        `;
}
