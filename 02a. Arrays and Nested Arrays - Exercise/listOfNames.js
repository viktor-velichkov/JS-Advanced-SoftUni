function listOfNames(list) {
    list.sort((a, b) => a.localeCompare(b)).forEach((v, i) => {
        console.log(`${i+1}.${v}`);
    })
}

listOfNames(["John", "Bob", "Christina", "Ema"]);