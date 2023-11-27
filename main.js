"use strict";
const cheeses = [
    {
        "name": "Cheddar",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Brie",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Gouda",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Parmesan",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Roquefort",
        "type": "blue",
        "country_of_origin": "France"
    },
    {
        "name": "Camembert",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Manchego",
        "type": "semi-hard",
        "country_of_origin": "Spain"
    },
    {
        "name": "Gruyère",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Provolone",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Mozzarella",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Monterey Jack",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Feta",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Edam",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Colby",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Gorgonzola",
        "type": "blue",
        "country_of_origin": "Italy"
    },
    {
        "name": "Havarti",
        "type": "semi-soft",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Swiss",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Pepper Jack",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Stilton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Asiago",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cambozola",
        "type": "blue",
        "country_of_origin": "Germany"
    },
    {
        "name": "Fontina",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Limburger",
        "type": "semi-soft",
        "country_of_origin": "Germany"
    },
    {
        "name": "Jarlsberg",
        "type": "semi-hard",
        "country_of_origin": "Norway"
    },
    {
        "name": "Danish Blue",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Munster",
        "type": "semi-soft",
        "country_of_origin": "France"
    },
    {
        "name": "Blue Castello",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Brick",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Ricotta",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Queso Fresco",
        "type": "soft",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Cotija",
        "type": "hard",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Wensleydale",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Emmental",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Double Gloucester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Cabrales",
        "type": "blue",
        "country_of_origin": "Spain"
    },
    {
        "name": "Pecorino Romano",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Red Leicester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Caerphilly",
        "type": "semi-hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Wensleydale with Cranberries",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Stichelton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Halloumi",
        "type": "semi-soft",
        "country_of_origin": "Cyprus"
    },
    {
        "name": "Sbrinz",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Manouri",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Taleggio",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cashel Blue",
        "type": "blue",
        "country_of_origin": "Ireland"
    }
];

alert('Welcome to our Cheese App!');
 let searchMethod= prompt('Do you want to search by cheese name or by country of origin? Enter "name" or "country".');
    if(searchMethod !== 'country' && searchMethod !== 'name') {
        //Alert user to halt execution if input is invalid
        alert('Invalid input');

    } else {
        let searchKeyword= prompt('Please enter your search keyword').toLowerCase();
// Filter the cheeses based on the search method and string
        let filteredCheeses = cheeses.filter(cheese => {
            if (searchMethod === 'name') {
                return cheese.name.toLowerCase().startsWith(searchKeyword);
            } else {
                return cheese.country_of_origin.toLowerCase().startsWith(searchKeyword);
            }
        });

        // Display the results
        if (filteredCheeses.length > 0) {
            let message = "Found cheeses:\n" + filteredCheeses.map(cheese => `${cheese.name} from ${cheese.country_of_origin}`).join('\n');
            alert(message);
        } else {
            alert("No cheeses found that match your criteria.");
        }
    }















