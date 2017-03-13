var path = "#grande-node";

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var list = document.getElementById("app").querySelectorAll("ul.ranked-list li");

  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }

  return list;
}

function deepestChild() {
  if (document.querySelector(path) === null) {
    return path;
  } else {
    path.append(document.querySelector(path));;
    deepestChild();
    return path;
  }
}
