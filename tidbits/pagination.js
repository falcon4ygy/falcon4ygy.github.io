var currentPage = 1;
var numberPerPage = document.getElementsByName("tidbit").length;
var tidbits = [                     //this array contains all the tidbits; TODO store objects instead of strings for complex sorting
  "bi-jing-shen-ai-guo.html",
  "lei-le-zou-le-san-le.html",
  "zui-nuan-de-you-shang.html",
  "na-shi-ni-li-kai-le-bei-jing-de-sheng-huo.html"
];
var numberOfPages = Math.ceil(tidbits.length / numberPerPage);    //calculate number of pages

function displayPage(number) {
  if ((number < 1) || (number > numberOfPages)) {
    return;
  }
  else {
    //update button states
      buttonUpdate(number);
    //includehtml of the ones that correspond to that page
    var startIndex = (currentPage - 1) * numberPerPage;
    var i;
    for (i = 0; i < numberPerPage; i++) {
      document.getElementsByName("tidbit")[i].setAttribute("w3-include-html", tidbits[startIndex + i]); 
  }
}

function buttonUpdate(number) {
  //hide active
  document.getElementsByClassName("w3-button w3-blue")[0].setAttribute("class", "w3-button"); 
  //blue current
  document.getElementsByName("pbutton")[number-1].setAttribute("class", "w3-button w3-blue"); 
}  
