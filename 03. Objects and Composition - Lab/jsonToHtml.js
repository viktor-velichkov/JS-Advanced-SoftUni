function jsonToHtml(input) {

    const result = [];
    const jsonObj = JSON.parse(input);
    result.push('<table>');

    result.push(setHeadings(jsonObj));

    setContents(jsonObj).forEach(el => {
        result.push(el);
    });

    result.push('</table>');

    function setHeadings(jsonObj) {
        const keys = [];
        jsonObj.forEach(element => {
            keys.push(Object.keys(element));
        });

        const uniqueKeys = keys.sort((a, b) => b.length - a.length)[0];

        let headings = '\t<tr>';
        uniqueKeys.forEach(el => {
            headings += `<th>${escapeHtml(el)}</th>`;
        });
        headings += '</tr>';
        return headings;
    }

    function setContents(jsonObj) {
        const keys = [];
        jsonObj.forEach(element => {
            keys.push(Object.keys(element));
        });
        const uniqueKeys = keys.sort((a, b) => b.length - a.length)[0];

        const values = [];

        jsonObj.forEach(element => {
            const currentValues = [];
            uniqueKeys.forEach(key => {
                currentValues.push(element[key]);
            });
            values.push(currentValues);
        });

        let result = [];
        values.forEach(el => {
            let row = '\t<tr>';
            el.forEach(value => {
                row += `<td>${escapeHtml(value)}</td>`;
            });
            row += '</tr>';
            result.push(row);
        });

        return result;
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    console.log(result.join('\n'));

}

jsonToHtml(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

jsonToHtml(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);