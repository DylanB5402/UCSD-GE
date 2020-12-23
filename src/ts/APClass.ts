
class APClass {

    static allAPClasses: APClass[];
    
    className: String;
    score: Number;

    constructor(className: String, score: Number) {
        this.className = className;
        this.score = score;
    }


}

export default APClass;