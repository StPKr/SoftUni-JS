function solve(inputArr) {
    class Song {
        constructor(a, b, c) {
            this.type = a;
            this.name = b;
            this.time = c;
        }
    }
    let songs = [];
    let n = Number(inputArr.shift());
    let command = inputArr.pop();
    for (let i = 0; i < n; i++) {
        let [type, name, time] = inputArr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (command === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === command);
        filtered.forEach((i) => console.log(i.name));
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)