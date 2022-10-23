export async function getRequestData (data) {
    const response = await fetch("https://app.fakejson.com/q", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

export function buildRequestData (fieldsData) {
    const requestData = {
        token: "6KhpS8drkk4qZw1yzy0gog",
        data: fieldsData
    }

    return requestData;
}