(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Controller_atlas_", frames: [[0,0,1920,1200]]},
		{name:"Controller_atlas_2", frames: [[1437,273,485,112],[450,626,1268,91],[450,719,1268,91],[450,812,1036,5],[1068,0,367,624],[1437,387,444,88],[450,407,395,71],[0,0,448,884],[1437,0,503,271],[450,0,616,405]]}
];


// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.initialize(ss["Controller_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btnremovebgpreview = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.inv_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btnremovebgpreview();
	this.instance.setTransform(-22,1,0.0988,0.1346);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(0,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.0988,x:-22}}]},1).to({state:[{t:this.instance,p:{scaleX:0.0717,x:-2}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-0.5,264.5,56);


// stage content:
(lib.Controller = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.btn_home.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			 $("#video_ins")[0].src = "home3.mp4";
		}
		
		this.btn_photos.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			 $("#video_ins")[0].src = "photos.mp4";
		}
		
		this.btn_faces.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			 $("#video_ins")[0].src = "faces.mp4";
		}
		
		this.btn_poster.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			 $("#video_ins")[0].src = "poster.mp4";
		}
		
		this.btn_animation.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			 $("#video_ins")[0].src = "animation1.mp4";
		}
		
		this.btn_initials.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			 $("#video_ins")[0].src = "initials.mp4";
		}
		
		this.btn_story.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			 $("#video_ins")[0].src = "story4.mp4";
		}
		
		this.btn_research.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			 $("#video_ins")[0].src = "research.mp4";
		}
		
		this.btn_tree.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			 $("#video_ins")[0].src = "tree.mp4";
		}
		
		this.btn_ad.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			 $("#video_ins")[0].src = "IT-ad.mp4";
		}
		/*
		this.Return.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("brianperel.github.io", "_self");
		}*/
		
		
		
		this.return_btn.addEventListener("click", a);
		
		function a() {
			window.open("../../", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Inv_btns
	this.return_btn = new lib.inv_btn();
	this.return_btn.name = "return_btn";
	this.return_btn.setTransform(1264.9,632.7,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.return_btn, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_ad = new lib.inv_btn();
	this.btn_ad.name = "btn_ad";
	this.btn_ad.setTransform(172.9,629.5,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_ad, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_tree = new lib.inv_btn();
	this.btn_tree.name = "btn_tree";
	this.btn_tree.setTransform(189.6,584.75,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_tree, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_research = new lib.inv_btn();
	this.btn_research.name = "btn_research";
	this.btn_research.setTransform(209.7,536.7,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_research, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_story = new lib.inv_btn();
	this.btn_story.name = "btn_story";
	this.btn_story.setTransform(237.75,491.35,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_story, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_initials = new lib.inv_btn();
	this.btn_initials.name = "btn_initials";
	this.btn_initials.setTransform(222.95,445.5,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_initials, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_animation = new lib.inv_btn();
	this.btn_animation.name = "btn_animation";
	this.btn_animation.setTransform(218.3,399.6,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_animation, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_poster = new lib.inv_btn();
	this.btn_poster.name = "btn_poster";
	this.btn_poster.setTransform(239.6,355,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_poster, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_photos = new lib.inv_btn();
	this.btn_photos.name = "btn_photos";
	this.btn_photos.setTransform(233.55,308.45,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_photos, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_faces = new lib.inv_btn();
	this.btn_faces.name = "btn_faces";
	this.btn_faces.setTransform(245.65,261.7,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_faces, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_home = new lib.inv_btn();
	this.btn_home.name = "btn_home";
	this.btn_home.setTransform(251.65,216.9,0.9907,0.5834,0,0,0,121.4,27.7);
	new cjs.ButtonHelper(this.btn_home, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_home},{t:this.btn_faces},{t:this.btn_photos},{t:this.btn_poster},{t:this.btn_animation},{t:this.btn_initials},{t:this.btn_story},{t:this.btn_research},{t:this.btn_tree},{t:this.btn_ad},{t:this.return_btn}]}).wait(1));

	// Video
	this.video_ins = new lib.an_Video({'id': 'video_ins', 'src':'videos/', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.video_ins.name = "video_ins";
	this.video_ins.setTransform(753.65,426.45,1.9116,1.6966,0,0,0,200.7,151);

	this.timeline.addTween(cjs.Tween.get(this.video_ins).wait(1));

	// Text_btns
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(1190.65,616.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(108.7,201.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(97.2,513.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Return_home
	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(1178.15,613.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// txt_btns_bg
	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(130.5,197.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Title
	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(433.4,79.35,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_6();
	this.instance_6.setTransform(488.2,120.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Title_w_bg
	this.instance_7 = new lib.CachedBmp_8();
	this.instance_7.setTransform(435.7,79.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Background
	this.instance_8 = new lib.Background();
	this.instance_8.setTransform(-6,-7,0.7594,0.6472);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(714,371.5,738.0999999999999,398.20000000000005);
// library properties:
lib.properties = {
	id: 'F2F7059EA197DA4780EF211944722BE1',
	width: 1440,
	height: 757,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Controller_atlas_.png?1588435183840", id:"Controller_atlas_"},
		{src:"images/Controller_atlas_2.png?1588435183840", id:"Controller_atlas_2"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1588435183860", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1588435183860", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1588435183860", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F2F7059EA197DA4780EF211944722BE1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;