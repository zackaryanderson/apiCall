import React from 'react';

const categories = [
    { name: "Italian", description: "Italian Meals", },
    { name: "Mexican", description: "Mexican Meals", },
    { name: "American", description: "American Meals", },
  ];
  

function Nav() {

    function categorySelected (category) {

        console.log(category);
    }

    return (

        <header>

            <h2>
                <a href="/">
                    <span role="img" aria-label="Cookbook">🍽</span>
                </a>
            </h2>

            <nav>
                <ul className="flex-row">

<<<<<<< HEAD
=======
                    <li className="mx-2">
                        <a href="#generate">
                            Generate
                        </a>
                    </li>

                    <li className="mx-2">
                        <a href="#previous">
                            Previous
                        </a>
                    </li>

>>>>>>> 6c21e0d7abd934f85f7c749e552760bbd46c5dbf
                    {/*Mapping in a handful of categories.*/}
                    {categories.map((category) => (
                        <li className = "mx-1" key = { category.name } >
                            <a href={`#${category.name}`} onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </a>
                        </li>
                    ))}

                </ul>
            </nav>

        </header>
    )
}

export default Nav;