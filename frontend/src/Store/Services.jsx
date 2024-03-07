import axios from "axios"


export async function createquestionApi(data) {
    try {
        const response = await axios.post('http://localhost:3001/generate-questions',data);

        if (response.status === 200) {
                return response.data
        } else {
            alert('Unexpected status code: ' + response.status);
        }
    } catch (error) {
        console.error('Error in question genration:', error);
        if (error.response) {
            alert('Error from server: ' + error.response.status + ' - ' + error.response.data.message);
        } else if (error.request) {
            alert('No response from the server');
        } else {
            alert('Error setting up the request: ' + error.message);
        }
    }
}

export async function getquestionApi() {
    try {
        const response = await axios.get('http://localhost:3001/generate-questions');

        if (response.status === 200) {
            return response.data
        } else {
            alert('Unexpected status code: ' + response.status);
        }
    } catch (error) {
        console.error('Error in question genration:', error);
        if (error.response) {
            alert('Error from server: ' + error.response.status + ' - ' + error.response.data.message);
        } else if (error.request) {
            alert('No response from the server');
        } else {
            alert('Error setting up the request: ' + error.message);
        }
    }
}
