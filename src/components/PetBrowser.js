import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  const pet = pets.map(pet=>{
    return(
      <Pet 
        key={pet.id} 
        id={pet.id} 
        age={pet.age} 
        gender={pet.gender} 
        weight={pet.weight} 
        type={pet.type} 
        name={pet.name} 
        isAdopted={pet.isAdopted} 
        onAdoptPet={onAdoptPet}
      />
    )
  })
  // id={pet.id} 
  // age={pet.age} 
  // gender={pet.gender} 
  // weight={pet.weight} 
  // type={pet.type} 
  // name={pet.name} 
  // isAdopted={pet.isAdopted} 
  // onAdoptPet={onAdoptPet}
  return <div className="ui cards">{pet}</div>;
}

export default PetBrowser;
