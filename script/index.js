var div;
var refFilter;

$(document).ready(function() {
  div = $("#listArticles");
  refFilter = $("input[name=filter]");
  $.ajax({
    'url' : "https://jsonplaceholder.typicode.com/posts",
    success : function(oRep) {
      for (var i = 0; i < oRep.length; i++) {
        div.append("<p id='" + oRep[i].id + "' class='col-6'>" + oRep[i].title +  "</p>");
        div.append("<a href='update.php?id=" + oRep[i].id + "' class='btn btn-primary offset-1 col-2'> Update </a>");
        div.append("<button name='delete' class='btn btn-primary offset-1 col-2'> Delete </p>");
      }
      $("p").click(function() {
        document.location.href = 'article.php?id=' + this.id;
      });
      $("button[name=update]").click(function() {
        document.location.href = 'update.php?id=' + this.parent().get(0).className;
      });
      $("button[name=delete]").click(function() {
        $(this).prev().prev().remove();
        $(this).prev().remove();
        $(this).remove();
      });
    }
  });

  $("button[name=confirmFilterPost]").click(function() {
    if(refFilter.val() == "") {
      alert("Filter's field must be filled !!!");
      return;
    }
    filter(refFilter.val());
  });
  $("button[name=confirmFilterAlbum]").click(function() {
    if(refFilter.val() == "") {
      alert("Filter's field must be filled !!!");
      return;
    }
    document.location.href = 'album.php?id=' +refFilter.val();
  });
  $("button[name=confirmFilterTodo]").click(function() {
    if(refFilter.val() == "") {
      alert("Filter's field must be filled !!!");
      return;
    }
    document.location.href = 'todo.php?id=' +refFilter.val();
  });
  $("input[name=filter]").keydown(function(context) {
    if(context.which == 13)
      filter($(this).val());
  });

  $("button[name=add]").click(function() {
    post($('input[name=title]').val(), $('textarea').val(), $("input[name=userId]").val())
  });
});

function post(title, body, userId) {
  if(title == "" || body == "" || userId == "") {
    alert("All fields must be filled !!!");
    return;
  }

  $.ajax({
    method : "POST",
    url : "https://jsonplaceholder.typicode.com/posts/",
    data : {
      "title" : title,
      "body" : body,
      "userId" : userId
    },
    success : function(oRep) {
      console.log(oRep);
      $("input").get(0).value = "";
      $("textarea").get(0).value = "";
      div.append("<tr class='" + oRep.id + "'> </tr>");
      $("tr[class=" + oRep.id + "]").append("<td class='1'>" + oRep.title + "</td>");
      $("tr[class=" + oRep.id + "]").children("td").click(function() {
        alert("Can't show this one...");
      });
    }
  });
}

function filter(userId) {
  div.html("");
  $.ajax({
    url : "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
    success : function(oRep) {
      for (var i = 0; i < oRep.length; i++) {
        div.append("<p id='" + oRep[i].id + "' class='col-6'>" + oRep[i].title +  "</p>");
        div.append("<a href='update.php?id=" + oRep[i].id + "' class='btn btn-primary offset-1 col-2''> Update </a>");
        div.append("<button name='delete' class='btn btn-primary offset-1 col-2''> Delete </p>");
      }
      $("p").click(function() {
        document.location.href = 'article.php?id=' + this.id;
      });
      $("button[name=update]").click(function() {
        document.location.href = 'update.php?id=' + this.parent().get(0).className;
      });
      $("button[name=delete]").click(function() {
        $(this).prev().prev().remove();
        $(this).prev().remove();
        $(this).remove();
      });
    }
  });
}
