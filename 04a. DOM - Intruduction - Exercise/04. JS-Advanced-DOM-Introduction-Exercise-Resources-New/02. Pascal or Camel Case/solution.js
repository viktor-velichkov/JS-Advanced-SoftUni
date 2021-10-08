function solve() {
  const text = document.getElementById('text').value.split(' ');

  console.log(text);

  let convention = document.getElementById('naming-convention').value;

  console.log(convention);

  const transformator = {
    pascalCase(text) {
      const words = text.map((v) => capitalize(v));
      return words.join('');
    },
    camelCase(text) {
      let result = this.pascalCase(text);
      return result.slice(0, 1).toLowerCase() + result.slice(1);

    }
  }

  let result = convention === 'Pascal Case' ?
    transformator.pascalCase(text) :
    (convention === 'Camel Case' ?
      transformator.camelCase(text) :
      'Error!');

  console.log(result);

  document.getElementById('result').textContent = result;


  function capitalize(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }

}