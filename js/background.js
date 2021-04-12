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

    const circle = new Circle(50, new GradientColor(["rgba(251,175,150,.5)","rgba(122,78,198,.5)"], [0,1], -25,0, 0,50)).pos(200,100,TOP,LEFT);

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
