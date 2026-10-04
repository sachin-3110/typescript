"use strict";
let a = 12;
// tuples
let arr = ["sachin", 23];
let arr2 = [22, "sachin"];
let arr3 = [22, 12, "sachin"];
// Enumeration (Enum)
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
function getDataofUser(obj) {
}
getDataofUser({ name: "sachin", email: "sachin", password: "aksdjf;lkasjd" });
function abcd(obj) {
}
let b;
let c;
let d;
// classes and constructors;
class Music {
    name = "hello hello";
    artist = "bandar khilaadi";
}
const meraGaana = new Music();
class MusicGenerator {
    SongName;
    artist;
    constructor(SongName, artist = "random singer") {
        this.SongName = SongName;
        this.artist = artist;
    }
}
let newMusic = new MusicGenerator("Milne hai mujhse aai, fir jaane kyun  tanhaai", "Arijit");
console.log(newMusic);
