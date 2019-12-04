var currentPage = 1;
var numberPerPage = document.getElementsByName("tidbit").length;
var tidbits = [                     //this array contains all the tidbits; TODO store objects instead of strings for complex sorting
  "bi-jing-shen-ai-guo.html",
  "xiao-chou.html",
  "lei-le-zou-le-san-le.html",
  "zui-nuan-de-you-shang.html",
  "xin-an-li-de.html",
  "zou-zhe-zou-zhe-jiu-san-le.html",
  "na-shi-ni-li-kai-le-bei-jing-de-sheng-huo.html",
  "qi-feng-le.html"
];
var numberOfPages = Math.ceil(tidbits.length / numberPerPage);    //calculate number of pages

function displayPage(number) {
  if (number == "minus") { //previous
    if (currentPage > 1) {
      currentPage--;
      buttonUpdate(currentPage);
      pageUpdate();
    }
  }
  else if (number == "plus") { //more
    if (currentPage < numberOfPages) {
      currentPage++;
      buttonUpdate(currentPage);
      pageUpdate();
  }
  else if ((number < 1) || (number > numberOfPages)) { /* do nothing */  }
  else if (number == currentPage) { /* also do nothing */ }
  else {
    //update button states
      buttonUpdate(number);
    //includehtml of the ones that correspond to that page
    currentPage = number;
    pageUpdate();
  }
  includeHTML();
}

function pageUpdate() {
  var startIndex = (currentPage - 1) * numberPerPage;
    var i;
    for (i = 0; i < numberPerPage; i++) {
      var page = "/tidbits/"
      document.getElementsByName("tidbit")[i].setAttribute("w3-include-html", page + tidbits[startIndex + i]); 
    }
}

function buttonUpdate(number) {
  //hide active
  document.getElementsByClassName("w3-button w3-gray")[0].setAttribute("class", "w3-button"); 
  //blue current
  document.getElementsByName("pbutton")[number].setAttribute("class", "w3-button w3-gray"); 
}  
