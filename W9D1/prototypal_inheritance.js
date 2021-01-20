Function.prototype.inherits = function(Superclass){
    function Surrogate(){}
    Surrogate.prototype = Superclass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Function.prototype.inherits2 = function (Superclass) {
    this.prototype = Object.create(Superclass.prototype);
    this.prototype.constructor = this;
}