import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(type){
    setFilters({ type: type })
  };

  function onFindPetsClick(){
    let url = `http://localhost:3001/pets`
    
    if(filters.type !== "all"){
      url += `?type=${filters.type}`;
    }
  
    fetch(url)
    .then(r=>r.json())
    .then(data=> setPets(data))
  }

  function onAdoptPet(id){
    const updatedPets = pets.map(pet=>{
      if(pet.id === id){
        return {...pet, isAdopted: true}
      }else{
        return pet;
      }
    })
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
