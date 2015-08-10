var pdf;

function setup() {
    createCanvas(600, 200, P2D);
    pdf = createPDF();
    pdf.beginRecord();
}

function draw() {
    background(255);
    fill('#ED225D');
    textSize(100);
    textAlign(CENTER);
    text(frameCount, width / 2, height / 2);
    if (frameCount == 100) {
        noLoop();
        pdf.save();
    }
}
