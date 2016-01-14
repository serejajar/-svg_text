// #1 main buttons
var btnOne = document.getElementById('btnOne');
btnOne.style.backgroundColor = '#0BB3A5'
var btnTwo = document.getElementById('btnTwo');
var btnThree = document.getElementById('btnThree');
var btnFour = document.getElementById('btnFour');
var btnFive = document.getElementById('btnFive');


var btnSelected = btnOne;

var btnArr = [ btnOne, btnTwo, btnThree, btnFour ,btnFive ];

for ( var i = 0; i < btnArr.length; i++ ) {
	btnArr[i].onmousedown = function() {
		btnSelected.style.backgroundColor = '';
		this.style.backgroundColor = '#0BB3A5';
		btnSelected = this;
		var thisElemNumber = btnArr.indexOf(this);
		hideAllfields();
		fieldForBtnArr[thisElemNumber].style.display = 'block';

	};
};

// #2 fields for main btn
var fieldForBtnOne = document.getElementById('fieldForBtnOne');
fieldForBtnOne.style.display = 'block';
var fieldForBtnTwo = document.getElementById('fieldForBtnTwo');
var fieldForBtnThree = document.getElementById('fieldForBtnThree');
var fieldForBtnFour = document.getElementById('fieldForBtnFour');
var fieldForBtnFive = document.getElementById('fieldForBtnFive');

var fieldSelected = fieldForBtnOne;

var fieldForBtnArr = [ fieldForBtnOne, fieldForBtnTwo, fieldForBtnThree, fieldForBtnFour, fieldForBtnFive ];

function hideAllfields() {
	for ( var i = 0; i < fieldForBtnArr.length; i++ ) {
		fieldForBtnArr[i].style.display = '';
	};
}

// #2.1 add-form
var fieldFirstOutput = document.getElementById('field-first-output');
var fieldFirstInput = document.getElementById('field-first-input');
var fieldSubmitBtn = document.getElementById('field-submit-btn');

var fieldFirstOutputElemArr = [];

fieldSubmitBtn.onmousedown = function() {
	fieldFirstOutput.innerHTML = '';
	var angle = 310;
	for ( var i = 0; i < fieldFirstInput.value.length; i++ ) {
		angle = angle + 10;
		var div = document.createElement( 'div' );
		div.className = 'print__field-output-letter';
		div.innerHTML = fieldFirstInput.value[i];
		fieldFirstOutput.appendChild( div );
		div.style.transform = 'rotate(' + angle + 'deg)';
		fieldFirstOutputElemArr.push( div );
	};	
}

// 2.2 reverse checkbox
var fieldReverseCheckbox = document.getElementById('field-reverse-checkbox');

fieldReverseCheckbox.onchange = function() {
	if ( fieldReverseCheckbox.checked ) {
		angle = 130;
	}
	else {
		angle = 310;
	}
	for ( var i = 0; i < fieldFirstOutputElemArr.length; i++ ) {
		angle = angle + 10;
		fieldFirstOutputElemArr[i].style.transform = 'rotate(' + angle + 'deg)';
	};
}
// 2.3 inside checkbox
var fieldInsideCheckbox = document.getElementById('field-inside-checkbox');

fieldInsideCheckbox.onchange = function() {
	var angle;
	if ( fieldInsideCheckbox.checked ) {
		angle = 50;
		for ( var i = 0; i < fieldFirstOutputElemArr.length; i++ ) {
			angle = angle - 10;
			fieldFirstOutputElemArr[i].style.transform = 'scale(-1, 1)';
			fieldFirstOutputElemArr[i].style.transform = 'rotate(' + angle + 'deg)';
		};
	}
	else {
		angle = 310;
		for ( var i = 0; i < fieldFirstOutputElemArr.length; i++ ) {
			angle = angle + 10;
			fieldFirstOutputElemArr[i].style.transform = 'rotate(' + angle + 'deg)';
		};
	}	
}

// 2.4 range "radius"
var fieldRangeRadius = document.getElementById('field-range-radius');

