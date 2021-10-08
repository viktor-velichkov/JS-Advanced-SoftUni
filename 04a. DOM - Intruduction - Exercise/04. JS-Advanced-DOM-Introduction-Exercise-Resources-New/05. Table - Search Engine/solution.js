function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let searchTerm = document.getElementById('searchField').value;

      const rows = Array.from(document.querySelector('table tbody').children);

      rows.map((v) => v.className = '');

      if (searchTerm !== '') {
         for (let row of rows) {
            if (Array.from(row.children).map((v) => v.textContent).some((v) => v.includes(searchTerm))) {
               row.className = 'select';
            }
         }
      }
   }
}