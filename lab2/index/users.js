class User {
  constructor(
    firstName,
    lastName,
    schoolName,
    address,
    city,
    state,
    zipcode,
    schoolPosition,
    email,
    dataAttending,
    container,
    callback
  ) {
    index++;
    this.id = firstName + index;
    this.firstName = firstName;
    this.lastName = lastName;
    this.schoolName = schoolName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.schoolPosition = schoolPosition;
    this.email = email;
    this.dataAttending = dataAttending
    this.callback = callback;  
    this.interface = getUserInterface(
      this.firstName,
      this.lastName,
      this.schoolName,
      this.address,
      this.city,
      this.state,
      this.zipcode,
      this.schoolPosition,
      this.email,
      this.dataAttending
    );
    this.render(container);
    this.button = document.getElementById(this.id).querySelector("button");
    this.button.addEventListener('click', this.delete.bind(this));
  
  }


  delete() {
    if (this.callback(this.id)) {
      container.removeChild(this.elem)
      alert('Delete')
    }
  }

  render(container) {
    this.elem = document.createElement("div");
    this.elem.id = this.id;
    this.elem.innerHTML = this.interface;
    container.appendChild(this.elem);
 }
}

let index = 0;
