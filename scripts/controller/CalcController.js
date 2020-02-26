class CalcController {
    constructor(){
        this._displayCalc = '0';
        this._currentDate;
        this.init();
    }

    init() {
        let displayEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayEl.innerHTML = '123';
        dateEl.innerHTML = '10/10/2020';
        timeEl.innerHTML = '13:40';
    }

    get displayCal() {
        return this._displayCalc;
    }

    set displayCal(value) {
        this._displayCalc = value;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        return this._currentDate = value;
    }
}