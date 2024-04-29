import sendRequest from "./send-request";

const BASE_URL = '/api/notes';

export function addNote(text) {
    return sendRequest(BASE_URL, 'POST', text);
}

export async function getAllNotes() {
    return sendRequest(BASE_URL);
}

//this function isn't used in sei cafe - just a reminder of RESTful routing
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}
