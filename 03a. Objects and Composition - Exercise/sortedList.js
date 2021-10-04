function createSortedList() {
    return {
        collection: [],
        size: 0,
        add(element) {
            this.collection.push(element);
            sortCollection(this.collection);
            this.size++;
        },
        remove(index) {
            if (indexIsValid(index, this.collection)) {
                this.collection.splice(index, 1);
                sortCollection(this.collection);
                this.size--;
            }
        },
        get(index) {
            if (indexIsValid(index, this.collection)) {
                return this.collection[index];
            }
        }
    }

    function sortCollection(collection) {
        return collection.sort((a, b) => a - b);
    }

    function indexIsValid(index, array) {
        return index >= 0 && index < array.length;
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log(list.collection)