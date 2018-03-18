function introScreen3(url) {
	 $("#gameBorder").hide();
     $("<div/>", {
         id: "introScreen3"
     }).css({
         position: "fixed",
         top: 340,
         left: 325,
         width: "100%",
         height: "100%",
         overflow: "hidden",
         "text-align": "center",
         display: "block",
     }).appendTo("body")
     .html("<img id=\"introScreen3Img\" style=\"max-width:20%;max-height:20%;\" src=\"" + url + "\"/>");
     $("#introScreen3Img").load(function() {
         $("#introScreen3").fadeIn(0);
         setTimeout(finishIntroScreen3, 3000);
     });
 }

function finishIntroScreen3() {
     $("#introScreen3").fadeOut(14000, function() {
         $("#introScreen3").remove();
     });
 }
