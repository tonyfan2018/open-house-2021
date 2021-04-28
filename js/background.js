var frame = new Frame({
    scaling: "full",
    captureMouse: true,
    rollover: true,
    allowDefault: true,
    assets:["loop_1.mp3", "loop_2.mp3", "loop_3.mp3", "loop_4.mp3", "music.mp3", "modem.mp3"],
    path:"assets/",
    progress: new ProgressBar({foregroundColor:"#9966bb", backgroundColor:"#ffffff", borderWidth:"0", barType:"circle"})
});

frame.on("ready", () => {
    zog("ready from ZIM Frame");

    const stage = frame.stage;
    const stageW = frame.width - 100;
    const stageH = frame.height
    let modem = asset("modem.mp3").play({volume:2});
    let loop1 = asset("loop_1.mp3").play({volume:2,loop:true});
    let loop2 = asset("loop_2.mp3").play({volume:0.1,loop:true});
    let loop3 = asset("loop_3.mp3").play({volume:0.1,loop:true});
    let loop4 = asset("loop_4.mp3").play({volume:2,loop:true});
    let music = asset("music.mp3").play({volume:2,loop:true});
    
    var r1;
    var r2;
    if(stageW < 1200 && stageW > 700){
        r1 = 120;
        r2 = 40;
    }else if(stageW <= 700){
        r1 = 100;
        r2 = 32;
    }else{
        r1 = 150;
        r2 = 50;
    }

    var posX = series(0,0,30,30,30,30);
    var posY = series(-130, -130, 0, 0, 30, 30);
    var posH = series(CENTER,CENTER, LEFT,LEFT, RIGHT,RIGHT);
    var posV = series(TOP,TOP, CENTER,CENTER, BOTTOM, BOTTOM );
    var movs = series(230, 80, 200);
    var rots = series(30, 270, 150);

    loop(3, (i) => {
        const bigCircle_i = new Circle(r1,new GradientColor(["rgba(251,175,150,.3)","rgba(122,78,198,.3)"],[0,1], -150,0, 0,150))
            .pos(posX(),posY(),posH(),posV());
        const smallCircle_i = new Circle(r2,new GradientColor(["rgba(122,78,198,.5)","rgba(122,78,198,.5)"],[0,1], -30,0, 0, 30))
            .pos(posX(),posY(),posH(),posV())
            .mov(-20,movs())
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
            sinkForce: 6, // force towards sink
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
