


var eyes = ["תמונות/redEyes.png", "תמונות/yellowEyes.png", "תמונות/purpleEyes.png", "תמונות/blueEyes.png", "תמונות/greenEyes.png"];//מערך עיניים
var nouse = ["תמונות/redNouse.png", "תמונות/yellowNouse.png", "תמונות/purpleNouse.png", "תמונות/blueNouse.png", "תמונות/greenNouse.png"];//מערך אף
var mouse = ["תמונות/redMouse.png", "תמונות/yellowMouse.png", "תמונות/purpleMouse.png", "תמונות/blueMouse.png", "תמונות/greenMouse.png"]
var hair = ["תמונות/redHair.png", "תמונות/yellowHair.png", "תמונות/purpleHair.png","תמונות/blueHair.png","תמונות/greenHair.png"];//מערך שיער
var clothes = ["תמונות/redClothes.png", "תמונות/yellowClothes.png","תמונות/purpleClothes.png","תמונות/blueClothes.png","תמונות/greenClothes.png"]//מערך בגדים
let level1;


function loud(level)//הוספת תכונות לארון הבגדים
{
   document.getElementById("checkMe").addEventListener("click", checkDoll);// שולח לפונ' של בדיקת הבובה

    level1 = level;
    console.log(level1)
    var html;
    if(level==5)
    html='<div id="cupboard3"> <div id="e1">';
    else
    html= '<div id="cupboard"> <div id="e1">';

    for (var i = 0; i < level; i++) {
        html += '<a onclick="addAttribute()"><img src=' + eyes[i] + ' class="eyes" id="eyes' + i + '" draggable="true" ondragstart="drag()"> </a>';

    }
    html += '</div><br> <div id="n1">';
    for (var i = 0; i < level; i++) {
        html += '<a onclick="addAttribute()"><img src=' + nouse[i] + ' class="nouse" id="nouse' + i + '" draggable="true" ondragstart="drag()"></a>';

    }
    html += '</div><br><div id="m1">';
    for (var i = 0; i < level; i++) {
        html += '<a onclick="addAttribute()"><img src=' + mouse[i] + ' class="mouse" id="mouse' + i + '" draggable="true" ondragstart="drag()"></a>';

    }
    html += '</div><br><div id="h1">';
    if (level >= 4) {
        for (var i = 0; i < level; i++) {
            html += '<a onclick="addAttribute()"><img src=' + hair[i] + ' class="hair" id="hair' + i + '" draggable="true" ondragstart="drag()"></a>';

        }
        html += '</div><br><div id="c1">';
    }
    if (level == 5) {
        for (var i = 0; i < level; i++) {
            html += '<a onclick="addAttribute()"><img src=' + clothes[i] + ' class="clothes" id="clothes' + i + '" draggable="true" ondragstart="drag()"></a>';

        }
        html += '</div> </div>';
    }

    document.getElementById("div1").innerHTML = html;
    randomDoll();
    if(level1==5)
{
let minute=4;//דקות
let second=60;//שניות


const intervalTimer=setInterval("timer()",1000);
timer();
}

}
// let cnt=0;

// function allowDrop() {
//     event.preventDefault();
// }
// function drag()//שמירת הID של התמונה
// {
//     event.dataTransfer.setData("imgToDrag", event.target.id);
// }

// function drop() {
//     if (event.target.children[0] == undefined) {
//         event.preventDefault();
//         let idElement = event.dataTransfer.getData("imgToDrag");
//         event.target.appendChild(document.getElementById(idElement));
//     }
//     else {
//         event.preventDefault();
//         let idElement = event.dataTransfer.getData("imgToDrag");


//         document.getElementById(idElement).removeChild(event.target.parentElement.children[0]);
//         event.target.appendChild(document.getElementById(idElement));

//         // event.target.appendChild(document.getElementById(ev.dataTransfer.getData("imgToDrag")));
//         // document.getElementById(ev.dataTransfer.getData("imgToDrag")).parentElement.appendChild(event.target.children[1]);

//     }

// }
//רינדום אינדקס לתכונות הבובה
function randomIndex(numLevel) {
    return Math.floor(Math.random() * (numLevel - 1));//רנדום מספר בין 0 ל-4 כולל

}
console.log(randomIndex(5))
var tempe = "";
var tempH = "";
var tempN = "";
var tempM = "";
var tempC = "";
var Dhair = "";
var Deyes = "";
var Dnouse = "";
var Dmouse = "";
var Dclothes = "";

