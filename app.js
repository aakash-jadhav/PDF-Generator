console.log("App.js included");

function CreatePDF() {
  var docDefinition = {
    content: [
      { text: $("#title").val(), style: "header" },
      { text: $("#main").val(), style: "body" },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: "center",
        lineHeight: 2,
      },
      body: {
        alignment: "justify",
      },
    },
  };
  pdfMake.createPdf(docDefinition).open();
}
