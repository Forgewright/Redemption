
//add these to intit script
//JS.introScreen3 (GetFileUrl("dragon2.gif"))
//JS.introScreen (GetFileUrl("flames.gif"))
//JS.introScreen2 (GetFileUrl("monsterGroup2.gif"))

function introScreen(url) {
     $("#gameBorder").hide()
     $("<div/>", {
         id: "introScreen"
     }).css({		 
         position: "fixed",
         top: 355,
         left: 265,
         width: "100%",
         height: "100%",
         overflow: "hidden",
         "text-align": "center",
         display: "block",
     }).appendTo("body")
     .html("<img id=\"introScreenImg\" style=\"max-width:100%;max-height:04%;\" src=\"" + url + "\"/>");
     $("#introScreenImg").load(function() {
         $("#introScreen").fadeIn(0);
         setTimeout(finishIntroScreen, 3000);
     });
 }

function finishIntroScreen() {
     $("#gameBorder").show();
     $("#introScreen").fadeOut(14000, introFinished);
 }   ASLEvent('ClearScreen', '');

function introFinished() {
     $("#gameBorder").show();
     $("#introScreen").remove();
	 ASLEvent('IntroFinished', '');
}
 
 
