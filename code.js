var dexNumReg = getColumn("pokemonList", "Regdex");
var dexNumNat = getColumn("pokemonList", "Natdex");
var pokeName = getColumn("pokemonList", "Pokemon");
var type1 = getColumn("pokemonList", "Type");
var type2 = getColumn("pokemonList", "Type2");
var typeName = getColumn("typeColors", "Type");
var typeCode = getColumn("typeColors", "Hex Code");
var pkmnImgLink = getColumn("pokemonList", "PokemonImgLink");
var pokedexEntry = getColumn("pokemonList", "PokedexEntry");
var position = 0;


/* Changes the type color on the dexEntry page based on the type name */
function changeTypeColor(positionT) {
  for (var i = 0; i < typeName.length; i++) {
     if (type1[positionT] == typeName[i]) {
       setProperty("typeOne", "background-color", typeCode[i]);
     }
     
  }
  
  for (var n = 0; n < typeName.length; n++) {
     if (type2[positionT] == typeName[n]) {
       setProperty("typeTwo", "background-color", typeCode[n]);
     }
     
  }
}
/* Updates the dexEntry information based on the position in the data  */
function updateInfo(position) {
  setProperty("regdexNum", "text", dexNumReg[position]);
  setProperty("natdexNum", "text", dexNumNat[position]);
  setProperty("pokemonName", "text", pokeName[position]);
  setProperty("typeOne", "text", type1[position]);
  setProperty("typeTwo", "text", type2[position]);
  setImageURL("pokemonImg", pkmnImgLink[position]);
  setProperty("pokedexEntry", "text", pokedexEntry[position]);
}

/* Removes the secondary type element if its text is the same as the first type element */
function removeDuplicateType() {
  if (getText("typeOne") == getText("typeTwo")) {
    hideElement("typeTwo");
    setPosition("typeOne", 109, getYPosition("typeOne"));
    
  } else {
    showElement("typeTwo");
    setPosition("typeOne", 58, getYPosition("typeOne"));
  }
  
}

/* Returns the user to the home screen */
onEvent("homeButton", "click", function( ) {
  setScreen("homePage");
  position = 0;
});

/* Shows only the information of Pokemon introduced in Generation one */
onEvent("buttongenOne", "click", function( ) {
  setScreen("dexEntry");
  updateInfo(position);
  changeTypeColor(position);
  removeDuplicateType();
  
  if (position == 0) {
      hideElement("backButton");
  }
  
  if (position == pokeName.length - 1){
      hideElement("nextButton");
  }
  
});

onEvent("buttongenTwo", "click", function( ) {
  setScreen("dexEntry");
  updateInfo(151);
  changeTypeColor(151);
  removeDuplicateType();
  
  if (position == 0) {
      hideElement("backButton");
  }
  
  if (position == pokeName.length - 1){
      hideElement("nextButton");
  }
  
});

onEvent("buttongenThree", "click", function( ) {
  setScreen("dexEntry");
  updateInfo(251);
  changeTypeColor(251);
  removeDuplicateType();
  
  if (position == 0) {
      hideElement("backButton");
  }
  
  if (position == pokeName.length - 1){
      hideElement("nextButton");
  }
  
});

onEvent("buttongenFour", "click", function( ) {
  setScreen("dexEntry");
  updateInfo(386);
  changeTypeColor(386);
  removeDuplicateType();
  
  if (position == 0) {
      hideElement("backButton");
  }
  
  if (position == pokeName.length - 1){
      hideElement("nextButton");
  }
  
});

onEvent("buttongenFive", "click", function( ) {
  setScreen("dexEntry");
  updateInfo(493);
  changeTypeColor(493);
  removeDuplicateType();
  
  if (position == 0) {
      hideElement("backButton");
  }
  
  if (position == pokeName.length - 1){
      hideElement("nextButton");
  }
  
});

onEvent("buttongenSix", "click", function( ) {
  setScreen("dexEntry");
  updateInfo(649);
  changeTypeColor(649);
  removeDuplicateType();
  
  if (position == 0) {
      hideElement("backButton");
  }
  
  if (position == pokeName.length - 1){
      hideElement("nextButton");
  }
  
});

onEvent("buttongenSeven", "click", function( ) {
  setScreen("dexEntry");
  updateInfo(721);
  changeTypeColor(721);
  removeDuplicateType();
  
  if (position == 0) {
      hideElement("backButton");
  }
  
  if (position == pokeName.length - 1){
      hideElement("nextButton");
  }
  
});

onEvent("buttongenEight", "click", function( ) {
  setScreen("dexEntry");
  updateInfo(809);
  changeTypeColor(809);
  removeDuplicateType();
  
  if (position == 0) {
      hideElement("backButton");
  }
  
  if (position == pokeName.length - 1){
      hideElement("nextButton");
  }
  
});


/* Shows all pokedex entries from the beginning (Bulbasaur) */
onEvent("beginButton", "click", function( ) {
  setScreen("dexEntry");
  
  
  if (position == 0) {
      hideElement("backButton");
  }
  
  if (position == pokeName.length - 1){
      hideElement("nextButton");
  }
    
  updateInfo(position);
  
  changeTypeColor(position);
  
});


/* Code for next button. Changes the screen to information on the next Pokémon */
onEvent("nextButton", "click", function( ) {
  for (var i = 0; i < pokeName.length; i++) {
    if (getText("pokemonName") == pokeName[i]) {
      position = i;
    }
  }
  
  var posnext = position + 1;
    
  showElement("backButton");
      
    if (posnext == pokeName.length - 1) {
      hideElement("nextButton");
    } else {
      showElement("nextButton");
    }
  
  
  updateInfo(posnext);
  changeTypeColor(posnext);
  removeDuplicateType();
  
});

/* Code for back button. Changes the screen to information on the previous Pokémon */
onEvent("backButton", "click", function( ) {
  for (var i = 0; i < pokeName.length; i++) {
    if (getText("pokemonName") == pokeName[i]) {
      position = i;
    }
  }
  var posback = position - 1;
  
  showElement("nextButton");
    if (posback == 0) {
      hideElement("backButton");
    } else {
      showElement("backButton");
    }
  
  updateInfo(posback);
  changeTypeColor(posback);
  removeDuplicateType();
  
});

/* Gets the text from the "inputSearch" element, sets the screen to the "dexEntry" page and also updates
    all of the corresponding information when the search button is clicked */
onEvent("searchButton", "click", function( ) {
  for (var i = 0; i < pokeName.length; i++) {
    if (getText("inputSearch") == pokeName[i]) {
      position = i;
      setScreen("dexEntry");
    }
  }
  
    if (position == 0) {
      hideElement("backButton");
    }
    if (position == pokeName.length - 1){
      hideElement("nextButton");
    }
    
  updateInfo(position);
  
  changeTypeColor(position);
  
  removeDuplicateType();
  
  
});

/* Randomly chooses a Pokémon from the table and updates the screen to the information on that Pokémon*/
onEvent("randomButton", "click", function( ) {
  var randomPos = randomNumber(0, pokeName.length -1);
  
  setScreen("dexEntry");
  
  updateInfo(randomPos);
  
  changeTypeColor(randomPos);
  
  removeDuplicateType();
  
  
});






