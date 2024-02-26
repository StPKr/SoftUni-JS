function fish(input) {
    let skumriq = Number(input[0]);
    let caca = Number(input[1]);
    let palamud = Number(input[2]);
    let safrid = Number(input[3]);
    let midi = Number(input[4]);
    let palamudPr = 1.6 * skumriq;
    let safridPr = 1.8 * caca;
    let midiPr = 7.5;
    let sum = palamud * palamudPr + safrid * safridPr + midi * midiPr;
    console.log(sum.toFixed(2));
}
fish(["6.90", "4.20", "1.5", "2.5", "1"])