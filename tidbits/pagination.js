var currentPage = 1;
var numberPerPage = 2;
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
    //includehtml of the ones that correspond to that page
    var startIndex = (currentPage - 1) * numberPerPage;
    var i;
    for (i = 0; i < numberPerPage; i++) {
      <div w3-include-html="/footer.html"></div>
  }
}
