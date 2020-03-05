$(document).ready(function() {
  div = $("#todos");
  id = $("h1").get(0).id;
  $.ajax({
    url : "https://jsonplaceholder.typicode.com/users/" + id + "/todos",
    success : function(oRep) {
      console.log(oRep);
      for (var i = 0; i < oRep.length; i++) {
        //
        div.append("<p id='" + oRep[i].id + "'>" + oRep[i].title + "</p>");
      }
    }
  });
  $("button").click(function() {
    document.location.href = "index.html";
  });
});
