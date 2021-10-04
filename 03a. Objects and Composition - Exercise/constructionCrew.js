function crew(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}

console.log(crew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: false
}));

console.log(crew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));