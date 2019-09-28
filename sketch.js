//var  img, imgr, imgb;
//var pink = Color(255, 102, 204);
var sneeps, snaps;
var all_sneeple;
var toggle;

function preload(){
  sneeps = {
//    black: loadImage("path123.png"),
    white: loadImage("sneep_white.png"),
    red: loadImage("sneep_red.png"),
    blue: loadImage("sneep_blue.png"),
    green: loadImage("sneep_green.png"),
    yellow: loadImage("sneep_yellow.png")
  };
    snaps = {
//    black: loadImage("assets/snap/snap_black.png"),
//    white: loadImage("assets/snap/snap_white.png"),
    red: loadImage("assets/snap/snap_red.png"),
    blue: loadImage("assets/snap/snap_blue.png"),
    pink: loadImage("assets/snap/snap_pink.png"),
    yellow: loadImage("assets/snap/snap_yellow.png")
//    green: loadImage("assets/snap/snap_green.png"),
  };
  all_sneeple = {sneeps: sneeps, snaps: snaps};
//  img = loadImage("path123.png");
//  imgr = loadImage("sneep_red.png");
//  imgb = loadImage("sneep_blue.png");
}

function setup() {
  angleMode(DEGREES)
  createCanvas(600, 600);
  frameRate(30);
  select("#radioSneep").elt.checked = true;
}

var rand = function (obj, ignore="neep") {
  var keys = Object.keys(obj)
  return obj[keys[ keys.length * Math.random() << 0]];
};

function draw() {
//    console.log(select("#radioSneep").elt.checked)

  if (frameCount % 10 != 0) return;
  clear();
  
//  background(255);
    background(0);

  push()
  translate(width/2, height/2);
  scale(0.75, 0.75);
  translate(-width/2, -height/2);
//  if (frameCount % 10000 == 0) return;
//  drawImage("#4ef542");
//   image(img, 0, 0); 
//    text(frameCount, width / 2, height / 2);
  var n = 3;
  var s = width / n; s *= 0.9;
  var off = 10;
  var sneeple_dict = select("#radioSneep").elt.checked ? sneeps : snaps;
  
  for (var i = 0; i< n; i++){
    for (var j = 0; j<n; j++){
//      var sneeple_dict = rand(all_sneeple);
      var x = i * width/n;
      var y = j * height/n;
      var sneeple1 = rand(sneeple_dict);
      image(sneeple1, x, y, s, s);
//        image(i%2==0 && j%2==0 ? sneeps.blue : sneeps.red, x, y, s, s);
      x -= off; y-=off;
      var sneeple2 = rand(sneeple_dict);
      while (dictEquiv(sneeple2, sneeple1))
        sneeple2 = rand(sneeple_dict);
      image(sneeple2, x, y, s, s);
//      image(i%2==0 && j%2==0 ? sneeps.red : sneeps.blue, x, y, s, s);
      x -= off; y-=off;
//      image(rand(sneeps), x, y, s, s);
    }
  }
  pop()
  return;

//  function dec(){ x += m; y += 1/m;}
//  function inc(){ x -= m; y -= 1/m;}
//  while(x < width){
//    image(sneeps.white, x, y, s, s);
//    dec();
//    image(sneeps.blue, x,y, s, s);
//    dec();
//    image(sneeps.red, x,y, s, s); 
//    dec();
//    image(sneeps.yellow, x,y,s,s); 
//    dec();
//    image(sneeps.green, x,y,s,s); 
//    dec();
//  }
//  while(x > 0){
//    image(sneeps.white, x, y, s, s);
//    inc();
//    image(sneeps.blue, x,y, s, s);
//    inc();
//    image(sneeps.red, x,y, s, s); 
//    inc();
//    image(sneeps.yellow, x,y,s,s); 
//    inc();
//    image(sneeps.green, x,y,s,s); 
//    inc();
//  }
//  image(sneeps.black, mouseX, mouseY);
}

function dictEquiv(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}