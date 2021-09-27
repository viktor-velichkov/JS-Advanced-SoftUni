function addOrRemove(commands) {
    const result = [];
    let num = 1;
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            result.push(num);
        } else if (commands[i] === 'remove') {
            result.pop(num);
        }
        num++;
    }


    console.log(result.length != 0 ? result.join('\n') : "Empty");
}

addOrRemove(['add',
    'add',
    'remove',
    'add',
    'add'
]);

addOrRemove(['remove',
    'remove',
    'remove'
]);