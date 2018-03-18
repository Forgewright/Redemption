function introScreen2(url) {
     $("#gameBorder").hide();
     $("<div/>", {
         id: "introScreen2"
     }).css({
         position: "fixed",
         top: 310,
         left: -345,
         width: "100%",
         height: "100%",
         overflow: "hidden",
         "text-align": "center",
         display: "block",
     }).appendTo("body")
     .html("<img id=\"introScreen2Img\" style=\"max-width:20%;max-height:20%;\" src=\"" + url + "\"/>");
     $("#introScreen2Img").load(function() {
         $("#introScreen2").fadeIn(0);
         setTimeout(finishIntroScreen2, 3000);
     });
 }

function finishIntroScreen2() {
     $("#gameBorder").show();
     $("#introScreen2").fadeOut(14000, function() {
         $("#introScreen2").remove();
     });
 }