fieldRangeRadius.oninput = function() {
	for ( var i = 0; i < fieldFirstOutputElemArr.length; i++ ) {
		fieldFirstOutputElemArr[i].style.height =  fieldRangeRadius.value + 'px';
	};
}

// 2.5 range "spasing"
var fieldRangeSpasing = document.getElementById('field-range-spasing');

fieldRangeSpasing.oninput = function() {
	var angle = 310;
	for ( var i = 0; i < fieldFirstOutputElemArr.length; i++ ) {
		angle = angle + 3 * fieldRangeSpasing.value;
		fieldFirstOutputElemArr[i].style.transform = 'rotate(' + angle + 'deg)';
	};
}

// 2.6 font size
var fieldRangeFontSize = document.getElementById('field-range-fontSize');

fieldRangeFontSize.oninput = function() {
	fieldFirstOutput.style.fontSize = fieldRangeFontSize.value + 'pt';
}

// 3 field #2
var fieldTwoLine = document.getElementById('field-two-line');
var fieldTwoControlPoint1 = document.getElementById('field-two-controlPoint1');
var fieldTwoControlPoint2 = document.getElementById('field-two-controlPoint2');
var fieldTwoControl1 = document.getElementById('field-two-control1');
var fieldTwoControl2 = document.getElementById('field-two-control2');
var fieldTwoControl3 = document.getElementById('field-two-control3');

var controlPoint1Y = 100;
var controlPoint1X = 21;

var controlPoint2Y = 230;
var controlPoint2X = 182;

var control1Y = 29;
var control1X = 81;

var control2Y = 84;
var control2X = 82;

var control3Y = 263;
var control3X = 50;

var fieldForBtnTwoSvg = document.getElementById('fieldForBtnTwoSvg');

fieldForBtnTwoSvg.onmousedown = fieldForBtnTwo.onselectstart = function() {
	return false;
}


fieldTwoControlPoint1.onmousedown = function( event ) {
	document.onmousemove = function( event ) {
		var coord = fieldTwoLine.getBoundingClientRect();
		fieldTwoControlPoint1.style.left = (event.pageX - coord.left) + 'px';
		fieldTwoControlPoint1.style.top = (event.pageY - coord.top) + 'px';
		controlPoint1Y = event.pageX - coord.left;
		controlPoint1X = event.pageY - coord.top;
		fieldTwoLine.setAttribute( 'd', 'M '+ control1Y + ',' + control1X +' Q ' + controlPoint1Y + ',' + controlPoint1X + ' ' + control2Y + ',' + control2X + ' Q ' + controlPoint2Y + ',' + controlPoint2X + ' ' + control3Y + ',' + control3X );
		console.log( 'd', 'M '+ control1Y + ',' + control1X +' Q ' + controlPoint1Y + ',' + controlPoint1X + ' ' + control2Y + ',' + control2X + ' Q ' + controlPoint2Y + ',' + controlPoint2X + ' ' + control3Y + ',' + control3X );
	}
	document.onmouseup = function() {
    	document.onmousemove = null;
  	}
}
fieldTwoControlPoint2.onmousedown = function(event) {
	document.onmousemove = function(event) {
		var coord = fieldTwoLine.getBoundingClientRect();
		fieldTwoControlPoint2.style.left = (event.pageX - coord.left) + 'px';
		fieldTwoControlPoint2.style.top = (event.pageY - coord.top) + 'px';
		controlPoint2Y = event.pageX - coord.left;
		controlPoint2X = event.pageY - coord.top;
		fieldTwoLine.setAttribute( 'd', 'M '+ control1Y + ',' + control1X +' Q ' + controlPoint1Y + ',' + controlPoint1X + ' ' + control2Y + ',' + control2X + ' Q ' + controlPoint2Y + ',' + controlPoint2X + ' ' + control3Y + ',' + control3X );	
	}
	document.onmouseup = function() {
    	document.onmousemove = null;
  	}
}

