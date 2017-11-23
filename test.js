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

    outputWriter.prototype.write4 = function () {
        document.getElementById("output").innerHTML = "dfdsf";
    }

    outputWriter.prototype.write6 = function () {
        document.getElementById("output").innerHTML = "dfdsf";
    }

    outputWriter.prototype.write8 = function () {
        document.getElementById("output").innerHTML = "dfdsf";
    }

   outputWriter.prototype.write9 = function () {
        document.getElementById("output").innerHTML = "dfdsssf";
   }
}