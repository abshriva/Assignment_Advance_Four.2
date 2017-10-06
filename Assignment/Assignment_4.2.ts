
// Namespace created for Truck
namespace TruckNamespace
{
    export interface Truck
    {
        //properties of Truck interface
        company: string;
        tyres: number;
        speed: number;  
    }
    //Passing interface interface as an argument to the function
    export function TruckDetail(Truckobj:Truck)
    {
        //Printing the Details using backtick/backquote and embedded expressions
        console.log(`The Truck details are : Company ${Truckobj.company} , Tyres ${Truckobj.tyres} and the speed is ${Truckobj.speed}`);
    };

}