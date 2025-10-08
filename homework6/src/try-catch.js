
const MAIN_URL = 'https://this-does-not-exist.example.invalid/post';
const BACKUP_URL = 'https://jsonplaceholder.typicode.com/posts/2';

async function getPostWithBackup(mainUrl = MAIN_URL, backupUrl = BACKUP_URL) {
    console.log(' Attempting request to main URL:', mainUrl);

    try {
        let response = await fetch(mainUrl);

        if (!response.ok) {
            console.warn(`⚠️ Main server responded with status ${response.status}. Trying backup URL.`);
            response = await fetch(backupUrl);
        }

        if (!response.ok) {
            throw new Error('Backup server also responded with status ${response.status}');
        }

        const data = await response.json();
        console.log('Data received:', data);

        if (!data || typeof data !== 'object' || !('id' in data)) {
            throw new Error('Response does not contain expected "id" field');
        }

        console.log('Successfully processed post #${data.id}');
        return data;
    } catch (error) {
        console.error('An error occurred:', error.message);
        throw error;
    }
}

if (typeof window === 'undefined') {
    (async () => {
        try {
            await getPostWithBackup();
        } catch (err) {
            console.error('Final error handling:', err.message);
        }
    })();
}
