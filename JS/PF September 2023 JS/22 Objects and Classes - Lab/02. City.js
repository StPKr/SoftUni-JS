function cityInfo(city) {
    for (i = 0; i < city.length; i++) {
        console.log(city[i]);
    }
}
cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);