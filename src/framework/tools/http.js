class Http {
    get(url) {
        return sendRequest('GET', url);
    }

    post(url, body) {
        return sendRequest('POST', url, body);
    }
}

function sendRequest(method, url, data = null) {
    const options = {
        method
    };

    if (data && method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Fetch error:', error.message || error);
            throw error;  // Re-throw the error after logging it
        });
}

export const http = new Http()