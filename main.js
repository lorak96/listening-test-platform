var A = new Audio();
var B = new Audio();
var X = new Audio();
var i = 0;
var results = new Array();
var whichIsX = new Array();
var d = new Date();
var random = Math.floor(Math.random()*10);

function testABsampleA() {
    stopPlaying();
    document.getElementById("choice1").disabled = false;
    A = new Audio(audioTableAB[i][0]);
    setTimeout(function(){A.play()}, 1000);
}

function testABsampleB() {
  stopPlaying();
  document.getElementById("choice2").disabled = false;
  B = new Audio(audioTableAB[i][1]);
  setTimeout(function(){B.play()}, 1000);
}

function testABXsampleA() {
  stopPlaying();
  document.getElementById("choice1").disabled = false;
  A = new Audio(audioTableABX[i][0]);
  setTimeout(function(){A.play()}, 1000);
}

function testABXsampleB() {
  stopPlaying();
  document.getElementById("choice2").disabled = false;
  B = new Audio(audioTableABX[i][1]);
  setTimeout(function(){B.play()}, 1000);
}

function testABXsampleX() {
  stopPlaying();
  if (random % 2 == 0) testABXsampleA();
  else testABXsampleB();
}

function stopPlaying() {
  A.pause();
  A.currentTime = 0;
  B.pause();
  B.currentTime = 0;
  X.pause();
  X.currentTime = 0;
}

function nextButton() {
  stopPlaying();
  i += 1;
  var r1 = test.choice1.value;
  var r2 = test.choice2.value;

  if(test.choice1.checked) {
    results.push(r1);
  }
  else if(test.choice2.checked) {
    results.push(r2);
  }

  document.getElementById("test").reset();

  if (random % 2 == 0) whichIsX.push("A");
  else whichIsX.push("B");
  random = Math.floor(Math.random()*10);

  document.getElementById("choice1").disabled = true;
  document.getElementById("choice2").disabled = true;

  if(location.href.split("/").slice(-1) == "AB.html" ) {
    document.getElementById("question").innerHTML = questionTable[i];
  }

  if( i === audioTableAB.length && location.href.split("/").slice(-1) == "AB.html") {
    download(results.join('\r\n'), d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+location.href.split("/").slice(-1)+'.txt', "text/plain");
    setTimeout(function(){window.location.href = "./end.html"}, 300);
  }
  else if (i === audioTableABX.length && location.href.split("/").slice(-1) == "ABX.html") {
    download(results.join('\r\n')+'\r\nX=\r\n'+whichIsX.join('\r\n'), d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+location.href.split("/").slice(-1)+'.txt', "text/plain");
    setTimeout(function(){window.location.href = "./end.html"}, 300);
  }
}

function question() {
  document.getElementById("question").innerHTML = questionTable[i];
}

