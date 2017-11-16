var squareRoot,square;
var main = new Vue({
  el: "#main",
  data: {
  	current:'',
  	changeMode:true
  },
  methods: {
  	press: function(event){
  		let key = event.target.innerText;
  		if (
  			key != '=' &&
  			key != 'C' &&
  			key != '*' &&
  			key != '/' &&
  			key != '√' &&
  			key != 'x ²' 
  		) {
  		  main.current += key;
  		} else if (key === '='){
  		  equals();
  		} else if (key === 'C'){
  			clear();
  		} else if (key === '*'){
  			multiply();
  		} else if (key === '/'){
  			divide();
  		} else if (key === '√'){
  			squareRoot();
  		} else if (key === 'x ²'){
  			square();
  		}
	}

  }

});
function equals() {
  if ((main.current).indexOf("^") > -1) {
    var base = (main.current).slice(0, (main.current).indexOf("^"));
    var exponent = (main.current).slice((main.current).indexOf("^") + 1);
 main.current = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    main.current = eval(main.current)
  }
}


function clear() {
  main.current = "";
}


function backspace() {
  main.current = main.current.substring(0, main.current.length - 1);
}


function multiply() {
  main.current += "*";
}


function divide() {
  main.current +=  "/";
}


function plus() {
  main.current +=  "+";
}


function minus() {
  main.current +=  "-";
}


function sin() {
  main.current = Math.sin(main.current);
}


function cos() {
  main.current = Math.cos(main.current);
}


function tan() {
  main.current = Math.tan(main.current);
}


function log() {
  main.current = Math.log10(main.current);
}
function squareRoot(){
	main.current= Math.sqrt(main.current);
}
function square(){
	main.current= Math.floor(main.current*main.current);
}

