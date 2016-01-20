// #1 MAIN BUTTONS
var btnArr = document.getElementsByClassName('print__btn');

// change style for 1-st button, now 1-st btn it's btnSelected 
btnArr[0].style.backgroundColor = '#0BB3A5';
var btnSelected = btnArr[0];

// add onmousedown events for all btn-s
for ( var i = 0; i < btnArr.length; i++ ) {
	btnArr[i].onmousedown = function() {
		// change style for old btnSelected and make THIS elem btnSelected
		btnSelected.style.backgroundColor = '';
		this.style.backgroundColor = '#0BB3A5';
		btnSelected = this;
		// find THIS number in node collections  ( [].indexOf.call() it's "indexOf"-bicycle for node collections (getElementsByClassName) )
		var thisElemNumber = [].indexOf.call(btnArr, btnSelected);
		// hide allfields and show field equal THIS elem
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

var svgH = [ 0,-3, 1,-3, 1,-1, 2,-1, 2,-3, 3,-3, 3,0, 3,3, 2,3, 2,1, 1,1, 1,3, 0,3 ];

fieldFor__submitBtn.onclick = function() {
	var arrCount = 0;
	var str = '';
	var letterCoord = 0;
	var topOrBottom = true;
	var topOrBottomCount = 0;
	var topVal = 5;

	// исходя из количества букв в инпуте узнаем "меру" длины для буквы
	var totalLenghtForLetters = 200;
	var minLetterLenght = ( totalLenghtForLetters / fieldFor__input.value.length ) / 3;
	console.log( minLetterLenght );


	for ( var a = 0; a < fieldFor__input.value.length; a++ ) {
		// находим координаты, что бы следующую букву разместить после предыдущей 
		letterCoord = a * minLetterLenght * 3;

		// зная "меру", добавляем букву
		for ( var i = 0; i < svgH.length; i++ ) {

			// выравниваем точку по горизонтали (первая точка из массива)
			if (arrCount == 0) {
				// составляем строку для атрибута "d" 
				str = str + ( letterCoord + a + svgH[i] * minLetterLenght ) + ',';
				arrCount = 1;

				// 
				if ( topOrBottom ) {
					if (svgH[i] == 0) {
						topVal = topVal + topOrBottomCount - 1;
					}
					else if (svgH[i] == 1) {
						topVal = topVal + topOrBottomCount - 0.66;
					}
					else if (svgH[i] == 2) {
						topVal = topVal + topOrBottomCount - 0.33;
					}
					else {
						topVal = topVal + topOrBottomCount;	
					}
					
				}
				else {
					if (svgH[i] == 0) {
						topVal = topVal + topOrBottomCount - 1;
					}
					else if (svgH[i] == 1) {
						topVal = topVal + topOrBottomCount - 1.66;
					}
					else if (svgH[i] == 2) {
						topVal = topVal + topOrBottomCount - 1.66;
					}
					else {
						topVal = topVal + topOrBottomCount - 2;	
					}
				}
			}

			// выравниваем точку по вертикали (вторая точка из массива)
			else {
				str = str + ( svgH[i] * topVal ) + ' ';
				arrCount = 0;
				topVal = 5;
			}

		};

		str = str + ' M';


		if ( topOrBottom == true ) {
			topOrBottomCount++;
			if ( fieldFor__input.value.length / 2 <= topOrBottomCount) {
				topOrBottom = false;
			};
			console.log( );
		}
		else {
			topOrBottomCount--;
			if (topOrBottomCount == 0) {
				topOrBottom = true;
			};

		}

	};	

	console.log(str);
	fieldForBtnFor__text.setAttribute('d', 'M' + str + 'z' );


	/*
	var str = '';
	var count = 0;
	var topVal = 5;
	var topOrBottomCount = 0;


	// рисуем букву
	for (var a = 0; a < fieldFor__input.value.length; a++) {
		letterCoord = a * minLetterLenght;
		for (var i = 0; i < svgH.length; i++) {
			if (count == 0) {
				str = str + (letterCoord + svgH[i] * 10) + ',';
				count = 1;

				if ( top == false ) {
					if (svgH[i] == 0) {
						topVal = topOrBottomCount + 5;
					}
					else if (svgH[i] == 1) {
						topVal = topOrBottomCount + 5.2;
					}
					else if (svgH[i] == 2) {
						topVal = topOrBottomCount + 5.4;
					}
					else {
						topVal = topOrBottomCount + 5.6;	
					}
				}
				else if (top == true) {
					if (svgH[i] == 0) {
						topVal = topOrBottomCount + 4.6;
					}
					else if (svgH[i] == 1) {
						topVal = topOrBottomCount + 4.4;
					}
					else if (svgH[i] == 2) {
						topVal = topOrBottomCount + 4.2;
					}
					else {
						topVal = topOrBottomCount + 4;	
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
			topOrBottomCount--;
			if (topOrBottomCount == 0) {
				top = false;
			};
		}
		else {
			topOrBottomCount++;
			if (topOrBottomCount == 2) {
				top = true;
			};
		}

		str = str + ' M';
	};	

	console.log(str);
	fieldForBtnFor__text.setAttribute('d', 'M' + str + 'z' );
	*/

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