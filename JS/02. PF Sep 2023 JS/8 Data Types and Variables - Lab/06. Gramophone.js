function solve(band, album, song) {
    let length = (album.length * band.length * song.length / 2);
    console.log(`The plate was rotated ${Math.ceil(length / 2.5)} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')