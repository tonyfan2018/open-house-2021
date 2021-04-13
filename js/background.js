var frame = new Frame({
    scaling: "full",
    captureMouse: true,
    rollover: true,
    allowDefault: true
});

frame.on("ready", () => {
    zog("ready from ZIM Frame");

    const stage = frame.stage;
    const stageW = frame.width;
    const stageH = frame.height

    var posY = series(-100, -100, 0, 0, 100, 100);
    var posH = series(CENTER,CENTER, LEFT,LEFT, RIGHT,RIGHT);
    var posV = series(TOP,TOP, CENTER,CENTER, BOTTOM, BOTTOM );
    var movs = series(250, 120, -200);
    var rots = series(30, 270, -50);

    loop(3, (i) => {
        const bigCircle_i = new Circle(150,new GradientColor(["rgba(251,175,150,.3)","rgba(122,78,198,.3)"],[0,1], -150,0, 0,150))
            .pos(0,posY(),posH(),posV());
        const smallCircle_i = new Circle(50,new GradientColor(["rgba(122,78,198,.5)","rgba(122,78,198,.5)"],[0,1], -30,0, 0, 30))
            .pos(0,posY(),posH(),posV())
            .mov(-30,movs())
            .rot(rots());
    })

    const sink = new Circle(10, pink)
        .pos(0, 200, LEFT, CENTER)
        .alp(0)
        .wiggle("x", stageW / 2, 200, 500, 1000, 2000)
        .wiggle("y", stageH / 2, 200, 200, 1000, 2000);

    stage.on("stagemousemove", () => {
        sink.stopAnimate();
    }, null, true);


    stage.on("stagemousemove", () => {
        sink.loc(frame.mouseX, frame.mouseY);
    });


    const emitter = new Emitter({
            gravity: 0,
            obj: {
                type: "shape",
                s: ["rgba(251,175,150,.5)", "rgba(122,78,198,.5)"],
                ss: 0.5
            },
            sink: sink,
            sinkForce: 5, // force towards sink
            force: 1, // initial force
            angle: -90, // start all particles pointing up
            life: 4000, // last over 4 seconds
            decayTime: 2000 // fade out over the last 2 seconds
        })
        .center()
        .alp(0.1)
        .mov(0, -600);

    stage.on("stagemousedown", () => {
        emitter.pauseEmitter(!emitter.emitterPaused, null, true);
    });


}); // end of ready

frame.canvas.style.position = "absolute";
frame.canvas.style.zIndex = -10;
// frame.canvas.style.pointerEvents = "none";
