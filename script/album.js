$(document).ready(function() {
  div = $("#albums");
  id = $("h1").get(0).id;
  $.ajax({
    url : "https://jsonplaceholder.typicode.com/users/" + id + "/albums",
    success : function(oRep) {
      console.log(oRep);
      for (var i = 0; i < oRep.length; i++) {
        //
        div.append("<p id='" + oRep[i].id + "'>" + oRep[i].title + "</p>");
      }

      $("p").click(function() {
        document.location.href = "photos.php?userId=" + id + "&id=" + this.id;
      });
    }
  });
  $("button").click(function() {
    document.location.href = "index.html";
  });
});
