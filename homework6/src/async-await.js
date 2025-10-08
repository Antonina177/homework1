
const EXISTING_URL = 'https://jsonplaceholder.typicode.com/posts/1';

function processData(json) {
    return {
        id: json.id,
        title: json.title?.toUpperCase() || 'NO TITLE',
        summary: (json.body || '').slice(0, 60) + (json.body && json.body.length > 60 ? '…' : '')
    };
}

async function fetchWithAsyncAwait(url = EXISTING_URL) {
    console.log('=> fetchWithAsyncAwait: starting request to', url);

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }

        const json = await response.json();
        console.log('=> got JSON (original):', json);

        const processed = processData(json);
        console.log('=> processed data:', processed);

        console.log('=> processing:', processed.id);
        return processed;
    } catch (err) {
        console.error('=> fetchWithAsyncAwait error:', err.message);
        throw err;
    }
}

if (typeof window === 'undefined') {
    fetchWithAsyncAwait().catch(() => {});
} else {
    window.fetchWithAsyncAwait = fetchWithAsyncAwait;
}
