// MAIN BUTTONS and FIELDS

// find all btn
var btnArr = document.getElementsByClassName('print__btn');
// change style for 1-st button, now 1-st btn it's btnSelected 
btnArr[0].style.backgroundColor = '#0BB3A5';
var btnSelected = btnArr[0];

// find all fields
var fieldForBtnArr = document.getElementsByClassName('print__field');
// display 1-st field and 'select' 1-st field
fieldForBtnArr[0].style.display = 'block';
var fieldSelected = fieldForBtnArr[0];

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

// functions for MAIN BUTTONS and FIELDS
function hideAllfields() {
	for ( var i = 0; i < fieldForBtnArr.length; i++ ) {
		fieldForBtnArr[i].style.display = '';
	};
}

// END MAIN BUTTONS and FIELDS


// CURVE TEXT
// #1 text input/output user form
var fieldOne__outputWrap = document.getElementById('fieldOne__outputWrap');
var fieldOne__output = document.getElementById('fieldOne__output');
var fieldOne__line = document.getElementById('fieldOne__line');
var fieldOne__input = document.getElementById('fieldOne__input');
var fieldOne__submitBtn = document.getElementById('fieldOne__submitBtn');


// if user click on submit btn, then add nee next from user input
fieldOne__submitBtn.onmousedown = function() {
	console.log('ok');
	fieldOne__output.innerHTML = fieldOne__input.value;
}

// #2 reverse checkbox
var fieldOne__reverseCheckbox = document.getElementById('fieldOne__reverseCheckbox');

// if user change checkbox when this event works
fieldOne__reverseCheckbox.onchange = function() {
	if ( fieldOne__reverseCheckbox.checked ) {
		fieldOne__line.setAttribute( 'transform', 'rotate(180 150 50)');
	}
	else {
		fieldOne__line.setAttribute( 'transform', 'rotate(0 150 50)');
	}
}

// #3 inside checkbox
var fieldOne__insideCheckbox = document.getElementById('fieldOne__insideCheckbox');

fieldOne__insideCheckbox.onchange = function() {
	if ( fieldOne__insideCheckbox.checked ) {
		// change user string from 'text here' to 'ereh txet'
		var str = fieldOne__input.value;
		var reverseStr = '';
		for (var i = fieldOne__input.value.length - 1; i >= 0; i--) {
			reverseStr = reverseStr + str[i];
		};
		fieldOne__output.innerHTML = reverseStr;
	}
	else {
		// add standart ('text here') in fieldOne__output
		fieldOne__output.innerHTML = fieldOne__input.value; 
	}	
}

// #4 range "radius"
var fieldOne__rangeRadius = document.getElementById('fieldOne__rangeRadius');
 
fieldOne__rangeRadius.oninput = function() {
	// change attr 'd' for changing coordinates (stretching)
	fieldOne__line.setAttribute( 'd', 'M100,50 C100,0 ' + fieldOne__rangeRadius.value + ',0 ' + fieldOne__rangeRadius.value + ',50' );
}

// #5 range "spasing"
var fieldOne__rangeSpasing = document.getElementById('fieldOne__rangeSpasing');

fieldOne__rangeSpasing.oninput = function() {
	fieldOne__outputWrap.setAttribute('textLength', fieldOne__rangeSpasing.value )
}

// #6 range "spasing"
var fieldOne__rangeFontSize = document.getElementById('fieldOne__rangeFontSize');

fieldOne__rangeFontSize.oninput = function() {
	fieldOne__output.setAttribute('font-size', fieldOne__rangeFontSize.value )	
}
// END CURVE TEXT

// TEXT ON PATH
var fieldTwo__line = document.getElementById('fieldTwo__line');
var fieldTwo__controlPoints = [ 
	[29,81],
	[100,21],
	[84,82], 
	[230,182],
	[263,50]
];
fieldTwo__controlsNodeColections = document.getElementsByClassName('print__control');

// making svg elemen whith non-selectable text
var fieldTwo = document.getElementById('fieldTwo');
fieldTwo__svgElem.onmousedown = fieldTwo.onselectstart = function() {
	return false;
}

for (var i = 0; i < fieldTwo__controlsNodeColections.length; i++) {
	fieldTwo__controlsNodeColections[i].onmousedown = function( event ) { 
		var self = this;
		document.onmousemove = function( event ) { 
			// find coord for fieldTwo__line element
			var coord = fieldTwo__line.getBoundingClientRect();
			// find this elem position in node collections of control points
			var thisElemNumberInNodeCollection = [].indexOf.call(fieldTwo__controlsNodeColections, self);
			// drag and drop this control elem
			fieldTwo__controlsNodeColections[thisElemNumberInNodeCollection].style.left = (event.pageX - coord.left) + 'px';
			fieldTwo__controlsNodeColections[thisElemNumberInNodeCollection].style.top = (event.pageY - coord.top) + 'px';
			// save coordinats of control points in arr fieldTwo__controlPoints			
			fieldTwo__controlPoints[thisElemNumberInNodeCollection][0] = event.pageX - coord.left;
			fieldTwo__controlPoints[thisElemNumberInNodeCollection][1] = event.pageY - coord.top;
			// change coordinates using arr fieldTwo__controlPoints
			fieldTwo__line.setAttribute( 'd', 'M '+ fieldTwo__controlPoints[0][0] + ',' + fieldTwo__controlPoints[0][1] +' Q ' + fieldTwo__controlPoints[1][0] + ',' + fieldTwo__controlPoints[1][1] + ' ' + fieldTwo__controlPoints[2][0] + ',' + fieldTwo__controlPoints[2][1] + ' Q ' + fieldTwo__controlPoints[3][0] + ',' + fieldTwo__controlPoints[3][1] + ' ' + fieldTwo__controlPoints[4][0] + ',' + fieldTwo__controlPoints[4][1] );
		}
		// if mouse up, break this event
		document.onmouseup = function() {
	    	document.onmousemove = null;
	  	}
	}	
};

// #1 user text on svg elem
var fieldTwo__text = document.getElementById('fieldTwo__text');
var fieldTwo__input = document.getElementById('fieldTwo__input');
var fieldTwo__submitBtn = document.getElementById('fieldTwo__submitBtn');

fieldTwo__submitBtn.onmousedown = function() {
	fieldTwo__text.innerHTML = fieldTwo__input.value;
}

// END TEXT ON PATH


/* 
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
}*/

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