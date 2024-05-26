var img = document.querySelectorAll("img");
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    setTimeout(function () {
      var links = [];
      var imgBig = document.querySelectorAll(
        "._1bf0twj0 img"
      );
      for (var i = 0; i < imgBig.length; i++) {
        links.push(imgBig[i].currentSrc);
      }

      console.log(links.join("\n"));
    }, 2000);
  });
}

const person = {
  name: "Đây là dòng đầu tiên.\rĐây là dòng thứ hai.",
  age: 30,
};

/// kéo ảnh từ tool mới qua nhanh
///mexv43155     part
//mexv43118  img
var partWrap = document.querySelectorAll(
  ".mexv43uj.mexv43ef._1dg6xil0 > .mexv43y5 > ._1dg6xil2 > ._16uw1p50 > .mexv43155.mexv43gn.mexv4314v.xi42gw0"
);
var objects = {};

var j = 0;

setInterval(function () {
  if (j % 2 == 0) {
    //part number
    var partNumber =
      partWrap[j].querySelectorAll("td")[3].innerText;

    ////
    partWrap[j + 1].querySelector("img").click();
    setTimeout(function () {
      for (
        var links = [],
          imgBig = document.querySelectorAll(
            "._1bf0twj0 img"
          ),
          i = 0;
        i < imgBig.length;
        i++
      )
        links.push(imgBig[i].currentSrc);
      for (let k = 0; k < links.length; k++) {
        objects[partNumber + "_" + k] = links[k];
      }
      console.log(objects);
    }, "5000");
    setTimeout(function () {
      document
        .querySelector(
          "._1kt5u8k0._1kt5u8k4._1kt5u8k2._1kt5u8k0-appear-done._1kt5u8k0-enter-done"
        )
        .click();
    }, 6000);
  }
  j++;
}, 7000);
