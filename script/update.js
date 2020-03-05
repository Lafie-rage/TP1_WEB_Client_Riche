var div;
var title;
var body;
var userId;
var id;
var oOrginal;

$(document).ready(function() {
  div = $("div");
  title = $("input")[0];
  body = $("textarea")[0];
  userId = $("input")[1];
  id = div.get(0).id;
  $.ajax({
    url : "https://jsonplaceholder.typicode.com/posts/" + id,
    success : function(oRep) {
      oOrginal = oRep;
      console.log(oRep);
      title.value = oRep.title;
      body.value = oRep.body;
      userId.value = oRep.userId;
    }
  });

  $("button").click(function() {
    if(title.value == "" || body.value == "") {
      alert("All fields must be filled !!!");
      title.value = oOrginal.title;
      body.value = oOrginal.body;
      userId.value = oOrginal.userId;
      return;
    }
    $.ajax({
      url : 'https://jsonplaceholder.typicode.com/posts/' + id,
      data : {
        'id' : id,
        'title' : title.value,
        'body' : body.value,
        'userId' : userId.value
      },
      success: function(oRep) {
        document.location.href = "index.html";
      }
    })
  });
});
