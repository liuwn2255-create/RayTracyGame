/* Ray & Tracy 遊戲資料模組 */
const levels = [
[{word:"Apple",picture:"apple.png",choices:["Apple","Banana","Milk"]},{word:"Cat",picture:"cat.png",choices:["Dog","Cat","Bird"]},{word:"Sun",picture:"sun.png",choices:["Moon","Sun","Star"]},{word:"Banana",picture:"banana.png",choices:["Apple","Orange","Banana"]},{word:"Dog",picture:"dog.png",choices:["Cat","Dog","Fish"]}],
[{word:"Fish",picture:"fish.png",choices:["Fish","Bird","Cat"]},{word:"Car",picture:"car.png",choices:["Bus","Car","Bike"]},{word:"Orange",picture:"orange.png",choices:["Apple","Orange","Banana"]},{word:"Bird",picture:"bird.png",choices:["Fish","Bird","Dog"]},{word:"Milk",picture:"milk.png",choices:["Water","Milk","Juice"]}],
[{word:"House",picture:"house.png",choices:["House","School","Store"]},{word:"Tree",picture:"tree.png",choices:["Flower","Tree","Grass"]},{word:"Ball",picture:"ball.png",choices:["Ball","Book","Car"]},{word:"Book",picture:"book.png",choices:["Pen","Book","Bag"]},{word:"Rabbit",picture:"rabbit.png",choices:["Rabbit","Cat","Dog"]}],
[{word:"Plate",picture:"plate.png",choices:["Plate","Spoon","Cup"]},{word:"Spoon",picture:"spoon.png",choices:["Fork","Spoon","Plate"]},{word:"Fork",picture:"fork.png",choices:["Fork","Spoon","Cup"]},{word:"Cup",picture:"cup.png",choices:["Cup","Plate","Fork"]},{word:"Bread",picture:"bread.png",choices:["Bread","Cup","Plate"]}],
[{word:"Table",picture:"table.png",choices:["Table","Chair","Bed"]},{word:"Chair",picture:"chair.png",choices:["Chair","Table","Sofa"]},{word:"Sofa",picture:"sofa.png",choices:["Sofa","Bed","Chair"]},{word:"Bed",picture:"bed.png",choices:["Bed","Sofa","Table"]},{word:"Lamp",picture:"lamp.png",choices:["Lamp","Chair","Bed"]}],
[{word:"Shirt",picture:"shirt.png",choices:["Shirt","Shoes","Hat"]},{word:"Shoes",picture:"shoes.png",choices:["Socks","Shoes","Pants"]},{word:"Hat",picture:"hat.png",choices:["Hat","Shirt","Shoes"]},{word:"Socks",picture:"socks.png",choices:["Shoes","Socks","Hat"]},{word:"Pants",picture:"pants.png",choices:["Pants","Shirt","Socks"]}],
[{word:"Red",picture:"red.png",choices:["Red","Blue","Green"]},{word:"Blue",picture:"blue.png",choices:["Blue","Red","Yellow"]},{word:"Green",picture:"green.png",choices:["Green","Blue","Red"]},{word:"Yellow",picture:"yellow.png",choices:["Yellow","Red","Blue"]},{word:"Black",picture:"black.png",choices:["Black","Red","Yellow"]}],
[{word:"Happy",picture:"happy.png",choices:["Happy","Sad","Big"]},{word:"Sad",picture:"sad.png",choices:["Happy","Sad","Small"]},{word:"Big",picture:"big.png",choices:["Big","Small","Fast"]},{word:"Small",picture:"small.png",choices:["Big","Small","Happy"]},{word:"Fast",picture:"fast.png",choices:["Fast","Slow","Big"]}],
[{word:"Run",picture:"run.png",choices:["Run","Jump","Walk"]},{word:"Jump",picture:"jump.png",choices:["Sit","Jump","Run"]},{word:"Walk",picture:"walk.png",choices:["Walk","Run","Sit"]},{word:"Eat",picture:"eat.png",choices:["Drink","Eat","Sleep"]},{word:"Sleep",picture:"sleep.png",choices:["Sleep","Eat","Run"]}],
[{word:"School",picture:"school.png",choices:["School","Park","Store"]},{word:"Park",picture:"park.png",choices:["Home","Park","School"]},{word:"Teacher",picture:"teacher.png",choices:["Teacher","Student","Friend"]},{word:"Student",picture:"student.png",choices:["Teacher","Student","Baby"]},{word:"Friend",picture:"friend.png",choices:["Friend","Teacher","Family"]}]
];

