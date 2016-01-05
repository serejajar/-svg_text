console.log( 'canvas.js added!' );

// #1 main menu 
var canvas = new fabric.Canvas( 'canvas' );

function mainButton() {}; 
mainButton.prototype = new fabric.Rect({
	left: 0,
	top: 0,
	fill: '#F1F6F7',
	width: 50,
	height: 50,
	selectable: false,
	userSelect: false
});

var btnOne = new mainButton();
btnOne.top = 0;
btnOne.userSelect = true;
btnOne.fill = '#0BB3A5';

var btnTwo = new mainButton();
btnTwo.top = 50;

var btnThree = new mainButton();
btnThree.top = 100;

var btnArr = [ btnOne, btnTwo, btnThree ];

for ( var i = 0; i < btnArr.length; i++ ) {
	btnArr[i].on( 'mouseover', function() {
		if ( !this.userSelect ) {
			this.fill = '#0BB3A5';
			canvas.renderAll();
		}
	});
	btnArr[i].on( 'mouseout', function() {
		if ( !this.userSelect ) {
			this.fill = '#F1F6F7';
			canvas.renderAll();
		}
	});
	btnArr[i].on( 'mousedown', function() {
		setBtnOldFill();
		this.fill = '#0BB3A5';
		this.userSelect = true;
		setFieldsOpasity();
		var thisElemNomber = btnArr.indexOf(this);
		fieldForBtnArr[thisElemNomber].opacity = 1;
		canvas.renderAll();
	});
};
canvas.add( btnOne, btnTwo, btnThree );

function setBtnOldFill() {
	for ( var i = 0; i < btnArr.length; i++ ) {
		btnArr[i].fill = '#F1F6F7';
		btnArr[i].userSelect = false;
	};
}

// #2 fields for main btn
function mainFieldForBtn() {};
mainFieldForBtn.prototype = new fabric.Rect({
	left: 50,
	top: 0,
	fill: '#DEE6E9',
	width: 500,
	height: 800,
	selectable: false,
	userSelect: false,
	opacity: 0
});

var fieldForBtnOne = new mainFieldForBtn();
fieldForBtnOne.opacity = 1;

var fieldForBtnTwo = new mainFieldForBtn();
fieldForBtnTwo.fill = 'yellow';
//fieldForBtnTwo.left = 200;

var fieldForBtnThree = new mainFieldForBtn();
fieldForBtnThree.fill = 'green';
//fieldForBtnThree.left = 300;

var fieldForBtnArr = [ fieldForBtnOne, fieldForBtnTwo, fieldForBtnThree ];

canvas.add( fieldForBtnOne, fieldForBtnTwo, fieldForBtnThree );

function setFieldsOpasity() {
	// used in block #1
	for (var i = 0; i < fieldForBtnArr.length; i++) {
		fieldForBtnArr[i].opacity = 0;
	};
}

// 2.1 field for main btn 
