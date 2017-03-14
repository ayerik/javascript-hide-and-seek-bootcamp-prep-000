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
  var deepestNode = document.querySelector("#grand-node");
  while (deepestNode.children[0] !== undefined) {
    deepestNode = deepestNode.children[0];
  }
  return deepestNode;
}
