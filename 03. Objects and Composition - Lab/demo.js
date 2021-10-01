function person(firstName, lastName, age, son) {

    return {
        firstName,
        lastName,
        age,
        son
    };
}
const simeon = person('Simeon', 'Velichkov',1);
const viktor = person('Viktor', 'Velichkov',31, simeon);

console.log(viktor);

const {son:{age}}= viktor;
console.log(age);