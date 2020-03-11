function rprocess(line) {
    return line;
}
function site(process) {
    var tab = function (text, prefix) {
        if (prefix === void 0) { prefix = "__"; }
        return prefix + text.split("\n").join("<br/>" + prefix);
    };
    var label = document.createElement("label");
    label.innerHTML = "Input: ";
    var input = document.createElement("input");
    input.style.width = "80%";
    input.setAttribute('type', 'text');
    var idiv = document.createElement("div");
    var exec = function () {
        idiv.innerHTML = input.value + "<br/>" +
            tab(process(input.value)) + "<br/><hr>" + idiv.innerHTML;
        input.value = "";
    };
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13)
            exec();
    });
    document.body.appendChild(label);
    document.body.appendChild(input);
    document.getElementsByTagName('body')[0].appendChild(idiv);
}
site(rprocess);
