var currentDay =  $("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentTime = moment().hour();
var btnAm9 = document.getElementById("9amBtn");
var btnAm10 = document.getElementById("10amBtn");
var btnAm11 = document.getElementById("11amBtn");
var btnpm12 = document.getElementById("12pmBtn");
var btnPm1 = document.getElementById("1pmBtn");
var btnPm2 = document.getElementById("2pmBtn");
var btnPm3 = document.getElementById("3pmBtn");
var btnPm4 = document.getElementById("4pmBtn");
var btnPm5 = document.getElementById("5pmBtn");


function targetTime0() {
    var div = document.getElementById('9am');
    var data = div.getAttribute('data-hour')
    console.log(data);

if (data < currentTime) {
        div.classList.add("past");
}
else if (data > currentTime) {
        div.classList.add("future");
}
else {
       
        div.classList.add("present");
}
};



function targetTime1() {
    var div = document.getElementById('10am');
    var data = div.getAttribute('data-hour')
    console.log(data);

if (data < currentTime) {
        div.classList.add("past");
}
else if (data > currentTime) {
        div.classList.add("future");
}
else {
       
        div.classList.add("present");
}
};



function targetTime2() {
    var div = document.getElementById('11am');
    var data = div.getAttribute('data-hour')
    console.log(data);

if (data < currentTime) {
        div.classList.add("past");
}
else if (data > currentTime) {
        div.classList.add("future");
}
else {
       
        div.classList.add("present");
}
};



function targetTime3() {
    var div = document.getElementById('12pm');
    var data = div.getAttribute('data-hour')
    console.log(data);

if (data < currentTime) {
        div.classList.add("past");
}
else if (data > currentTime) {
        div.classList.add("future");
}
else {
       
        div.classList.add("present");
}
};



function targetTime4() {
    var div = document.getElementById('1pm');
    var data = div.getAttribute('data-hour')
    console.log(data);

if (data < currentTime) {
        div.classList.add("past");
}
else if (data > currentTime) {
        div.classList.add("future");
}
else {
       
        div.classList.add("present");
}
};



function targetTime5() {
    var div = document.getElementById('2pm');
    var data = div.getAttribute('data-hour')
    console.log(data);

if (data < currentTime) {
        div.classList.add("past");
}
else if (data > currentTime) {
        div.classList.add("future");
}
else {
       
        div.classList.add("present");
}
};



function targetTime6() {
    var div = document.getElementById('3pm');
    var data = div.getAttribute('data-hour')
    console.log(data);

if (data < currentTime) {
        div.classList.add("past");
}
else if (data > currentTime) {
        div.classList.add("future");
}
else {
       
        div.classList.add("present");
}
};



function targetTime7() {
    var div = document.getElementById('4pm');
    var data = div.getAttribute('data-hour')
    console.log(data);

if (data < currentTime) {
        div.classList.add("past");
}
else if (data > currentTime) {
        div.classList.add("future");
}
else {
       
        div.classList.add("present");
}
};



function targetTime8() {
    var div = document.getElementById('5pm');
    var data = div.getAttribute('data-hour')
    console.log(data);

if (data < currentTime) {
        div.classList.add("past");
}
else if (data > currentTime) {
        div.classList.add("future");
}
else {
       
        div.classList.add("present");
}
};


function save0() {
    var saveData0 = document.getElementById("9am").value;
    localStorage.setItem('saveData0', JSON.stringify(saveData0));
   
};

function save1() {
    var saveData1 = document.getElementById("10am").value;
    localStorage.setItem('saveData1', JSON.stringify(saveData1));
   
};

function save2() {
    var saveData2 = document.getElementById("11am").value;
    localStorage.setItem('saveData2', JSON.stringify(saveData2));
   
};

function save3() {
    var saveData3 = document.getElementById("12pm").value;
    localStorage.setItem('saveData3', JSON.stringify(saveData3));
   
};

function save4() {
    var saveData4 = document.getElementById("1pm").value;
    localStorage.setItem('saveData4', JSON.stringify(saveData4));
   
};

function save5() {
    var saveData5 = document.getElementById("2pm").value;
    localStorage.setItem('saveData5', JSON.stringify(saveData5));
   
};

function save6() {
    var saveData6 = document.getElementById("3pm").value;
    localStorage.setItem('saveData6', JSON.stringify(saveData6));
   
};

function save7() {
    var saveData7 = document.getElementById("4pm").value;
    localStorage.setItem('saveData7', JSON.stringify(saveData7));
   
};

function save8() {
    var saveData8 = document.getElementById("5pm").value;
    localStorage.setItem('saveData8', JSON.stringify(saveData8));
   
};
console.log(btnAm9);
console.log(btnAm10);
console.log(btnAm11);
console.log(btnpm12);
console.log(btnPm1);






btnAm9.addEventListener("click", save0); 
btnAm10.addEventListener("click", save1) 
btnAm11.addEventListener("click", save2)
btnpm12.addEventListener("click", save3);
btnPm1.addEventListener("click", save4);
btnPm2.addEventListener("click", save5);
btnPm3.addEventListener("click", save6);
btnPm4.addEventListener("click", save7);
btnPm5.addEventListener("click", save8);

// btnAm11.addEventListener("click", function(event) {
//     event.preventDefault();
//      save2();
// });

// btpm12.addEventListener("click", function(event) {
//     event.preventDefault();
//      save3();
// });

// btnPm1.addEventListener("click", function(event) {
//     event.preventDefault();
//      save4();
// });

// btnPm2.addEventListener("click", function(event) {
//     event.preventDefault();
//      save5();
// });

// btnPm3.addEventListener("click", function(event) {
//     event.preventDefault();
//      save6();
// });

// btnPm4.addEventListener("click", function(event) {
//     event.preventDefault();
//      save7();
// });

// btnPm5.addEventListener("click", function(event) {
//     event.preventDefault();
//      save8();
// });


function displayTask0() {
    var displayData0 = JSON.parse(localStorage.getItem("saveData0"));
    document.getElementById("9am").textContent = displayData0;
};

function displayTask1() {
    var displayData1 = JSON.parse(localStorage.getItem("saveData1"));
    document.getElementById("10am").textContent = displayData1;
};

function displayTask2() {
    var displayData2 = JSON.parse(localStorage.getItem("saveData2"));
    document.getElementById("11am").textContent = displayData2;
};

function displayTask3() {
    var displayData3 = JSON.parse(localStorage.getItem("saveData3"));
    document.getElementById("12pm").textContent = displayData3;
};

function displayTask4() {
    var displayData4 = JSON.parse(localStorage.getItem("saveData4"));
    document.getElementById("1pm").textContent = displayData4;
};

function displayTask5() {
    var displayData5 = JSON.parse(localStorage.getItem("saveData5"));
    document.getElementById("2pm").textContent = displayData5;
};

function displayTask6() {
    var displayData6 = JSON.parse(localStorage.getItem("saveData6"));
    document.getElementById("3pm").textContent = displayData6;
};

function displayTask7() {
    var displayData7 = JSON.parse(localStorage.getItem("saveData7"));
    document.getElementById("4pm").textContent = displayData7;
};

function displayTask8() {
    var displayData8 = JSON.parse(localStorage.getItem("saveData8"));
    document.getElementById("5pm").textContent = displayData8;
};







targetTime0();
targetTime1();
targetTime2();
targetTime3();
targetTime4();
targetTime5();
targetTime6();
targetTime7();
targetTime8();

displayTask0();
displayTask1();
displayTask2();
displayTask3();
displayTask4();
displayTask5();
displayTask6();
displayTask7();
displayTask8();
