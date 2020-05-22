function choice(x) {
    return x[Math.floor(Math.random() * x.length)];
}

function generate_one(sphrase) {
    while (1) {
        phrase = choice(sphrase);
        return "<p>" + phrase + "</p>";
    }
}

function generate(sphrase) {
    result = "";
    result += generate_one(sphrase);
    return result;
}

function update() {
    $("#phrases").html(generate(phrases, true));
}

$(function() {
    update();
});