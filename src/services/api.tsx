const API_URL = "https://script.google.com/macros/s/AKfycbxDJq6xMzLdkqBdPYqB5WAeGx-wCVtwnqL4GmvLfEJDnmX0HR6OMegELzy9scsPJOD6/exec";

export async function getData() {
    const response = await fetch(API_URL);

    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        console.error("Error fetching data from API");
        return null;
    }
}
