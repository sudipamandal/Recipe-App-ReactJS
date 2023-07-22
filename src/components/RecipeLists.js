import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchData } from "../service";
import { GiCheckMark } from "react-icons/gi";

function RecipeLists(props) {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState("");
  const [Ingre, setIngre] = useState("");

  const searchRecipe = (searchQuery) => {
    fetchData(searchQuery).then((response) => {
      setData(response);
      setIngre(response);
      console.log(response);
    });
  };

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            onChange={(e) => {
              setSearchedTerm(e.target.value);
            }}
            value={searchedTerm}
            type="text"
            placeholder="Search your recipe"
          />
          <button onClick={() => searchRecipe(searchedTerm)}>
            <BsSearch />
          </button>
        </div>
      </div>

      <div className="flexbox">
        {data &&
          data.hits.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
              <button
                className="see-recipe-btn"
                onClick={() => {
                  searchRecipe(item.recipe.label);
                }}
              >
                See Recipe
              </button>
            </div>
          ))}
      </div>

      {Ingre && (
        <div className="ingredients">
          <div className="left-col">
            <div>
              <h1>{Ingre.hits[0].recipe.label}</h1>
              <h3>Source : {Ingre.hits[0].recipe.source.toUpperCase()}</h3>
              <h3>
                Cuisine Type :{" "}
                {Ingre.hits[0].recipe.cuisineType[0].toUpperCase()}
              </h3>
              <h3>
                Dish Type : {Ingre.hits[0].recipe.dishType[0].toUpperCase()}
              </h3>
              <h2>INGREDIENTS</h2>
              <ul className="ingredients-list">
                {Ingre.hits[0].recipe.ingredientLines.map((list, index) => (
                  <li key={index}>
                    <GiCheckMark size="18px" color="#6fcb9f" />
                    &nbsp;<span>{list}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right-col">
            <div className="image-wrapper">
              <img
                src={Ingre.hits[0].recipe.image}
                alt={Ingre.hits[0].recipe.label}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeLists;
