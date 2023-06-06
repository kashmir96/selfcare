    // Function to handle the search filtering
    function filterMassagePlaces() {
        // Get the search keyword entered by the user
        var keyword = document.getElementById('search').value.toLowerCase();

        // Get all the massage place divs
        var massagePlaces = document.getElementById('listings').getElementsByTagName('div');

        // Loop through each massage place div and check if it matches the keyword
        for (var i = 0; i < massagePlaces.length; i++) {
            var massagePlace = massagePlaces[i];
            var name = massagePlace.querySelector('h5').textContent.toLowerCase();
            var location = massagePlace.querySelector('p').textContent.toLowerCase();

            // Show or hide the massage place div based on the match
            if (name.indexOf(keyword) > -1 || location.indexOf(keyword) > -1) {
                massagePlace.style.display = '';
            } else {
                massagePlace.style.display = 'none';
            }
        }
    }

    // Attach an event listener to the search input field
    document.getElementById('search').addEventListener('input', filterMassagePlaces);