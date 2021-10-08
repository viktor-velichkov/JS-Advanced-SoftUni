function search() {

   let searchTerm = document.querySelector('#searchText').value;

   const townsElements = Array.from(document.getElementById('towns').children);

   clearSearch();
   let matchesCount = 0;

   if (searchTerm !== '') {
      const foundTowns = Array.from(townsElements).filter((v, i) => v.textContent.includes(searchTerm));
      foundTowns.forEach(element => {
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
      });
      matchesCount = foundTowns.length;
   }

   document.getElementById('result').textContent = `${matchesCount} matches found`;

   function clearSearch() {
      townsElements.forEach(child => {
         child.style.textDecoration = '';
         child.style.fontWeight = '';
      });
   }
}
