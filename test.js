'use strict';
var toPdf = require("office-to-pdf");
var fs = require("fs");
var file = __dirname + "/test-doc.docx";

function test(file){
	return fs.readFile(file, function(err, result){
		if(err){
			console.log(err);
		}else{
			toPdf(result).then(
			  (pdfBuffer) => {
				fs.writeFileSync("./test.pdf", pdfBuffer);
			  }, (err) => {
				console.log(err);
			  }
			);
		}
	});
}

test(file);