//יצירת בובה רנדומאלית
// randomDoll();
function randomDoll() 
{
    if (level1 >= 4) {
        Dhair = 'hair' + randomIndex(level1);
    }
    //לשאול את המורה למה הוא מרנדם NAN- "לא מספר"
    Deyes = 'eyes' +randomIndex(level1).toString();
    Dnouse = "nouse" +""+ randomIndex(level1);
    Dmouse = "mouse" + ""+randomIndex(level1);
    if (level1 == 5)
        Dclothes = 'clothes' + randomIndex(level1);
        console.log(Deyes);
        console.log(Dnouse);
        console.log(Dmouse);
}
function checkDoll() {let h="";
   if(level1>=4)
   { h = tempH;}
    let e = tempe;
    let n = tempN;
    let m=tempM;
   if(level1) 
   {let c =tempC;}
    let cnt = 0;
    var alertMe = 'התכונות הנכונות:\n';
    if (level1 >= 4 && h == Dhair) {
        alertMe += 'שיער, ';
        cnt++;
    }
    if (e == Deyes) {
        alertMe += 'עיניים, ';
        cnt++;
    }

    if (n == Dnouse) {
        alertMe += 'אף, ';
        cnt++;
    }
    if (m == Dmouse) {
        alertMe += 'פה, ';
        cnt++;
    }
    if (level1 == 5 && c == Dclothes) {
        alertMe += 'בגדים. ';
        cnt++;


    }
    if (level1 == cnt) {
        alert("you win!!!");
        document.getElementById("counter").innerHTML = cnt + " " + "תכונות נכונות";
        document.getElementById("divi").style.display= "block";
        document.getElementById("win").play();

    }
    else if (alertMe == 'התכונות הנכונות:\n') {
        alert("אף תכונה איננה נכונה...");
        document.getElementById("counter").innerHTML = cnt + " " + "תכונות נכונות";
    }
    else {
        alert(alertMe);
        document.getElementById("counter").innerHTML = cnt + " " + "תכונות נכונות";
    }
    console.log(Deyes);
    console.log(Dnouse);
    console.log(Dmouse);
    console.log(e);
    console.log(n);
    console.log(m);
}


function addAttribute()//מוסיף את התכונה לבובה
{

    document.getElementById("check").play();//הפעלת שמע
    var d = event.target.src;//החלפת תכונה
    // console.log(d);
//    alert("hi");
    
    var idimg = event.target.id;
    // console.log(idimg);
    switch (idimg[0]) {
        case 'h':
            tempH = idimg;
            document.getElementById("imghair").style.width='7vw';
            document.getElementById("imghair").style.height='10vw';
            // document.getElementById("imghair").style.marginBottom='10vw';

            break;
        case 'e':
            tempe = idimg;
            document.getElementById("imgeyes").style.width='10vw';
            document.getElementById("imgeyes").style.marginBottom='3vw';

            break;
        case 'm':
            tempM = idimg;
             document.getElementById("imgmouse").style.width='8vw';

            break;
        case 'c':
            tempC = idimg;
            break;
        case 'n':
            tempN = idimg;
            // document.getElementById("imgnouse").style.marginTop='1vw';
            break;
        default:
            break;
    }
    let a = "img";
    a += idimg;//a= imgeyes1
    a = a.substring(0, a.length - 1);//a= imgeyes
    console.log(a);

    document.getElementById(a).setAttribute("src", d);

}

function saveName() {
    console.log(document.getElementById("userName").value);
    localStorage.setItem("name", document.getElementById("userName").value);
    sayHello();
}
function sayHello()
{
        document.getElementById("hi")+=localStorage.getItem("name");

}
// פונקציה שבעת לחיצה על העיין מגלה את המספרים של הסיסמא
//לחצי שניה בלבד! (setTimeout)
function eye() {
    label = event.target.nextElementSibling;
    if (label.type == "password") {
        label.type = "text";
        setTimeout(function () { label.type = "password"; }, 500);
    }
}
//פונקצית בדיקה
function keyCheck() {
    if (!Number(event.key))
        event.preventDefault();
}


function timer()
{
if(minute==0&&second==0)
clearInterval(intervalTimer);//ברגע שנגמר הזמן-תעצור את השעון



if(second==0){
minute--;
second=59;

}
else
second--;

document.getElementById("timer").innerHTML=minute+":"+second;
}

function reloadMe()
{

    window.opener.location.reload();

}

function Pause() {
    localStorage.setItem("EyesD", Deyes);
    localStorage.setItem("HairD", Dhair);
    localStorage.setItem("NouseD", Dnouse);
    localStorage.setItem("MouseD", Dmouse);
    localStorage.setItem("ClothesD", Dclothes);
    localStorage.setItem("EyesG", tempe);
    localStorage.setItem("HairG", tempH);
    localStorage.setItem("NouseG", tempN);
    localStorage.setItem("MouseG", tempM);
    localStorage.setItem("ClothesG", tempC);
    event.target.value="המשך";
    event.target.setAttribute("onclick",continueGame());
}
function continueGame()
{
Deyes=localStorage.getItem("EyesD");
Dhair=localStorage.getItem("HairD");
Dnouse=localStorage.getItem("NouseD");
Dmouse=localStorage.getItem("MouseD");
Dclothes=localStorage.getItem("ClothesD");
tempe=localStorage.getItem("tempe");
tempH=localStorage.getItem("tempH");
tempN=localStorage.getItem("tempN");
tempM=localStorage.getItem("tempM");
tempC=localStorage.getItem("tempC");


event.target.value="עצור";
event.target.setAttribute("onclick",Pause());
}


