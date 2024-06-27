function checkPlagiarism() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;

    if (text1 && text2) {
        const similarity = getSimilarity(text1, text2);
        document.getElementById('result').innerText = `Similarity: ${(similarity * 100).toFixed(2)}%`;
    } else {
        document.getElementById('result').innerText = 'Please enter text in both fields.';
    }
}

function getSimilarity(text1, text2) {
    const sequence = new difflib.SequenceMatcher(text1, text2);
    return sequence.ratio();
}

var difflib = {
    SequenceMatcher: function (a, b) {
        let a_length = a.length, b_length = b.length;
        return {
            ratio: function () {
                let matches = 0;
                for (let i = 0; i < Math.min(a_length, b_length); i++) {
                    if (a[i] === b[i]) matches++;
                }
                return (2.0 * matches) / (a_length + b_length);
            }
        };
    }
};
