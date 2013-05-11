	var futurism = function(){};

	futurism.prototype.drawcircle = function(obj, index){
			
		$(obj).wrap(
				//"<div style='display:inline; left:" + position.left + "px; top:" + position.top + "px; height:" + height +"px; border:2px solid blue; width:" + width + "px' />"
			"<div style='display:inline; z-index:" + (index+1) + "' />"
			
		);
		
		if($(obj).attr("radius")!=""){
		
			radius = $(obj).attr("radius");
		
		}else{
		
			radius=100;
			
		}
		
		if($(obj).attr("fill")!=""){
		
			fill = $(obj).attr("fill");
		
		}else{
		
			fill="#000";
			
		}
		
		$(obj).wrap(
			"<canvas id='canvas_" + index + "' width='" + ((parseInt(radius)+1)*2) + "px' height='" + ((parseInt(radius)+1)*2) + "px' />"
		);
		
		var ctx = document.getElementById('canvas_' + index).getContext('2d');
		ctx.beginPath();
		ctx.arc(radius,radius,radius,0,Math.PI*2,true); // Outer circle
		ctx.lineWidth = 1;
		ctx.fillStyle = fill;
		ctx.fill();
		ctx.strokeStyle = fill;
		ctx.stroke();
		
	};
	
	

	futurism.prototype.drawsquare = function(obj, index){
			
		$(obj).wrap(
				//"<div style='display:inline; left:" + position.left + "px; top:" + position.top + "px; height:" + height +"px; border:2px solid blue; width:" + width + "px' />"
			"<div style='display:inline;' />"
			
		);
		
		if($(obj).attr("width")!=""){
		
			width = $(obj).attr("width");
		
		}else{
		
			width=100;
			
		}
		
		if($(obj).attr("fill")!=""){
		
			fill = $(obj).attr("fill");
		
		}else{
		
			fill="#000";
			
		}
		
		$(obj).wrap(
			"<canvas id='canvas_" + index + "' width='" + ((parseInt(width)+1)) + "px' height='" + ((parseInt(width)+1)) + "px' />"
		);
		
		var ctx = document.getElementById('canvas_' + index).getContext('2d');
		ctx.lineWidth = 1;
		ctx.fillStyle = fill;
		ctx.fill();
		ctx.strokeStyle = fill;
		ctx.fillRect(0,0,width,width);
		ctx.stroke();
		
	};
	
	
	futurism.prototype.drawline = function(obj, index){
	
		$(obj).wrap(
				//"<div style='display:inline; left:" + position.left + "px; top:" + position.top + "px; height:" + height +"px; border:2px solid blue; width:" + width + "px' />"
			"<div style='z-index:1000+" + index + "; position:absolute; top:0px; left:0px;' />"
			
		);
		
		if($(obj).attr("start")!=""){
		
			start = $(obj).attr("start").split(",");
		
		}else{
		
			start = new Array(0,0);
			
		}
		
		if($(obj).attr("end")!=""){
		
			end = $(obj).attr("end").split(",");
		
		}else{
		
			end = new Array(0,0);
			
		}
		
		if($(obj).attr("fill")!=""){
		
			fill = $(obj).attr("fill");
		
		}else{
		
			fill="#000";
			
		}
		
		console.log($(document).width());
		
		$(obj).wrap(
			"<canvas id='canvas_" + index + "' width='" + ($(document).width()) + "px' height='" + ($(window).height()) + "px' />"
		);
	
		var ctx = document.getElementById('canvas_' + index).getContext('2d');
		ctx.beginPath();
		ctx.moveTo(start[0], start[1]);
		ctx.lineTo(end[0], end[1]);
		ctx.strokeStyle = fill;
		ctx.stroke();
	
	}
	
	
	futurism.prototype.drawbezier = function(obj, index){
	
		$(obj).wrap(
				//"<div style='display:inline; left:" + position.left + "px; top:" + position.top + "px; height:" + height +"px; border:2px solid blue; width:" + width + "px' />"
			"<div style='z-index:1000+" + index + "; position:absolute; top:0px; left:0px;' />"
			
		);
		
		if($(obj).attr("start")!=""){
		
			start = $(obj).attr("start").split(",");
		
		}else{
		
			start = new Array(0,0);
			
		}
		
		if($(obj).attr("end")!=""){
		
			end = $(obj).attr("end").split(",");
		
		}else{
		
			end = new Array(0,0);
			
		}
		
		if($(obj).attr("middle")!=""){
		
			middle = $(obj).attr("middle").split(",");
		
		}else{
		
			middle = new Array(start[0] - end[0], start[1] - end[1]);
			
		}
		
		if($(obj).attr("fill")!=""){
		
			fill = $(obj).attr("fill");
		
		}else{
		
			fill="#000";
			
		}
		
		$(obj).wrap(
			"<canvas id='canvas_" + index + "' width='" + ($(document).width()) + "px' height='" + ($(window).height()) + "px' />"
		);
	
		var ctx = document.getElementById('canvas_' + index).getContext('2d');
		ctx.beginPath();
		ctx.bezierCurveTo(start[0], start[1], middle[0], middle[1], end[0], end[1]);
		ctx.strokeStyle = fill;
		ctx.stroke();
	
	}
	
	futurism.prototype.reverse = function(obj, index){
	
		text = obj.innerHTML;
			
		var s = "";
		var i = text.length;
		while (i>0) {
			s += text.substring(i-1,i);
			i--;
		}
			
		obj.innerHTML = s;	
		
		if($(obj).attr("time")!=undefined){
		
			time = parseInt($(obj).attr("time"));
		
		}else{
		
			time = 1000;
			
		}

		if($(obj).attr("loop")){

			temp = new futurism;
				
			if($(obj).attr("forever")!=""){
			
				setTimeout( function(){
					temp.reverse(obj);
				}, time);
			
			}else{
			
				setTimeout( function(){
					temp.reverse(obj);
				}, time);
			
			}
				
		}
		
	};
	
	futurism.prototype.wordswap = function(obj, index){
	
		text = obj.innerHTML.split(" ");
			
		var i = text.length, j, tempi, tempj;
		if ( i === 0 ) return false;
		while ( --i ) {
			j = Math.floor( Math.random() * ( i + 1 ) );
			tempi = text[i];
			tempj = text[j];
			text[i] = tempj;
			text[j] = tempi;
		}
			
		obj.innerHTML = text.join(" ");	
		
		if($(obj).attr("time")!=undefined){
		
			time = parseInt($(obj).attr("time"));
		
		}else{
		
			time = 1000;
			
		}

		if($(obj).attr("loop")){

			temp = new futurism;
				
			if($(obj).attr("forever")!=""){
			
				setTimeout( function(){
					temp.wordswap(obj);
				}, time);
			
			}else{
			
				setTimeout( function(){
					temp.wordswap(obj);
				}, time);
			
			}
				
		}
		
	};
				
	futurism.prototype.wordangle = function(obj){
	
		position = $(obj).position();
	
		$(obj)
		.css(
			{
			'left' : position.left,
			'top' : position.top,
			'position' : "absolute",
			'margin-right' : $(obj).width(),
			'-webkit-transform' : "rotate(" + $(obj).attr("angle") + "deg)",
			'-moz-transform' : "rotate(" + $(obj).attr("angle") + "deg)",
			'-o-transform' : "rotation(" + $(obj).attr("angle") + "deg)",
			'-ms-transform' : "rotation(" + $(obj).attr("angle") + "deg)",
			'transform' : "rotation(" + $(obj).attr("angle") + "deg)"}
		);
		
	};
	
	futurism.prototype.textsize = function(obj){
		
		if($(obj).attr("time")!=undefined){
		
			time = parseInt($(obj).attr("time"));
		
		}else{
		
			time = 1000;
			
		}
		
		$(obj).animate({
			"font-size":$(obj).attr("size"),
		  }, time, function() {
			if($(obj).attr("loop")){

					$(obj)
						.animate({"font-size":"100%"},time, function() {
							
							if($(obj).attr("forever")==""){
								
									temp = new futurism;
									temp.textsize(obj);
								
							}
				
						});
				
				}
		  });
	
	};
	
	futurism.prototype.textjump = function(obj){
	
		$(obj).wrap(
				"<div style='display:inline; position:relative; height:" + $(obj).height() +"px' />"
			);
	
		element = $(obj);
		
		if($(obj).attr("time")!=undefined){
		
			time = parseInt($(obj).attr("time"));
		
		}else{
		
			time = 1000;
			
		}
	
		element
			.css("position","relative")
			.animate({
			"top":"-" + element.attr("size"),
		  }, time, element.attr("easing"), function() {
		  
				if($(obj).attr("loop")){							
			
					$(obj)
						.animate({"top":0},time, function() {
						
							if($(obj).attr("forever")!=undefined){
								
								temp = new futurism;
								temp.textjump(obj);
								
							}
				
						});
				
				}
		  });
	
	};
	
	futurism.prototype.expand = function(obj, index){
	
		results = this.preparesplit(obj,"expand",index);
	
		letters = results[0];
		time = parseInt(results[1]);
	
		while(letter = letters.pop()){
		
			position = $(document.getElementById(letter)).position();
			
			if(Math.floor(Math.random()*2)){
			
				left_string = "-";
				top_string = "+";
			
			}else{
			
				left_string = "+";
				top_string = "-";
			
			}
			
			$(document.getElementById(letter))
			.animate({"margin-left":$(obj).attr("size")}
			,time, $(obj).attr("easing"), function() {
				
				if($(obj).attr("loop")){
			
					$(this)
						.animate({"margin-left":"0px"}, parseInt($(obj).attr("time")), function() {
						
							if($(obj).attr("forever")==""){
							
								temp = new futurism;
								temp.expand(obj);
							
							}
				
						});
				
				}
				
			  });
		
			  
		}
		
	};
	
	futurism.prototype.square = function(obj, index){
	
		results = this.preparesplit(obj,"expand",index);
	
		letters = results[0];
		time = parseInt(results[1]);
	
		side = Math.floor((letters.length/4)+1);
		
		top_side = letters.slice(0,side);
		right_side = letters.slice(side,side*2);
		bottom_side = letters.slice(side*2,side*3);
		left_side = letters.slice(side*3,letters.length);
		
		letter_width = $(document.getElementById(top_side[0])).width();
		letter_height = $(document.getElementById(top_side[0])).height()-2;
	
		position = $(document.getElementById(top_side[0])).offset();
	
		for(x=0;x<=top_side.length;x++){	
			
			$(document.getElementById(top_side[x]))
			.css({"position":"fixed" })
			.css({"top": position.top + "px"})
			.css({"left": position.left + ((letter_width*2)*(x+1)) + "px"});
		
		}
		
		position = $(document.getElementById(top_side.pop())).offset();
	
		for(x=0;x<=right_side.length;x++){	
			
			$(document.getElementById(right_side[x]))
			.css({"position":"fixed" })
			.css({"top": parseInt(position.top) + (letter_height*(x+1)) + "px"})
			.css({"left": position.left + (letter_width*2) - (letter_width*3) + "px"});
		
		}
		
		position = $(document.getElementById(right_side.pop())).offset();
		
		for(x=0;x<=bottom_side.length;x++){	
			
			$(document.getElementById(bottom_side[x]))
			.css({"position":"fixed"})
			.css({"top":position.top})
			.css({"left": position.left - ((letter_width*2)*x) + "px"});
		
		}
		
		position = $(document.getElementById(bottom_side.pop())).offset();
		
		for(x=0;x<=left_side.length;x++){	
			
			$(document.getElementById(left_side[x]))
			.css({"position":"fixed"})
			.css({"top":(position.top - letter_height) - (letter_height*x) + "px"})
			.css({"left": position.left + letter_width});
		
		}
		
	};
	
	
	futurism.prototype.circleexpand = function(obj, index){
	
		div_id = "circleexpand";
	
		if(obj.childNodes.length==1){
		
			width = $(obj).width();
			position_main = $(obj).offset();
			
			text = obj.innerHTML;				
			newinnerHTML = "";				
			letters = Array();
			
			for(x=0;x<text.length;x++){
			
				newinnerHTML += "<span id='" + div_id + "_" + index + "_" + x + "'>" + text.substring(x,x+1) + "</span>";
				letters.push(div_id + "_" + index + "_" + x);
			
			}
			
			time=0;
						
			angle = Math.floor(360 / letters.length);
			
			position = $(obj).position();
			
			console.log(position);
			
			width = (letters.length * 10 / 2);	

			last_pos = Array();
			
			$(obj).wrap(
				"<div style='position:fixed; left:" + position_main.left + "px; top:" + (position_main.top + (width)) + 100 + "px;' />"
			);
						
			obj.innerHTML = newinnerHTML;
			
			for(x=letters.length;x!=-1;x--){	
				
				x_pos =  parseInt((width/2) * Math.cos( (angle * x) * (3.14/180) ) );
				
				y_pos = parseInt((width/2) * Math.sin( (angle * x) * (3.14/180) ) );
	
				$(document.getElementById(letters[x]))
				.css("position","fixed")
				.animate(
					  {"top":y_pos + position.top,
					  "left":x_pos + position.left}, 500);
			
			}

		}
		
	};			
	
	futurism.prototype.circle = function(obj, index){
	
		div_id = "circleexpand";
	
		if(obj.childNodes.length==1){
		
			width = $(obj).width();
			position_main = $(obj).offset();
			
			text = obj.innerHTML;				
			newinnerHTML = "";				
			letters = Array();
			
			for(x=0;x<text.length;x++){
			
				newinnerHTML += "<span id='" + div_id + "_" + index + "_" + x + "'>" + text.substring(x,x+1) + "</span>";
				letters.push(div_id + "_" + index + "_" + x);
			
			}
			
			time=0;
						
			angle = Math.floor(360 / letters.length);
			
			position = $(obj).position();
			
			console.log(position);
			
			width = (letters.length * 10 / 2);	

			last_pos = Array();
			
			$(obj).wrap(
				"<div style='position:fixed; left:" + position_main.left + "px; top:" + (position_main.top + (width)) + 100 + "px;' />"
			);
						
			obj.innerHTML = newinnerHTML;
			
			for(x=letters.length;x!=-1;x--){	
				
				x_pos =  parseInt((width/2) * Math.cos( (angle * x) * (3.14/180) ) );
				
				y_pos = parseInt((width/2) * Math.sin( (angle * x) * (3.14/180) ) );
	
				$(document.getElementById(letters[x]))
				.css("position","fixed")
				.css(
					  {"top":y_pos + position.top,
					  "left":x_pos + position.left});
			
			}

		}
		
	};
	
	futurism.prototype.spiral = function(obj, index){
	
		div_id = "spiral";
	
		if(obj.childNodes.length==1){
		
			width = $(obj).width();
			height = $(obj).height();
			
			$(obj).wrap(
				"<div style='display:inline' />"
			);
	
			text = obj.innerHTML;				
			newinnerHTML = "";				
			letters = Array();
			
			for(x=0;x<text.length;x++){
			
				newinnerHTML += "<span id='" + div_id + "_" + index + "_" + x + "'>" + text.substring(x,x+1) + "</span>";
				letters.push(div_id + "_" + index + "_" + x);
			
			}
			
			obj.innerHTML = newinnerHTML;
			
			time=0;
					
			angle = Math.floor(720 / letters.length);
			
			position = $(obj).position();
			
			width = (letters.length * 10 / 2);	

			last_pos = Array();
			
			position = $(obj).offset();
		
			for(x=letters.length;x!=-1;x--){	
				
				x_pos =  parseInt((width-(x*4)/2) * Math.cos( (angle * x) * (3.14/180) ) );
				
				y_pos = parseInt((width-(x*4)/2) * Math.sin( (angle * x) * (3.14/180) ) );
	
				$(document.getElementById(letters[x]))
				.css({"position":"relative" })
				.css({"top":y_pos+(letters.length-x)})
				.css({"left":x_pos+position.left+(letters.length-x)});
				
			}

		}
		
	};
	
	
	futurism.prototype.semicircledown = function(obj, index){
	
		div_id = "semicircledown";
	
		if(obj.childNodes.length==1){
		
			width = $(obj).width();
			height = $(obj).height();
			
			$(obj).wrap(
				"<div style='display:inline' />"
			);
			
			text = obj.innerHTML;
			
			var s = "";
			var i = text.length;
			while (i>0) {
				s += text.substring(i-1,i);
				i--;
			}
			
			text = s;
										
			newinnerHTML = "";				
			letters = Array();
			
			for(x=0;x<text.length;x++){
			
				newinnerHTML += "<span id='" + div_id + "_" + index + "_" + x + "'>" + text.substring(x,x+1) + "</span>";
				letters.push(div_id + "_" + index + "_" + x);
			
			}
			
			obj.innerHTML = newinnerHTML;
			
			time=0;
			
		}else{
		
			letters = Array();
		
			for(x=0;x<obj.childNodes.length;x++){
			
				letters.push(obj.childNodes[x].id);
			
			}
			
			time=1000;
		
		}
	
		angle = Math.floor(180 / letters.length);
		
		position = $(obj).position();
		
		width = (letters.length * 10 / 2);	

		last_pos = Array();
		
		position = $(document.getElementById(letters[0])).position();
	
		for(x=0;x!=letters.length;x++){	
			
			x_pos =  parseInt((width + letters.length/2) * Math.cos( (angle * x) * (3.14/180) ) );
			
			y_pos = parseInt((width + letters.length/2) * Math.sin( (angle * x) * (3.14/180) ) );

			$(document.getElementById(letters[x]))
			.css({"position":"relative" })
			.css({"top":y_pos})
			.css({"left":x_pos});
			
		}
		
	};
	
	futurism.prototype.semicircleup = function(obj, index){
	
		div_id = "semicircleup";
	
		if(obj.childNodes.length==1){
		
			width = $(obj).width();
			height = $(obj).height();
			
			$(obj).wrap(
				"<div style='display:inline' />"
			);
	
			text = obj.innerHTML;

			var s = "";
			var i = text.length;
			while (i>0) {
				s += text.substring(i-1,i);
				i--;
			}
			
			text = s;				
			newinnerHTML = "";				
			letters = Array();
			
			for(x=0;x<text.length;x++){
			
				newinnerHTML += "<span id='" + div_id + "_" + index + "_" + x + "'>" + text.substring(x,x+1) + "</span>";
				letters.push(div_id + "_" + index + "_" + x);
			
			}
			
			obj.innerHTML = newinnerHTML;
			
			time=0;
			
		}else{
		
			letters = Array();
		
			for(x=0;x<obj.childNodes.length;x++){
			
				letters.push(obj.childNodes[x].id);
			
			}
			
			time=1000;
		
		}
	
		angle = Math.floor(-180 / letters.length);
		
		position = $(obj).position();
		
		width = (letters.length * 10 / 2);	

		last_pos = Array();
		
		position = $(document.getElementById(letters[0])).offset();
	
		for(x=0;x!=letters.length;x++){	
			
			x_pos =  parseInt((width + letters.length/2) * Math.cos( (angle * x) * (3.14/180) ) );
			
			y_pos = parseInt((width + letters.length/2) * Math.sin( (angle * x) * (3.14/180) ) );

			$(document.getElementById(letters[x]))
			.css({"position":"relative" })
			.css({"top":y_pos})
			.css({"left":x_pos});
			
		}
		
	};
	
	futurism.prototype.explode = function(obj, index){

		results = this.preparesplit(obj,"explode",index);
	
		letters = results[0];
		time = results[1];
	
		while(letter = letters.pop()){
		
			position = $(document.getElementById(letter)).position();
			
			if(Math.floor(Math.random()*2)){
			
				left_string = "-";
				top_string = "+";
			
			}else{
			
				left_string = "+";
				top_string = "-";
			
			}
			
			doc_width = $(document).width();
			doc_height = $(document).height();
			
			$(document.getElementById(letter))
			  .css("position","relative")
			  .attr("coord_left",position.left)
			  .attr("coord_top",position.top)
			  .animate({
				"left": left_string + Math.floor(Math.random(0,500)*doc_width),
				"top": top_string + Math.floor(Math.random(0,500)*doc_height),
			  }, time, $(obj).attr("easing"), function() {	
			  
				if($(obj).attr("loop")){
					
					$(this)
						.delay(time)
						.css("position","relative")
						.animate({
							"top":"0",
							"left":"0",
							}
						,time, function() {
						
							if($(obj).attr("forever")==""){
			  
								if(this.id.split("_").pop()==0){
								
									temp = new futurism;
									temp.explode(obj);
									delete temp;
									
								}
								
							}
				
						});
				
				}
				
			  });
			  
		}
		
	};
	
	futurism.prototype.surfacewave = function(obj, index){
	
		results = this.preparesplit(obj,"surfacewave",index);
	
		letters = results[0];
		time = results[1];
	
		for(x=0;x<letters.length;x++){
		
			position = $(document.getElementById(letters[x])).position();
			
			$(document.getElementById(letters[x]))
			.css("position","relative")
			.delay((100*x))
			.animate({"top":-20}
			,$(obj).attr("time"), $(obj).attr("easing"), function() {					
				
					$(this).animate({"top":0},$(obj).attr("time"), $(obj).attr("easing"),
					function() {
					
						if(parseInt($(this).attr("id").split("_").pop())+1==letters.length){
						
							if($(obj).attr("loop")){

								temp = new futurism;
								temp.surfacewave(obj);
							
							}

						}
						
					});
				
			  });
		
			  
		}
		
	};
	
	futurism.prototype.fullwave = function(obj, index){
	
		results = this.preparesplit(obj,"expand",index);
	
		letters = results[0];
		time = results[1];
	
		for(x=0;x<letters.length;x++){
		
			position = $(document.getElementById(letters[x])).position();
			
			$(document.getElementById(letters[x]))
			.css("position","relative")
			.delay((10*x))
			.animate({"top":-40}
			,100, $(obj).attr("easing"), function() {					
				
					$(this).animate({"top":40},100, $(obj).attr("easing"),
					function() {
					
						$(this).animate({"top":0},100, $(obj).attr("easing"), function(){
							
							if(parseInt($(this).attr("id").split("_").pop())+1==letters.length){

								temp = new futurism;
								temp.heartbeat(obj);

							}
						
						});
			
					});
				
			  });
		
			  
		}
		
	};
	
	
	
		
	futurism.prototype.rain = function(obj,index){
	
		results = this.preparesplit(obj,"rain",index);
	
		letters = results[0];
		time = results[1];
	
		while(letter = letters.pop()){
		
			position = $(document.getElementById(letter)).position();
			
			if($(obj).attr("time")==""){
			
				time = 500;
			
			}else{
				
				time = parseInt($(obj).attr("time"));
			
			}
			
			$(document.getElementById(letter))
			  .css("position","relative")
			  .attr("coord_top",position.top)
			  .attr("coord_left",position.left)
			  .animate({
				"top":position.top + Math.floor(Math.random(0,1000)*($(document).height()-position.top)),
				"opacity":0
			  }, time, $(obj).attr("easing"), function() {
			  
				if($(obj).attr("loop")){							

					$(this)
						.css("position","relative")
						.animate({
							"top":0
						}	
						,time, function(){
						
							$(this)
							.animate({
								"opacity":100,
							},1,function() {
						
								if($(obj).attr("forever")==""){
				  
									if(this.id.split("_").pop()==0){
									
										temp = new futurism;
										temp.rain(obj);
										
									}
									
								}
					
							});
							
						});
				
				}
				
			  });
			  
		}
		
	};
		
	
	
	futurism.prototype.righthandside = function(obj){

		if($(obj).attr("righthandside")){
		
			width = $(obj).width();
			height = $(obj).height();
			
			$(obj).wrap(
				"<div style='display:inline; border:1px solid red; position:relative; margin-right:" + width + "px; width:" + width + "px; height:" + height +"px' />"
			);
	
			$(obj).attr("righthandside","true");
			
		}
		
		if($(obj).attr("time")==""){
			
			time = 500;
		
		}else{
			
			time = parseInt($(obj).attr("time"));
		
		}
	
		$(obj)
			.css("position","absolute")
			.animate({
				"left":$(document).width() - $(obj).width(),
			  }, time, $(obj).attr("easing"), function(){
			  
				if($(obj).attr("loop")){							

					$(this)
						.css("position","relative")
						.animate({
							"left":0
						}	
						,time, function(){
						
							if($(obj).attr("forever")==""){
									
								temp = new futurism;
								temp.righthandside(obj);
								delete temp;
										
							}
					
						});
				
				}
			  
			  });
			
	
	};
	
	
	futurism.prototype.lefthandside = function(obj){

		if($(obj).attr("lefthandside")){
		
			width = $(obj).width();
			height = $(obj).height();
			
			$(obj).wrap(
				"<div style='display:inline; border:1px solid red; position:relative; margin-left:" + width + "px; width:" + width + "px; height:" + height +"px' />"
			);
	
			$(obj).attr("lefthandside","true");
			
		}
		
		if($(obj).attr("time")==""){
			
			time = 500;
		
		}else{
			
			time = parseInt($(obj).attr("time"));
		
		}
		
		position = $(obj).offset();
	
		$(obj)
			.css("position","relative")
			.animate({
				"left": "-" + position.left,
			  }, time, $(obj).attr("easing"), function(){
			  
				if($(obj).attr("loop")){							

					$(obj)
						.css("position","relative")
						.animate({
							"left":0
						}	
						,time, function(){
						
							if($(obj).attr("forever")==""){
									
								temp = new futurism;
								temp.lefthandside(obj);
								delete temp;
										
							}
					
						});
				
				}
			  
			  });
	
	};
	
	futurism.prototype.bottom = function(obj){
	
		if($(obj).attr("toppos")){
		
			width = $(obj).width();
			height = $(obj).height();
			
			$(obj).wrap(
				"<div style='display:inline; position:relative; margin-left:" + width + "px; width:" + width + "px; height:" + height +"px' />"
			);
	
			$(obj).attr("toppos","true");
			
		}
		
		if($(obj).attr("time")==""){
			
			time = 500;
		
		}else{
			
			time = parseInt($(obj).attr("time"));
		
		}
		
		position = $(obj).offset();
	
		$(obj)
			.css("position","relative")
			.animate({
				"top":($(document).height()-100),
			  }, time, $(obj).attr("easing"), function(){
			  
				if($(obj).attr("loop")){							

					$(obj)
						.css("position","relative")
						.animate({
							"top":0
						}	
						,time, function(){
						
							if($(obj).attr("forever")==""){
									
								temp = new futurism;
								temp.bottom(obj);
								delete temp;
										
							}
					
						});
				
				}
			  
			  });
			
	
	};
	
	futurism.prototype.top = function(obj){
	
		if($(obj).attr("toppos")){
		
			width = $(obj).width();
			height = $(obj).height();
			
			$(obj).wrap(
				"<div style='display:inline; position:relative; margin-left:" + width + "px; width:" + width + "px; height:" + height +"px' />"
			);
	
			$(obj).attr("toppos","true");
			
		}
		
		if($(obj).attr("time")==""){
			
			time = 500;
		
		}else{
			
			time = parseInt($(obj).attr("time"));
		
		}
		
		position = $(obj).offset();
	
		$(obj)
			.css("position","relative")
			.animate({
				"top":"-" + position.top,
			  }, time, $(obj).attr("easing"), function(){
			  
				if($(obj).attr("loop")){							

					$(obj)
						.css("position","relative")
						.animate({
							"top":0
						}	
						,time, function(){
						
							if($(obj).attr("forever")==""){
									
								temp = new futurism;
								temp.top(obj);
								delete temp;
										
							}
					
						});
				
				}
			  
			  });
			
	
	};
	
	futurism.prototype.wordswitch = function(obj){
	
		console.log($(obj).attr("words"));
	
		if($(obj).attr("words")==undefined){
		
			$(obj).attr("words", $(obj).html().split(" ").join(","));
		
		}
	
		if($(obj).attr("position")){
		
			words = $(obj).attr("words").split(",");
			$(obj).html(words[$(obj).attr("position")]);
			if($(obj).attr("position")<words.length-1){
				$(obj).attr("position",parseInt($(obj).attr("position"))+1)
			}else{
				$(obj).attr("position",0);
			}
			
		}else{
		
			words = $(obj).attr("words").split(",");
			$(obj).html(words[1]);
			$(obj).attr("position",0);
		
		}

		setTimeout(function(){
		
						futobj.wordswitch(obj);
		
					}, $(obj).attr("time"));
	
	};
	futurism.prototype.ticker = function(obj){
	
		word = $(obj).html().substring($(obj).html().length-1,$(obj).html().length) + $(obj).html().substring(0,$(obj).html().length-1);
		$(obj).html(word);
		
		if($(obj).attr("time")){
		
			time = $(obj).attr("time");
		
		}else{
		
			time=100;
		
		}
		
		setTimeout(function(){
		
						futobj.ticker(obj);
		
					}, time);
	
	};

	futurism.prototype.hostage = function(obj, index){
	
		results = this.preparesplit(obj,"hostage",index);
	
		letters = results[0];
		time = results[1];
		
		while(letter = letters.pop()){
		
			position = $(document.getElementById(letter)).position();
			
			$(document.getElementById(letter))
			  .delay(time)
			  .animate({
				"font-size": Math.floor(Math.random()*400) + "%",
			  }, time, $(obj).attr("easing"), function() {
			  
				if($(obj).attr("loop")){	
			
					$(this)
						.animate({
							"font-size":"100%",
							}
						,time, function() {
						
							if($(obj).attr("forever")==""){
			  
								if(this.id.split("_").pop()==0){
								
									temp = new futurism;
									temp.hostage(obj);
									
								}
								
							}
				
						});
				
				}
				
			  });
			  
		}
		
	};
	
	futurism.prototype.trumpet = function(obj, index){
	
		results = this.preparesplit(obj,"trumpet",index);
	
		letter = results[0];
		time = results[1];
		
		end = letters.slice(letters.length-5,letters.length);
		
		if($(obj).attr("gradient")){
		
			step = parseInt($(obj).attr("gradient")); 
		
		}else{

			step = 20;
			
		}	
	
		while(letter = end.shift()){
		
			position = $(document.getElementById(letter)).position();
			
			$(document.getElementById(letter))
			  .delay(time)
			  .animate({
				"font-size": (100 + inc) + "%",
			  }, $(obj).attr("time"), $(obj).attr("easing"), function() {
			  
				if($(obj).attr("loop")){							
			
					$(this)
						.animate({
							"font-size":"100%",
							}
						,$(obj).attr("time"), function() {
						
							if($(obj).attr("forever")==""){
			  
								if(this.id.split("_").pop()==(letters.length-1)){
								
									temp = new futurism;
									temp.trumpet(obj);
									
								}
								
							}
				
						});
				
				}
				
			  });
			  
			  inc+=40;
			  
		}
		
	};
	
	futurism.prototype.downgradient = function(obj, index){
	
		results = this.preparesplit(obj,"downgradient",index);
	
		letters = results[0];
		time = results[1];

		if($(obj).attr("gradient")){
		
			step = parseInt($(obj).attr("gradient")); 
		
		}else{

			step = 20;
			
		}	

		total_step = step;
	
		while(letter = letters.pop()){
		
			position = $(document.getElementById(letter)).position();
			
			$(document.getElementById(letter))
			  .delay(time)
			  .animate({
				"font-size": 100 + total_step + "%",
			  }, $(obj).attr("time"), $(obj).attr("easing"), function() {
			  
				if($(obj).attr("loop")){							
			
					$(this)
						.animate({
							"font-size":"100%",
							}
						,$(obj).attr("time"), function() {
						
							if($(obj).attr("forever")){
			  
								if(this.id.split("_").pop()==0){
								
									temp = new futurism;
									temp.downgradient(obj);
									
								}
								
							}
				
						});
				
				}
				
			  });
			  
			  total_step+=step;
			  
		}
		
	};

	futurism.prototype.upgradient = function(obj, index){
	
		results = this.preparesplit(obj,"upgradient",index);
	
		letters = results[0];
		time = results[1];

		if($(obj).attr("gradient")){
		
			step = parseInt($(obj).attr("gradient")); 
		
		}else{

			step = 20;
			
		}	

		total_step = letters.length*step;
	
		while(letter = letters.pop()){
		
			position = $(document.getElementById(letter)).position();
			
			$(document.getElementById(letter))
			  .delay(time)
			  .animate({
				"font-size": 100 + total_step + "%",
			  }, $(obj).attr("time"), $(obj).attr("easing"), function() {
			  
				if($(obj).attr("loop")){							
			
					$(this)
						.animate({
							"font-size":"100%",
							}
						,$(obj).attr("time"), function() {
						
							if($(obj).attr("forever")!=undefined){
							
								if(this.id.split("_").pop()==0){
								
									temp = new futurism;
									temp.upgradient(obj);
									
								}
								
							}
				
						});
				
				}
				
			  });
			  
			  total_step-=step;
			  
		}
		
	};

	
	
	
	
	futurism.prototype.preparesplit = function(obj, div_id, index){
	
		if(obj.childNodes.length==1){
		
			width = $(obj).width();
			height = $(obj).height();
			position = $(obj).offset();
			
			$(obj).wrap(
				//"<div style='display:inline; left:" + position.left + "px; top:" + position.top + "px; height:" + height +"px; border:2px solid blue; width:" + width + "px' />"
				"<div style='display:inline' />"
			);
	
			text = obj.innerHTML;				
			newinnerHTML = "";				
			letters = Array();
			
			for(x=0;x<text.length;x++){
			
				newinnerHTML += "<span id='" + div_id + "_" + index + "_" + x + "'>" + text.substring(x,x+1) + "</span>";
				letters.push(div_id + "_" + index + "_" + x);
			
			}
			
			obj.innerHTML = newinnerHTML;
			
			if($(obj).attr("time")!=""){
				
				time = $(obj).attr("time");
			
			}else{
			
				time = 1000;
			
			}
			
		}else{
		
			letters = Array();
		
			for(x=0;x<obj.childNodes.length;x++){
			
				letters.push(obj.childNodes[x].id);
			
			}
			
			if($(obj).attr("time")!=""){
				
				time = $(obj).attr("time");
			
			}else{
			
				time = 1000;
			
			}
		
		}
		
		return Array(letters,parseInt(time));
	
	};
	
	
	
	
	var futobj = new futurism;

	$(document).ready( function(){
	
		pages=1;
	
		$("[futurismpage]")
			.each(			
			
				function(index, value) {
				
					if($(value).attr("top")!=undefined){
					
						toppos = $(value).attr("top");
					
					}else{
					
						toppos = 0;
					
					}
					
					if($(value).attr("left")!=undefined){
					
						left = $(value).attr("left");
					
					}else{
					
						left = 0;
					
					}
					
					if($(value).attr("opacity")!=undefined){
					
						opacity = $(value).attr("opacity");
					
					}else{
					
						opacity = 1;
					
					}
				
					$(value).wrap(
						"<div style='z-index:" + pages++ + "; position:absolute; top:" + toppos + "; left:" + left + ";' />"
					);
					
					$(value)
						.css("opacity",opacity);
				
				}
			);

		$("[futurism]")
			.each(			
				function(index, value) {
				
				  if($(value).attr("click")==""){
				  
					$(value).on("click", function(){
						futobj[$(value).attr("futurism")](value, index)
					});
				  
				  }else if($(value).attr("mouse")==""){
				  
					$(value).on("mouseenter", function(){
						futobj[$(value).attr("futurism")](value, index)
					});
				  
				  }else if($(value).attr("delay")!=""){
				  
					setTimeout(function(){
						futobj[$(value).attr("futurism")](value, index)
					}, $(value).attr("delay"));
				  
				  }else{
				  
					futobj[$(value).attr("futurism")](value, index);
					
				  }
				  
				}			
			);	
			
	});