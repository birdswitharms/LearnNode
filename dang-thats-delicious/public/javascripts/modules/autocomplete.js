function autocomplete(input, latInput, lngInput) {
  if(!input) return; // skip if no address on the page
  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
    console.log(place);
  });
  // if someone hits enter on the address field, dont submit the form
  input.on('keydown', (e) => {
    if(e.keyCode === 13) e.preventDefault();
  })
}
export default autocomplete
