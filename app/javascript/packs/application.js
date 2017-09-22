/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
window.onload = function(){
  function aiueo(){
    console.log(123)
  }
}


function testsssss() {
  var container = document.getElementById("pdf-container");

  var PDFController = require("pdf.js-controller");
  var controller = new PDFController({
      container: container,
      // path to dir of pdfjs-dist
      pdfDistDir: __dirname + "/node_modules/pdfjs-dist/"
  });
  // path to URL of pdf.
  // Apply CORS to this path. It means that the URL should be same origin.
  var PDFURL = "./example.pdf";
  controller.loadDocument(PDFURL)
      .then(initializedEvent)
      .catch(function (error) {
      console.error(error);
  });

  container.addEventListener(PDFController.Events.before_pdf_rendering, function (event) {
      // before render
  });
  container.addEventListener(PDFController.Events.after_pdf_rendering, function (event) {
       // after render
  });

  function initializedEvent() {
      window.addEventListener("resize", function (event) {
          controller.fitItSize();
      });
      document.onkeydown = function (event) {
          var kc = event.keyCode;
          if (event.shiftKey || event.ctrlKey || event.metaKey) {
              return;
          }
          if (kc === 37 || kc === 40 || kc === 75 || kc === 65) {
              // left, down, K, A
              event.preventDefault();
              controller.prevPage();
          } else if (kc === 38 || kc === 39 || kc === 74 || kc === 83) {
              // up, right, J, S
              event.preventDefault();
              controller.nextPage();
          }

      };
  }

}
debugger;
