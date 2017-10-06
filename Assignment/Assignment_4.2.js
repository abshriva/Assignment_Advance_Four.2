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
