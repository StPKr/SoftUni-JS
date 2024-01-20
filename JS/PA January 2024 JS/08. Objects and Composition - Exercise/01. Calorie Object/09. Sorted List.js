function createSortedList() {
    let result = {
        list: [],
        size: 0,
        add(n) {
            this.list.push(n);
            this.list.sort((a, b) => a - b);
            this.size = this.list.length;
        },
        remove(n) {
            if (n >= 0 && n < result.list.length) {
                result.list.splice(n, 1);
                result.size = result.list.length;
            }
        },
        get(n) {
            if (result.list.length >= n + 1) {
                return this.list[n]
            }
        },
    }
    return result;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

