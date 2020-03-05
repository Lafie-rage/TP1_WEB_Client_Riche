var divArt;
var divComm;

$(document).ready(function() {
  divArt = $("#article");
  divComm = $("#comments")
  var id = $("h1").get(0).id;
  $.ajax({
    url : "https://jsonplaceholder.typicode.com/posts/" + id,
    success : function(oRep) {
      console.log(oRep);
      $("h1").html(oRep.title);
      divArt.append("<p> Body : <br/>" + oRep.body + "</p>");
      $.ajax({
        url : "https://jsonplaceholder.typicode.com/posts/" + id + "/comments",
        success : function(oRep) {
          for (var i = 0; i < oRep.length; i++) {
            divComm.append("<div id='" + oRep[i].id + "'> ");
            //email, name, body
            divComm.children("#"+oRep[i].id).append("<p>" + oRep[i].email + " replied : </p>");
            divComm.children("#"+oRep[i].id).append("<p>" + oRep[i].name + "</p>");
            divComm.children("#"+oRep[i].id).append("<p>" + oRep[i].body + "</p>");
          }
        }
      });
    }
  });

  $("button").click(function() {
    document.location.href = "index.html";
  });
});
