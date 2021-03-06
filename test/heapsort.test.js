var { HeapSort } = require('../dist/js-data-structs.cjs');

describe('Check Heapsort', () => {
    it('should be able to sort in ascending order', () => {
        var arr = [
            { key: 4, data: 'a' },
            { key: 1, data: 'b' },
            { key: 3, data: 'c' },
            { key: 5, data: 'd' },
            { key: 2, data: 'e' }
        ];
        HeapSort(arr);

        var data = [];
        arr.forEach((e) => {
            data.push(e.data);
        });

        expect(data.toString()).toBe('b,e,c,a,d');
    });

    it('should be able to sort in descending order', () => {
        var arr = [
            { key: 4, data: 'a' },
            { key: 1, data: 'b' },
            { key: 3, data: 'c' },
            { key: 5, data: 'd' },
            { key: 2, data: 'e' }
        ];
        HeapSort(arr, true);

        var data = [];
        arr.forEach((e) => {
            data.push(e.data);
        });

        expect(data.toString()).toBe('d,a,c,e,b');
    });
});
