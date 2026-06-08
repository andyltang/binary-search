export class BinarySearchModel {

    static Bias = {
        LEFT : 'left',
        RIGHT: 'right'
    };

    predicate = {
        LEFT: num => num <= this.target,
        RIGHT: num => num >= this.target
    }

    constructor(data, target, bias) {
        this.validate(data);
        this.data = data;
        this.target = target;
        this.binarySearch = bias === BinarySearchModel.Bias.LEFT ? BinarySearchModel.binarySearchLeft : BinarySearchModel.binarySearchRight;
        this.predicate = bias === BinarySearchModel.Bias.LEFT ? this.predicate.LEFT : this.predicate.RIGHT;
        this.res = bias === BinarySearchModel.Bias.LEFT ? -1 : data.length;
        this.update(target);
    }

    get result() {
        return this.res;
    }

    validate(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                throw new Error("Array elements are not in non-decreasing order.");
            }
        }
    }

    update(target) {
        this.target = target;
        this.res = this.binarySearch(this.data, target);
    }

    static binarySearchLeft(arr, target) {
        let l = 0;
        let r = arr.length - 1;
        let res = -1
        while (l <= r) {
            let m = Math.floor(l + (r - l) / 2);
            if (arr[m] <= target) {
                l = m + 1;
                res = m;
            }
            else {
                r = m - 1;
            }
        }
        return res;
    }

    static binarySearchRight(arr, target) {
        let l = 0;
        let r = arr.length - 1;
        let res = arr.length
        while (l <= r) {
            let m = Math.floor(l + (r - l) / 2);
            if (arr[m] >= target) {
                r = m - 1;
                res = m;
            }
            else {
                l = m + 1;
            }
        }
        return res;
    }

}