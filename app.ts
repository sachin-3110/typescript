let a = 12;

// tuples
let arr:[string, number] = ["sachin",23]
let arr2:[number, string]=[22, "sachin"]
let arr3:[number, number, string]=[22, 12, "sachin"]

// Enumeration (Enum)
enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

// console.log(UserRoles.ADMIN)




// interfaces and type aliases
//interface ka matlab hai object ki shape define krna



// TYpe Inference jab koi type na bataya ho aur vo apne aap lele, let a = 2; string hojaega
//type annotation jab hum manually type de rahe hon jese let a : number = 12;
interface Obj{
    name:string,
    email:string,
    password:string,
}

function getDataofUser(obj:Obj){
    
}

getDataofUser({name:"sachin",email:"sachin",password:"aksdjf;lkasjd"})



// extend interface

interface User{
    name:string,
    email:string,
    password:string;
}

interface Admin extends User{
    admin:boolean
}
// jo user ke pass hota hai vo to hai hi, but admin jo hai vo kuch naye properties ke saath extend ho jaega.



// agar mene same name se do interface banaya to vo automatically merge ho jaega,
// it doesn't overwrite each other.

interface user1{
    name:string,
}

interface user1{
    email:string
}


function abcd(obj:user1){
}


// type aliases,

// we make our custom type of types thus, we say it ; type:aliases.

type sankhya = number;

let b : sankhya;


let c : string| null | number;

// it's kind of weird using three types of data types, thus there is a type aliases so we use "type" to store that particular data types into the variable thus we can use those varialbles later being your new data types.

type cValue = string | null | number;


let d : cValue;



// classes and constructors;

class Music{
    name = "hello hello";
    artist = "bandar khilaadi"
}

const meraGaana = new Music()


class MusicGenerator{
    constructor(public SongName:string, public artist:string ="random singer"){}
}


let newMusic = new MusicGenerator("Milne hai mujhse aai, fir jaane kyun  tanhaai", "Arijit")


// console.log(newMusic)




class classForMethods{
    constructor(private firstName:string, public lastName:string){
        
    }

    anyMethod(){
        console.log(this.firstName)
    }
    anotherMethod(){
        this.lastName="sharma"
    }
}

class anotherClassForMethods extends classForMethods{
    public material:string  = "metal"

    changeName(){
        this.firstName = "Aaalu"
    }
}


let student = new classForMethods("Abhishek","sharma")
let studen2 = new classForMethods("ROhan","sharma")

// studen2.anyMethod()
let newClassContainer = new anotherClassForMethods("sachin","sharma")

newClassContainer.changeName()



class stName{
    constructor(public readonly name:string){}
    onchange(){
        // this.name="oyyye"
        console.log(this.name)
    }
}

let n = new stName("sachin")


//functions

function basicFnc(){

}

function standardFnc():void{

}

function primeFnc(arg:string):void{
    console.log(arg)
}

//getting a callback into the params.

function ultraPrimeFnc(creator:string, callback:(arg:string)=>void):string{
    console.log("createdBy:", creator)
    callback("hii")

    return "Returned by ultraPrimeFnc "
}

// ultraPrimeFnc("sachin",(hello)=>{
//   return console.log(hello,"hyoooo")
// })


// optional and default parameters
function fillDetails(name:string, age:number, gender:string="not Provided"){
// function fillDetails(name:string, age:number, gender?:string){
    console.log("Name:",name.toUpperCase(),"|", "Gender:",gender?.toUpperCase(),"|","Age:", age)
}


fillDetails("sachin", 22, "male")
fillDetails("Abhi",20)