fieldTwoControl1.onmousedown = function( event ) {
	document.onmousemove = function( event ) {
		var coord = fieldTwoLine.getBoundingClientRect();
		fieldTwoControl1.style.left = (event.pageX - coord.left) + 'px';
		fieldTwoControl1.style.top = (event.pageY - coord.top) + 'px';
		control1Y = event.pageX - coord.left;
		control1X = event.pageY - coord.top;
		fieldTwoLine.setAttribute( 'd', 'M '+ control1Y + ',' + control1X +' Q ' + controlPoint1Y + ',' + controlPoint1X + ' ' + control2Y + ',' + control2X + ' Q ' + controlPoint2Y + ',' + controlPoint2X + ' ' + control3Y + ',' + control3X );	
	}
	document.onmouseup = function() {
    	document.onmousemove = null;
  	}
}

fieldTwoControl2.onmousedown = function( event ) {
	document.onmousemove = function( event ) {
		var coord = fieldTwoLine.getBoundingClientRect();
		fieldTwoControl2.style.left = (event.pageX - coord.left) + 'px';
		fieldTwoControl2.style.top = (event.pageY - coord.top) + 'px';
		control2Y = event.pageX - coord.left;
		control2X = event.pageY - coord.top;
		fieldTwoLine.setAttribute( 'd', 'M '+ control1Y + ',' + control1X +' Q ' + controlPoint1Y + ',' + controlPoint1X + ' ' + control2Y + ',' + control2X + ' Q ' + controlPoint2Y + ',' + controlPoint2X + ' ' + control3Y + ',' + control3X );	
	}
	document.onmouseup = function() {
    	document.onmousemove = null;
  	}
}
fieldTwoControl3.onmousedown = function( event ) {
	document.onmousemove = function( event ) {
		var coord = fieldTwoLine.getBoundingClientRect();
		fieldTwoControl3.style.left = (event.pageX - coord.left) + 'px';
		fieldTwoControl3.style.top = (event.pageY - coord.top) + 'px';
		control3Y = event.pageX - coord.left;
		control3X = event.pageY - coord.top;
		fieldTwoLine.setAttribute( 'd', 'M '+ control1Y + ',' + control1X +' Q ' + controlPoint1Y + ',' + controlPoint1X + ' ' + control2Y + ',' + control2X + ' Q ' + controlPoint2Y + ',' + controlPoint2X + ' ' + control3Y + ',' + control3X );
		console.log( 'M '+ control1Y + ',' + control1X +' Q ' + controlPoint1Y + ',' + controlPoint1X + ' ' + control2Y + ',' + control2X + ' Q ' + controlPoint2Y + ',' + controlPoint2X + ' ' + control3Y + ',' + control3X );
	}
	document.onmouseup = function() {
    	document.onmousemove = null;
  	}
}

// 3.1 input
var fieldForBtnTwo__Text = document.getElementById('fieldForBtnTwo__Text');
var fieldTwo__input = document.getElementById('fieldTwo__input');

var fieldTwo__submitBtn = document.getElementById('fieldTwo__submitBtn');

fieldTwo__submitBtn.onmousedown = function() {
	fieldForBtnTwo__Text.innerHTML = fieldTwo__input.value;
}

// 3.2 range Font Size
var fieldTwo__rangeFontSize = document.getElementById('fieldTwo__rangeFontSize');

fieldTwo__rangeFontSize.oninput = function() {
	fieldForBtnTwo__Text.style.fontSize = fieldTwo__rangeFontSize.value + 'pt';
}

// 3.3 range Kerning
var fieldTwo__rangeKerning = document.getElementById('fieldTwo__rangeKerning');

fieldTwo__rangeKerning.oninput = function() {
	//fieldForBtnTwo__Text.style.letterSpacing =  fieldTwo__rangeKerning.value + 'px';
}

// 3.4 range Font Size
var fieldTwo__rangeLineHeight = document.getElementById('fieldTwo__rangeLineHeight');

fieldTwo__rangeLineHeight.oninput = function() {
	//fieldForBtnTwo__Text.style.
}

