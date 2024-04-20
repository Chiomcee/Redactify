document.getElementById('redactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const originalText = document.getElementById('originalText').value;
    const wordsToRedact = document.getElementById('wordsToRedact').value.split(' ');
    const replacement = document.getElementById('replacement').value;

    let redactedText = originalText;
    let redactedCount = 0;
    wordsToRedact.forEach(word => {
        const regex = new RegExp(word, 'gi');
        redactedText = redactedText.replace(regex, replacement.repeat(word.length));
        redactedCount += (redactedText.match(regex) || []).length;
    });

    document.getElementById('redactedContent').textContent = redactedText;
    document.getElementById('stats').textContent = `Words scanned: ${wordsToRedact.length}, Words redacted: ${redactedCount}, Total characters redacted: ${redactedText.length - originalText.length}`;
    document.getElementById('redactedText').style.display = 'block';
});
