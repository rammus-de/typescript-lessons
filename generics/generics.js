// generics allos us to define reusable functions and classes that
// work with multiple types rather than a single type
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const nums:number[] = []
var nums = [];
var colors = [];
var inputEl = document.querySelector("#username");
console.log(inputEl);
inputEl.value = "hacked";
var btn = document.querySelector(".btn");
//  writing my own generic
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item:any):any{
//     return item
// }
function identity(item) {
    return item;
}
// identity<string>("i am a string")
// identity<boolean>(true)
// identity<Cat>({breed:'catish',name:"jaf"})
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
getRandomElement([123, 4, 3, 5435, 45, 436, 35]);
// inferred generic
getRandomElement([123, 4, 3, 5435, 45, 436, 35,]);
// Generics With Multiple Types
function merge(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var combo = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
// Adding Type Constraints
function merge2(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var combo2 = merge2({ name: 'colt' }, { num: 9 });
function printDoubleLength(thing) {
    return thing.length * 2;
}
function printDoubleLength2(thing) {
    return thing.length * 2;
}
printDoubleLength("7878");
//  Default Type Parameters
function makeEmptyList() {
    return [];
}
var strings = makeEmptyList();
var bools = makeEmptyList();
var VideoPlaylist = /** @class */ (function () {
    function VideoPlaylist() {
        this.videos = [];
    }
    return VideoPlaylist;
}());
var SongPlayList = /** @class */ (function () {
    function SongPlayList() {
        this.songs = [];
    }
    return SongPlayList;
}());
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var songs = new Playlist;
songs.add({ artist: "mikel", title: "come closer" });
var videos = new Playlist;