// field #3
var fieldThree__output = document.getElementById('fieldThree__output');
var fieldThree__input = document.getElementById('fieldThree__input');
var fieldThree__submitBtn = document.getElementById('fieldThree__submitBtn');

var fieldThree__text11 = document.getElementById('fieldThree__text11');
var fieldThree__text12 = document.getElementById('fieldThree__text12');
var fieldThree__text13 = document.getElementById('fieldThree__text13');

var fieldThree__textSelected = fieldThree__text11;
var fieldThree__prefixSelected = '11';

fieldThree__submitBtn.onmousedown = function() {
	fieldThree__output.innerHTML = '';
	for (var i = 0; i < fieldThree__input.value.length; i++) {
		var path = 'img/' + fieldThree__prefixSelected + '_' + fieldThree__input.value[i]  + '.svg';
		var img = document.createElement('img');
		img.setAttribute('src', path );
		img.style.maxHeight = '50px';
		fieldThree__output.appendChild(img);
		//console.log( 'img/' + fieldThree__prefixSelected + '_' + fieldThree__input.value[i]  + '.svg' );
	};
}

fieldThree__text11.onmousedown = function() {
	fieldThree__textSelected.style.backgroundColor = 'white';
	this.style.backgroundColor = '#E1ECEE';
	fieldThree__textSelected = this;
	fieldThree__prefixSelected = '11';
}
fieldThree__text12.onmousedown = function() {
	fieldThree__textSelected.style.backgroundColor = 'white';
	this.style.backgroundColor = '#E1ECEE';
	fieldThree__textSelected = this;
	fieldThree__prefixSelected = '12';
}
fieldThree__text13.onmousedown = function() {
	fieldThree__textSelected.style.backgroundColor = 'white';
	this.style.backgroundColor = '#E1ECEE';
	fieldThree__textSelected = this;
	fieldThree__prefixSelected = '13';
}

// field 4
var fieldFor__input = document.getElementById('fieldFor__input');
var fieldFor__submitBtn = document.getElementById('fieldFor__submitBtn');
var fieldForBtnFor__svg = document.getElementById('fieldForBtnFor__svg');
var fieldForBtnFor__text = document.getElementById('fieldForBtnFor__text');

var svgH = [ 0,-3, 1,-3, 1,-1, 2,-1, 2,-3, 3,-3, 3,0,  3,3, 2,3, 2,1, 1,1, 1,3, 0,3 ];

