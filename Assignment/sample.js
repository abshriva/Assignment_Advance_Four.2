// Namespace created for Truck
var TruckNamespace;
(function (TruckNamespace) {
    //Passing interface interface as an argument to the function
    function TruckDetail(Truckobj) {
        //Printing the Details using backtick/backquote and embedded expressions
        console.log("The Truck details are : Company " + Truckobj.company + " , Tyres " + Truckobj.tyres + " and the speed is " + Truckobj.speed);
    }
    TruckNamespace.TruckDetail = TruckDetail;
    ;
})(TruckNamespace || (TruckNamespace = {}));
/// <reference path="Assignment_4.2.ts"/>
var TruckNamespace;
(function (TruckNamespace) {
    function Truck() {
        //Printing the Details using backtick/backquote and embedded expressions
        console.log('=======********Truck Specifications********======');
    }
    TruckNamespace.Truck = Truck;
    ;
})(TruckNamespace || (TruckNamespace = {}));
/// <reference path="Assignment_4.2.ts"/>
/// <reference path="Assignment_4.2-1.ts"/>
var myTruck; // created referece of Truck interface
myTruck = { company: 'TATA', tyres: 12, speed: 280 }; // passing the the propeties to reference
TruckNamespace.Truck(); //calling the function from same namespace created in different file
TruckNamespace.TruckDetail(myTruck); //passing ref. of interface to function
