
// Funkcja pobierająca i porównująca wynik w local storage//

var score = 1;

function checkScore() {

    if (typeof(Storage) !== "undefined") {

        var value = localStorage.getItem('bestscore');
         alert(value);

        if (value > score || value === null) {
            localStorage.setItem('bestscore', score);
            alert("Score: " + score + " Congratulations! Your score is the best!")
            /*Zamiast tych alertów ładniej było by wyświetlić np h1 czy h2 w jakimś divie*/

        }
        else {

            alert("Your score: " + score + ".")

        }

    } else {

        alert("Failed to get the data from local storage")
    }

}

checkScore();