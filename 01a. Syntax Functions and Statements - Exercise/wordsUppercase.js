function wordsUppercase(input) {
    const regEx = /\w+/g;
    let matches = input.match(regEx);

    let result = matches.join(", ");

    console.log(result.toUpperCase());
}

wordsUppercase("Hi, how are you?");