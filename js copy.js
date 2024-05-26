setTimeout(function () {
  document
    .querySelector(".Waytrix-BottomGrid-cell-error")
    .click();
  setTimeout(
    {
      function() {
        document
          .querySelector(
            ".bBCVgs .BaseBox-sc-16uwbyc-0.RadioButton__Label-sc-1atxusr-0.hizvLu"
          )
          .click();
        setTimeout(function () {
          document.querySelector(".bBCVgs .evxEZj").click();
        }, "5000");
      },
    },
    "5000"
  );
}, "0");

setInterval(() => {
  setTimeout(function () {
    document
      .querySelector(".Waytrix-BottomGrid-cell-error")
      .click();
  }, 0);
  setTimeout(function () {
    document
      .querySelector(
        ".bBCVgs .BaseBox-sc-16uwbyc-0.RadioButton__Label-sc-1atxusr-0.hizvLu"
      )
      .click();
  }, 5000);
  setTimeout(function () {
    document.querySelector(".bBCVgs .evxEZj").click();
  }, 7000);
}, 20000);
