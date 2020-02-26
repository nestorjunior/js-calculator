class CalcController {
    constructor(){
        this._displayCalc = '0';
        this._currentDate;
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