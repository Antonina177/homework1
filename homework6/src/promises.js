
const POST_URL = 'https://jsonplaceholder.typicode.com/posts/1';

// Функція, що робить щось із отриманими даними
function summarizePost(post) {
    return {
        id: post.id,
        title: post.title?.toUpperCase() || 'Без назви',
        shortText: post.body ? post.body.slice(0, 60) + '…' : 'There is no text'
    };
}

// Основна функція — запит і обробка
function getPostWithPromises(url = POST_URL) {
    console.log('🟢 Відправляю запит до:', url);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(`Server responded with a status ${response.status}`));
            }
            return response.json();
        })
        .then(data => {
            console.log('You got JSON:', data);
            const summary = summarizePost(data);
            console.log('Info:', summary);
            return summary;
        })
        .then(summary => {
            console.log(` №${summary.id} Success!`);
        })
        .catch(error => {
            console.error('Error occured:', error.message);
        });
}

if (typeof window === 'undefined') {
    getPostWithPromises();
}
