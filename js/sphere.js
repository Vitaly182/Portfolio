var taga;
var xyz = Array();
var num_pnt;
var za = 0;
var ADA = (Math.PI / 180), ada = ADA;
var is_ie = (document.all && !window.opera);
var CT = 350, CL = 100, CZ = 300, _cnt = 12, OB = 0.15, FB = 2, FE = 1;
var _Rad = 300 * document.documentElement.clientWidth/1920
var to = null;

function grad(v) {
    return v * 180 / Math.PI;
}
function rad(v) {
    return v * Math.PI / 180;
}
function did(el) {
    return document.getElementById(el);
}
function setStyles(el, styles) {
    for (var x in styles) {
        if (is_ie && x == 'opacity') {
            if (styles[x] > 0.99) el.style.removeAttribute('filter');
            else el.style.filter = 'alpha(opacity=' + (styles[x] * 100) + ')';
        }
        else el.style[x] = styles[x];
    }
}

function initSphere(numpnt, radius) {
    var x, y, z, f, t, c;
    num_pnt = numpnt;


    for (n = 1; n < numpnt + 1; n++) {

        //f=Math.random()*Math.PI*2;
        //t=Math.random()*Math.PI*2;

        //t=0;
        //f=(2*Math.PI/numpnt)*n;

        f = Math.acos(-1 + ((2 * n) - 1) / numpnt);
        t = Math.sqrt(numpnt * Math.PI) * f;


        x = Math.round(radius * Math.cos(t) * Math.sin(f));
        y = Math.round(radius * Math.sin(t) * Math.sin(f));
        z = Math.round(radius * Math.cos(f));

        xyz[n] = { x: x, y: y, z: z };

        var el = document.createElement('div');
        el.id = "pnt" + n;
        el.innerHTML = "<a  href='" + taga[n - 1].h + "'>" + taga[n - 1].t + "</a>";
        el.n = n;
        el.className = "sptag";
        setStyles(el, {
            left: (CL + x - el.style.width / 2) + "vw", top: (CT + y) + "vw", zIndex: z
        });
        el.onmouseover = function () { mouseover(this); };
        el.onmouseout = function () { mouseout(this) };
        /*document.body.appendChild(el);*/
        ech.insertAdjacentElement('afterEnd', el);

    }

    state = 0;
    rotateth();
}

function rotate(n, a, b, c) {
    var x, y, z;
    x = xyz[n].x;
    y = xyz[n].y;
    z = xyz[n].z;

    var sa = Math.sin(a), ca = Math.cos(a), sb = Math.sin(b), cb = Math.cos(b), sc = Math.sin(c), cc = Math.cos(c);
    var ox = x, oy = y, oz = z;
    x = ox * cb * cc - oy * cb * sc + oz * sb;
    y = ox * (cc * sa * sb + ca * sc) + oy * (ca * cc - sa * sb * sc) - oz * (cb * sa);
    z = ox * (sa * sc - ca * cc * sb) + oy * (cc * sa + ca * sb * sc) + oz * (ca * cb);
    /*
    1 0 0       cb 0 sb       cc -sc 0
    0 ca -sa     0 1 0        sc cs  0
    0 sa  ca    -sb 0 cb      0  0   1 
	
     *//*
  ox=x;oy=y;oz=z;
  if(c!=0)//around z
  {
  x = ox*Math.cos(c)-oy*Math.sin(c);
  y = ox*Math.sin(c)+oy*Math.cos(c);
  z = z;
  } 
  ox=x;oy=y;oz=z;
  if(b!=0)//around y
  {
  x = ox*Math.cos(b)+oz*Math.sin(b);
  y = y;
  z = -ox*Math.sin(b)+oz*Math.cos(b);
  }
  ox=x;oy=y;oz=z;
  if(a!=0)//around x
  {
  x = x;
  y = oy*Math.cos(a)-oz*Math.sin(a);
  z = oy*Math.sin(a)+oz*Math.cos(a);
  }
  */
    xyz[n] = { x: x, y: y, z: z };
    var el = did("pnt" + n);
    if (el) {
        x = Math.round(x);
        y = Math.round(y);
        z = Math.round(z);
        var o = (z + _Rad) / (2 * _Rad);
        var fs = FB + o * FE;
        o += OB;
        setStyles(el, { left: x + CL - el.style.width / 2 + "px", top: y + CT + "px", zIndex: (CZ + z) * 2, fontSize: fs + "vw" });
        setStyles(el, { opacity: o });
    }
}
var TMR = 1000;
var state = 2;//0 -idle, 1-go to
var tmr = 0, ttmr = 0;
var zax = 0, zay = 0, zaz = 0;
var lto = null;

function rotateth() {

    switch (state) {
        case 0:
            if (tmr > 0) tmr--; else {
                ada = 0.0001 + ADA / 2 * Math.random() * ((Math.random() > 0.7) ? 1 : -1);
                tmr = TMR;
            }
            dax = day = daz = ada;
            break;
        case 1:
            ada = ADA;
            if (tmr >= 100) { state = 2; to = setTimeout(function () { state = 0; tmr = 0; ada = ADA; rotateth(); }, 5000); return; }
            tmr++;
            break;
    }

    for (i = 1; i <= _cnt; i++)
        rotate(i, dax, day, daz);

    lto = setTimeout(function () { rotateth(); }, 50);
}


function mouseover(el) {
    setStyles(el, { border: '1px solid "#FFFF00"' });
    //var x,y,z,x0=Math.acos(0/_Rad),y0=Math.acos(0/_Rad),z0=Math.acos(_Rad/_Rad);//x/r=cos(phi)
    /*
        x=Math.acos(xyz[el.n].x/_Rad);
        y=Math.acos(xyz[el.n].y/_Rad);
        z=Math.acos(xyz[el.n].z/_Rad);
        dax=(-zax+(x0-x))/50;
        day=(-zay+(y0-y))/50;
        daz=(-zaz+(-z0+z))/50;
    */

    var ll = (CL - parseInt(el.style.left)) / _Rad, lt = (parseInt(el.style.top) - CT) / _Rad;
    daz = 0; dax = (ADA / 2) * lt; day = (ADA / 2) * ll;

    tmr = 0;
    ttmr = 0;
    clearTimeout(to); clearTimeout(lto); lto = null; to = null;
    setTimeout(function () { rotateth(); }, 50);
    state = 1;




}

function mouseout(el) {
    setStyles(el, { border: 'none' });
}

onload = function () {
    _cnt = taga.length;
    setTimeout(function () { initSphere(_cnt, _Rad); }, 100);
}


