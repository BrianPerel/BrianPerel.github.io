(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Controller_atlas_", frames: [[0,0,1920,1200]]},
		{name:"Controller_atlas_2", frames: [[0,1029,580,133],[515,705,1312,160],[515,867,1312,160],[515,0,483,703],[0,0,513,989],[1000,407,540,293],[1000,0,616,405]]}
];


// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.initialize(ss["Controller_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btnremovebgpreview = function() {
	this.initialize(ss["Controller_atlas_2"]);
	this.gotoAndStop(6);
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
	this.instance.setTransform(-20,-1,0.0988,0.1346);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(0,-0.45,0.4178,0.4178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.0988,x:-20}}]},1).to({state:[{t:this.instance,p:{scaleX:0.0717,x:3}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-1,262.3,56.1);


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
			 $("#video_ins")[0].src = "home.mp4";
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
			 $("#video_ins")[0].src = "animation.mp4";
		}
		
		this.btn_initials.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			 $("#video_ins")[0].src = "initials1.mp4";
		}
		
		this.btn_story.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			 $("#video_ins")[0].src = "story1.mp4";
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Inv_btns
	this.btn_ad = new lib.inv_btn();
	this.btn_ad.name = "btn_ad";
	this.btn_ad.setTransform(156.3,643.95,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_ad, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_tree = new lib.inv_btn();
	this.btn_tree.name = "btn_tree";
	this.btn_tree.setTransform(156.3,591.95,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_tree, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_research = new lib.inv_btn();
	this.btn_research.name = "btn_research";
	this.btn_research.setTransform(156.3,540.95,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_research, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_story = new lib.inv_btn();
	this.btn_story.name = "btn_story";
	this.btn_story.setTransform(156.3,488.95,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_story, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_initials = new lib.inv_btn();
	this.btn_initials.name = "btn_initials";
	this.btn_initials.setTransform(156.3,440,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_initials, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_animation = new lib.inv_btn();
	this.btn_animation.name = "btn_animation";
	this.btn_animation.setTransform(156.3,388.05,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_animation, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_poster = new lib.inv_btn();
	this.btn_poster.name = "btn_poster";
	this.btn_poster.setTransform(156.3,334.05,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_poster, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_photos = new lib.inv_btn();
	this.btn_photos.name = "btn_photos";
	this.btn_photos.setTransform(156.3,279.05,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_photos, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_faces = new lib.inv_btn();
	this.btn_faces.name = "btn_faces";
	this.btn_faces.setTransform(156.3,226.05,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_faces, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.btn_home = new lib.inv_btn();
	this.btn_home.name = "btn_home";
	this.btn_home.setTransform(156.3,176.05,1.1967,0.6755,0,0,0,121.4,27.4);
	new cjs.ButtonHelper(this.btn_home, 0, 1, 2, false, new lib.inv_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_home},{t:this.btn_faces},{t:this.btn_photos},{t:this.btn_poster},{t:this.btn_animation},{t:this.btn_initials},{t:this.btn_story},{t:this.btn_research},{t:this.btn_tree},{t:this.btn_ad}]}).wait(1));

	// Video
	this.video_ins = new lib.an_Video({'id': 'video_ins', 'src':'videos/', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.video_ins.name = "video_ins";
	this.video_ins.setTransform(593.8,397.5,1.3525,1.9182,0,0,0,200.6,150.8);

	this.timeline.addTween(cjs.Tween.get(this.video_ins).wait(1));

	// Text_btns
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(59.8,163.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(50.55,513.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// txt_btns_bg
	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(53.05,156.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Title
	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(402.75,26.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Title_w_bg
	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(405.15,26.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Background
	this.instance_5 = new lib.Background();
	this.instance_5.setTransform(1,0,0.533,0.6397);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(499.1,384,562.1,383.6);
// library properties:
lib.properties = {
	id: 'F2F7059EA197DA4780EF211944722BE1',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Controller_atlas_.png?1588207435314", id:"Controller_atlas_"},
		{src:"images/Controller_atlas_2.png?1588207435314", id:"Controller_atlas_2"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1588207435331", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1588207435331", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1588207435331", id:"an.Video"}
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