let org = require("org");



export function read_orgmode(){
const parser = new org.Parser();

// make sure that orgCode here is a good string

let  orgCode = "* alma \
** korte \
** korte \
* alma \
** korte "

let orgDocument = parser.parse(orgCode);
let orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
  headerOffset: 1,
  exportFromLineNumber: false,
  suppressSubScriptHandling: false,
  suppressAutoLink: false
});

console.dir(orgHTMLDocument); // => { title, contentHTML, tocHTML, toc }
  console.log(orgHTMLDocument.toString()) // => Rendered HTML
  return orgDocument;
}