fieldFor__submitBtn.onclick = function() {
	var str = '';
	var letterCoord;
	var count = 0;
	var topVal = 5;


	var strLetterNo = 0;	
	var topBottomCount = 0;
	var top = false;

	for (var a = 0; a < fieldFor__input.value.length; a++) {
		letterCoord = a * 35;
		for (var i = 0; i < svgH.length; i++) {
			if (count == 0) {
				str = str + (letterCoord + svgH[i] * 10) + ',';
				count = 1;

				if ( top == false ) {
					if (svgH[i] == 0) {
						topVal = topBottomCount + 5;
					}
					else if (svgH[i] == 1) {
						topVal = topBottomCount + 5.2;
					}
					else if (svgH[i] == 2) {
						topVal = topBottomCount + 5.4;
					}
					else {
						topVal = topBottomCount + 5.6;	
					}
				}
				else if (top == true) {
					if (svgH[i] == 0) {
						topVal = topBottomCount + 4.6;
					}
					else if (svgH[i] == 1) {
						topVal = topBottomCount + 4.4;
					}
					else if (svgH[i] == 2) {
						topVal = topBottomCount + 4.2;
					}
					else {
						topVal = topBottomCount + 4;	
					}
				}
			}
			else {	
				str = str + (svgH[i] * topVal) + ' ';
				count = 0;
				topVal = 5;	
			} 					
		};


		if (top == true) {
			topBottomCount--;
			if (topBottomCount == 0) {
				top = false;
			};
		}
		else {
			topBottomCount++;
			if (topBottomCount == 2) {
				top = true;
			};
		}

		str = str + ' M';
	};	

	console.log(str);
	fieldForBtnFor__text.setAttribute('d', 'M' + str + 'z' );

	
	

	/*var str = '';
	var counter = 0;
	for (var i = 0; i < 3; i++) {
		switch ( fieldFor__input.value[i] ) {
			case 'H':
			case 'h':
				if (counter == 0) {
					str = str + 'M0,0 0,-30 10,-33 10,-22 20,-24 20,-36 30,-39 30,0 20,0 20,-12 10,-11 10,0';
					fieldForBtnFor__text.setAttribute('d', str + 'z' );
					console.log( str );
				}
				else if (counter == 1) {
					str = str + ' M35,0 35,-39 45,-39 45,-26 55,-26 55,-39 65,-39 65,0 55,0 55,-13 45,-13 45,0';
					fieldForBtnFor__text.setAttribute('d', str + 'z' );
					console.log( str + 'z');
				}
				else {
					str = str + ' M70,0 70,-39 80,-36 80,-24 90,-22 90,-33 100,-30 100,0 90,0 90,-11 80,-12 80,0';
					fieldForBtnFor__text.setAttribute('d', str + 'z' );
					console.log( str + 'z');
				}
				break;
			case 'Z':
			case 'z':
				if (counter == 0) {
					str = str + 'M0,0 0,-10 15,-24 0,-20 0,-30 30,-39 30,-26 15,-12 30,-13 30,0 ';
					fieldForBtnFor__text.setAttribute('d', str + 'z' );
					console.log( str );
				}
				else if (counter == 1) {
					str = str + ' M35,0 35,-13 50,-26 35,-26 35,-39 65,-39 65,-26 50,-13 65,-13 65,0';
					fieldForBtnFor__text.setAttribute('d', str + 'z' );
					console.log( str + 'z');
				}
				else {
					str = str + ' M70,0 70,-13 85,-24 70,-26 70,-39 100,-30 100,-20 85,-12 100,-10 100,0';
					fieldForBtnFor__text.setAttribute('d', str + 'z' );
					console.log( str + 'z');
				}
				break;
			case 'T':
			case 't':
				if (counter == 0) {
					str = str + 'M10,0 10,-22 0,-20 0,-30 30,-39 30,-26 20,-24 20,0 ';
					fieldForBtnFor__text.setAttribute('d', str + 'z' );
					console.log( str );
				}
				else if (counter == 1) {
					str = str + ' M45,0 45,-26 35,-26 35,-39 65,-39 65,-26 55,-26 55,0 ';
					fieldForBtnFor__text.setAttribute('d', str + 'z' );
					console.log( str + 'z');
				}
				else {
					str = str + ' M80,0 80,-24 70,-26 70,-39 100,-30 100,-20 90,-22 90,0 ';
					fieldForBtnFor__text.setAttribute('d', str + 'z' );
					console.log( str + 'z');
				}
				break;

		}
		counter++;
		if (counter > 3) counter = 0;
	};*/
}

// field #5
var fieldFive__submitBtn = document.getElementById('fieldFive__submitBtn');
var fieldFive__input = document.getElementById('fieldFive__input');
var fieldForBtnFive__svgShown = document.getElementById('fieldForBtnFive__svgShown');
var fieldFive__inputArr = [];
//var fieldForBtnFive__svgHidden = document.getElementById('fieldForBtnFive__svgHidden');

fieldFive__submitBtn.onclick = function() {
	var numStr = 0;
	var simbAttrLenght;
	var spaceNum;
	for ( var i = 0; i < fieldForBtnFive__svgShown.childNodes.length; i++ ) {
		if ( fieldForBtnFive__svgShown.childNodes[i].tagName == 'text') {
			simbAttrLenght = +fieldForBtnFive__svgShown.childNodes[i].getAttribute('symb');
			spaceNum = fieldFive__input.value.lastIndexOf( ' ', numStr + simbAttrLenght);
		
			fieldForBtnFive__svgShown.childNodes[i].innerHTML = fieldFive__input.value.substring(numStr, spaceNum);

			numStr = spaceNum;	
			
		};	
    }
}