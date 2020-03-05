$(document).ready(function() {
  div = $("#photos");
  id = $("h1").get(0).className;
  userId = $("h1").get(0).id;
  $.ajax({
    url : "https://jsonplaceholder.typicode.com/albums/" + id + "/photos",
    success : function(oRep) {
      console.log(oRep);
      for (var i = 0; i < oRep.length; i++) {
        div.append("<a id='" + oRep[i].id + "' href=" + oRep[i].url + ">" + oRep[i].title + "</p>");
      }

    }
  });
  $("button").click(function() {
    document.location.href = "album.php?id=" + userId;
  });
});
