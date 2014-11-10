$(document).ready(function(){
	var imageSrc 	= 	"";
	var puzzleId	=	0;
	
	/* create puzzle1 */
	imageSrc = 'img/bouton.jpg';
	puzzleId = 1;
	createPuzzle( imageSrc , puzzleId );
	
	/* create puzzle2 */
	imageSrc = 'img/tomahawk.jpg';
	puzzleId = 2;
	createPuzzle( imageSrc , puzzleId );
	
	adjustFontSize();
});

$( window ).resize(function(){
	adjustFontSize();
});

function adjustFontSize()
{
	$(".title").fitText(1.5, { minFontSize: '12px', maxFontSize: '50px' });
	
	$(".puzzle_block").fitText(0.04, { minFontSize: '12px', maxFontSize: '70px' });
	
	$(".puzzle_title").fitText(1, { minFontSize: '12px', maxFontSize: '70px' });
	
}

function createPuzzle( imageSrc , puzzleIndex )
{
	var popupMsg 	=	"";
	
	var config = {
				img_puzzle: imageSrc ,
				tilesH: 4,
				tilesV: 4,
				gap: true,
				duration: 100,
				bgColor: '#fff',
				bgOpacity: 1,
				imgBgOpacity: .2,
				shuffleNum: 2,
				shuffleSpeed: 60,
				menuVisible: false,
				menuNameShuffle: 'Shuffle',
				menuNameGrid: 'Grid',
				menuNameImage: 'Image',
				menu_shuffle:{
					'Very Easy': 2,
					Easy: 10,
					Medium: 30,
					Hard: 60
				},
				menu_grid: ['3x3', '4x4', '5x5', '6x5', '7x7', '8x8', '9x9'],
				menu_image: {
					
					'Bouton de soldat': 'img/bouton.jpg',
					'hachette à pic': 'img/tomahawk.jpg',
				},
				onCompleted: function(){
					
					popupMsg = popupMessage( puzzleIndex );
					
					jSuccess( popupMsg , {
						InsideDiv: $('#Puzzle2'),
						autoHide : false
					});
				}
			}
	$('#Puzzle'+puzzleIndex).shufflepuzzle(config);
}

function popupMessage( id )
{
	var strMessage 		=	"";
	
	if( 1 == id )
	{
		strMessage = "Félicitations ! Vous avez retrouvé un bouton de soldat du Royal Newfoundland Regiment qui est passé par Québec à l'automne 1807, en juin 1814 et en 1815.<br>Ce régiment a largement été impliqué dans la guerre de 1812. Ce bouton a été retrouvé sur le site du blockhaus, près de la citadelle temporaire, à la pointe ouest du cap Diamant.<br>Continuez";
		
	}
	else if ( 2 == id )
	{
		strMessage = "Bravo ! Quelle belle tête de tomahawk ! Datant probablement des années 1680 (ou avant), cet outil servait à couper des branches ou à d'autres tâches semblables. Après tout, le tranchant en acier était pratique. Toutefois, il pouvait aussi servir d'arme et a été très populaire chez les guerriers amérindiens. Cette hachette a été retrouvée sur le site de la maison Pinguet, jadis érigée sur l'emplacement de l'actuel parc des Braves";
		
	}
	
	return strMessage;
}
