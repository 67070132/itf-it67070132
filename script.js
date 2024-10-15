document.getElementById('set-username').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        document.querySelector('h1').innerText = `${username}'s Phone Book`;
    }
});

document.getElementById('set-profile-url').addEventListener('click', function() {
    const profileUrl = document.getElementById('profile-url').value;
    if (profileUrl) {
        document.getElementById('avatar').src = profileUrl;
    }
});

document.getElementById('add').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const tel = document.getElementById('tel').value;

    if (name && tel) {
        const phoneList = document.getElementById('phone-list');
        const rowCount = phoneList.rows.length;
        const row = phoneList.insertRow(rowCount);

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerHTML = rowCount + 1;
        cell2.innerHTML = name;
        cell3.innerHTML = tel;

        document.getElementById('name').value = '';
        document.getElementById('tel').value = '';
    }
});

document.getElementById('export').addEventListener('click', function() {
    let table = document.querySelector('table');
    let csv = [];
    for (let row of table.rows) {
        let cells = [...row.children].map(cell => cell.innerText);
        csv.push(cells.join(','));
    }

    let csvFile = new Blob([csv.join('\n')], { type: 'text/csv' });
    let downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.download = 'phonebook.csv';
    downloadLink.click();
});
