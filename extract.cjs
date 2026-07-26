const fs = require('fs');

try {
    const content = fs.readFileSync('assets/index-ZXJxD7ia.js', 'utf-8');
    const searchTerm = 'meal';
    let idx = content.toLowerCase().indexOf(searchTerm);
    while (idx !== -1) {
        const start = Math.max(0, idx - 400);
        const end = Math.min(content.length, idx + 400);
        console.log(`\n=== Context for '${searchTerm}' at index ${idx} ===`);
        console.log(content.substring(start, end));
        idx = content.toLowerCase().indexOf(searchTerm, idx + 1);
    }
} catch (e) {
    console.error(e);
}
