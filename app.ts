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








