async function fetchData(url, opt) {
    try {
        const response = await fetch(url, opt);
        
        if (!response.ok) { // Check if the response status is not OK (status code outside the range 200-299)
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json(); // Assuming the response is JSON
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Example usage
const url = 'https://api.example.com/data';
const options = {
    method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
    headers: {
        'Content-Type': 'application/json',
        // other headers as needed
    }
};

fetchData(url, options).then(data => {
    console.log(data);
});
