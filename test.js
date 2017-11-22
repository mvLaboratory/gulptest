function outputWriter() {
    var text = "This is Gulp versioning test";

    outputWriter.prototype.write = function () {
        document.getElementById("output").innerHTML = text;
    }
}