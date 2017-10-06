/// <reference path="Assignment_4.2.ts"/>
/// <reference path="Assignment_4.2-1.ts"/>
var myTruck; // created referece of Truck interface
myTruck = { company: 'TATA', tyres: 12, speed: 280 }; // passing the the propeties to reference
TruckNamespace.Truck(); //calling the function from same namespace created in different file
TruckNamespace.TruckDetail(myTruck); //passing ref. of interface to function
