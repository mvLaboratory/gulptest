function outputWriter() {
    var text = "This is Gulp versioning test";

    outputWriter.prototype.write = function () {
        document.getElementById("output").innerHTML = text;
    }

    outputWriter.prototype.write2 = function () {
        document.getElementById("output").innerHTML = "dfdsf";
    }

    outputWriter.prototype.write3 = function () {
        document.getElementById("output").innerHTML = "dfdsf";
    }
}