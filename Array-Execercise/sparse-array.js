// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    const res = [];
    queries.forEach(query => {
        let count = 0;
        strings.forEach(string => {
            if (string === query) {
                count++;
            }
        });
        res.push(count)
    })
    return res;
}

matchingStrings(['ab', 'abc', 'de', 'gfc'], ['ab', 'de']);