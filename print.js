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

// field #4
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
			//console.log( 'simbAttrLenght: ' + simbAttrLenght + ' spaceNum: ' + spaceNum + " fieldFive__input.value.lastIndexOf( ' '," + spaceNum + " );" );
			
			fieldForBtnFive__svgShown.childNodes[i].innerHTML = fieldFive__input.value.substring(numStr, spaceNum);
			//console.log( "fieldFive__input.value.substring(" + numStr + "," + spaceNum + ")" );
			//console.log( fieldFive__input.value.substring(numStr, spaceNum) );

			numStr = spaceNum;	
			
		};	
    }
}