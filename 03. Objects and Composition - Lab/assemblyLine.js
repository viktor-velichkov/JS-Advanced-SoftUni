function createAssemblyLine() {
    return {
        hasClima(object) {
            object.temp = 21;
            object.tempSettings = 21;
            object.adjustTemp = () => {
                object.temp - object.tempSettings < 0 ? object.temp++ : object.temp--;
            }
        },

        hasAudio(object) {
            object.currentTrack = null;
            object.nowPlaying = () => {
                if (object.currentTrack != null) {
                    console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`);
                }
            }
        },

        hasParktronic(object) {
            object.checkDistance = (distance) => {
                let message;

                distance < 0.1 ? message = 'Beep! Beep! Beep!' :
                    (0.1 <= distance && distance < 0.25 ? message = 'Beep! Beep!' :
                        (0.25 <= distance && distance < 0.5 ? message = 'Beep!' : message = ''));

                console.log(message);
            }
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);