/* 額外圖片直接內嵌，避免遺失圖片 */
const extraEmoji = {
  Apple:"🍎", Cat:"🐱", Sun:"☀️", Banana:"🍌", Dog:"🐶",
  Fish:"🐟", Car:"🚗", Orange:"🍊", Bird:"🐦", Milk:"🥛",
  House:"🏠", Tree:"🌳", Ball:"⚽", Book:"📖", Rabbit:"🐰",
  Moon:"🌙", Star:"⭐", Bus:"🚌", Bike:"🚲", Water:"💧",
  Pen:"🖊️", Bag:"🎒", School:"🏫", Store:"🏪", Flower:"🌸",
  Grass:"🌿", Juice:"🧃", Bread:"🍞", Cup:"🥤", Plate:"🍽️", Spoon:"🥄", Fork:"🍴", Chair:"🪑", Table:"🪵", Door:"🚪", Window:"🪟", Bed:"🛏️", Sofa:"🛋️", Shirt:"👕", Shoes:"👟", Hat:"🧢", Socks:"🧦", Pants:"👖", Dress:"👗", Red:"🔴", Blue:"🔵", Green:"🟢", Yellow:"🟡", Black:"⚫", White:"⚪", Brown:"🟤", Purple:"🟣", Happy:"😀", Sad:"😢", Angry:"😠", Big:"🐘", Small:"🐭", Long:"📏", Fast:"⚡", Slow:"🐢", Run:"🏃", Jump:"🦘", Walk:"🚶", Eat:"🍴", Sleep:"😴", Drink:"🥤", Park:"🌳", Teacher:"🧑‍🏫", Student:"🧑‍🎓", Friend:"🧑‍🤝‍🧑", Baby:"👶", Family:"👨‍👩‍👧‍👦", Knife:"🔪", Wall:"🧱", Tired:"🥱", Sit:"🪑", Home:"🏠", Lamp:"💡"
};

const extraPictures = {
  Apple: makeSVG("🍎"),
  Cat: makeSVG("🐱"),
  Sun: makeSVG("☀️"),
  Banana: makeSVG("🍌"),
  Dog: makeSVG("🐶"),
  Fish: makeSVG("🐟"),
  Car: makeSVG("🚗"),
  Orange: makeSVG("🍊"),
  Bird: makeSVG("🐦"),
  Milk: makeSVG("🥛"),
  House: makeSVG("🏠"),
  Tree: makeSVG("🌳"),
  Ball: makeSVG("⚽"),
  Book: makeSVG("📖"),
  Rabbit: makeSVG("🐰"),
  Moon: makeSVG("🌙"),
  Star: makeSVG("⭐"),
  Bus: makeSVG("🚌"),
  Bike: makeSVG("🚲"),
  Water: makeSVG("💧"),
  Pen: makeSVG("🖊️"),
  Bag: makeSVG("🎒"),
  School: makeSVG("🏫"),
  Store: makeSVG("🏪"),
  Flower: makeSVG("🌸"),
  Grass: makeSVG("🌿"),
  Juice: makeSVG("🧃"),
  Home: "images/house.png",
  Baby: "images/baby.png",
  Run: "images/run.png",
  Jump: "images/jump.png",
  Walk: "images/walk.png",
  Eat: "images/eat.png",
  Sleep: "images/sleep.png",
  Happy: "images/happy.png",
  Sad: "images/sad.png",
  Big: "images/big.png",
  Small: "images/small.png",
  Fast: "images/fast.png"
};

function makeSVG(emoji){
  // 使用 Base64 內嵌 SVG，讓遊戲即使沒有 images 資料夾也能顯示圖片。
  // 比一般 URL-encoded data URI 更穩定，避免本機或 GitHub Pages 出現破圖。
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="220" viewBox="0 0 300 220">'+
    '<rect width="300" height="220" rx="35" fill="#fff8e8"/>'+
    '<text x="150" y="145" text-anchor="middle" font-family="Arial, Segoe UI Emoji, sans-serif" font-size="120">'+emoji+'</text>'+
    '</svg>';
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}

function pictureForWord(word){
  if(extraPictures[word]) return extraPictures[word];
  return "images/" + String(word).toLowerCase() + ".png";
}
