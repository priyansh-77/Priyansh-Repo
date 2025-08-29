
        const searchBar = document.getElementById('search-bar');
        const suggestionsList = document.getElementById('suggestions');

        // Simulated list of suggestions (replace this with your own data)
        const suggestions = ['Bits Plani', 'IIT Jodhpur', 'Skit Jaipur','LMNIIT','MNIT'];

        searchBar.addEventListener('input', () => {
            showSuggestions();
        });

        function showSuggestions() {
            const searchTerm = searchBar.value.toLowerCase();
            const filteredSuggestions = suggestions.filter(option => option.toLowerCase().includes(searchTerm));
            suggestionsList.innerHTML = '';
            
            if(searchTerm.length !== 0){
            filteredSuggestions.forEach(option => {
                const listItem = document.createElement('li');
                listItem.classList.add("searchedItem");
                listItem.textContent = option;
                listItem.addEventListener('click', () => {
                    // Handle navigation to the selected option's link or page
                    navigateToLink(option);
                });
                suggestionsList.appendChild(listItem);
            })
            }
            else{
                document.getElementsByClassName("searchedItem").remove();
            }
        }

        function navigateToLink(option) {
            // Define a mapping of suggestions to URLs
            const suggestionToUrl = {
                'Bits Plani': 'https://www.google.com',
                'IIT Jodhpur': 'https://www.google.com',
                'Skit Jaipur': 'https://www.google.com',
                'LMNIIT': 'https://www.google.com',
                'MNIT': 'https://www.google.com',
                // Add more mappings as needed
            };

            const url = suggestionToUrl[option];

            if (url) {
                // Open the URL in a new browser tab
                window.open(url, '_blank');
            }
        }
    