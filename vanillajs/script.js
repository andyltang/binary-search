import { BinarySearchModel } from './binarySearchModel.js';

const TARGET = 5;
const DISTINCT_ARRAY = [1,2,3,4,5,6,7,8,9];     // distinct elements
const DUPLICATES_ARRAY = [1,3,4,5,5,5,6,8,9];   // duplicate elements
const eventBus = new EventTarget();


class TargetTextbox {
    constructor(textbox) {
        this.textbox = textbox;
        this.textbox.addEventListener('change', event => {
            eventBus.dispatchEvent(new CustomEvent('querychanged', {
                detail: { value : event.target.value }
            }));
        });
    }
}

class BinarySearchArray {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.render();
        this.update(model.target)
        eventBus.addEventListener('querychanged', event => {
            this.update(event.detail.value);
        });
    }

    render() {
        this.renderArray();
        this.renderResult();
    }
  
    renderArray() {
        this.elements = this.model.data.map(val => {
            const div = document.createElement('div');
            div.className = 'element';
            div.textContent = val;
            this.container.appendChild(div);
            return div;
        });
        
    }

    renderResult() {
        this.result = document.createElement('div');
        this.result.classList.add('result');
        this.container.appendChild(this.result);
    }
    
    update(target) {
        // update elements
        this.model.update(target);
        this.elements.forEach((div, i) => {
            div.classList.remove('valid', 'target');
            if (this.model.predicate(parseInt(div.textContent))) {
                div.classList.add('valid');
            }
            if (i === this.model.result) {
                div.classList.add('target');
            }
        });
        // update result
        this.result.textContent = `res = ${this.model.result}`;
        this.result.classList.remove('invalid-result');
        if (this.model.result < 0 || this.model.result >= this.model.data.length) {
            this.result.classList.add('invalid-result');
        }
    }
}

function getArrayContainer(elementType, searchBias) {
    return document.querySelector(`[data-element-type=${elementType}][data-search-bias=${searchBias}]`);
}


function main() {
    const targetTextbox = new TargetTextbox(document.querySelector('#target'));
    const leftDistinctModel = new BinarySearchModel(DISTINCT_ARRAY, TARGET, BinarySearchModel.Bias.LEFT);
    const leftDistinct = new BinarySearchArray(getArrayContainer('distinct', BinarySearchModel.Bias.LEFT), leftDistinctModel);
    const rightDistinctModel = new BinarySearchModel(DISTINCT_ARRAY, TARGET, BinarySearchModel.Bias.RIGHT);
    const rightDistinct = new BinarySearchArray(getArrayContainer('distinct', BinarySearchModel.Bias.RIGHT), rightDistinctModel);
    const leftDupesModel = new BinarySearchModel(DUPLICATES_ARRAY, TARGET, BinarySearchModel.Bias.LEFT);
    const rightDupesModel = new BinarySearchModel(DUPLICATES_ARRAY, TARGET, BinarySearchModel.Bias.RIGHT);
    const leftDupes = new BinarySearchArray(getArrayContainer('duplicates', BinarySearchModel.Bias.LEFT), leftDupesModel);
    const rightDupes = new BinarySearchArray(getArrayContainer('duplicates', BinarySearchModel.Bias.RIGHT), rightDupesModel);
}

main();