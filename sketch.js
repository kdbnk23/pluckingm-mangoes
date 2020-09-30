	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	var boyImg
	
	function preload(){
		boyImg=loadImage("boy.png")
	}

	function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	tree=new Tree(700,400,200,400)
	mango1=new Mango(700,400,50)
	mango2=new Mango(750,300,50)
	mango3=new Mango(725,350,50)
	mango4=new Mango(675,275,50)
	mango5=new Mango(700,200,50)
	stone=new Stone(75,200,50,50)
	ground=new Ground(400,690,800,10)
  	}

	function draw() {
  	rectMode(CENTER);
	  background(0);
	  image(boyImg, 100,600,80,80)
	drawSprites();
	tree.display()
	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	stone.display()
	ground.display()
	}