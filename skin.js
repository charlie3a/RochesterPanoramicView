// Garden Gnome Software - Skin
// Pano2VR 5.2.3/15990
// Filename: Rochester2014.ggsk
// Generated Fri Nov 12 18:55:37 2021

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/button_19__o.png';
		preLoadImg.src=basePath + 'images/button_42__o.png';
		preLoadImg.src=basePath + 'images/btncloseinstructions__o.png';
		preLoadImg.src=basePath + 'images/btnwebsitelink__o.png';
		preLoadImg.src=basePath + 'images/btnscreensize__o.png';
		preLoadImg.src=basePath + 'images/btncompass__o.png';
		preLoadImg.src=basePath + 'images/btnhotspots__o.png';
		preLoadImg.src=basePath + 'images/btninformation__o.png';
		preLoadImg.src=basePath + 'images/btninstructions__o.png';
		preLoadImg.src=basePath + 'images/btnshow__o.png';
		preLoadImg.src=basePath + 'images/btnhide__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._extinfobox=document.createElement('div');
		this._extinfobox__img=document.createElement('img');
		this._extinfobox__img.className='ggskin ggskin_external';
		this._extinfobox__img.onload=function() {me._extinfobox.ggUpdatePosition();}
		this._extinfobox__img.setAttribute('src',basePath + '');
		this._extinfobox__img['ondragstart']=function() { return false; };
		hs ='';
		this._extinfobox.appendChild(this._extinfobox__img);
		this._extinfobox.ggId="extInfoBox";
		this._extinfobox.ggLeft=-210;
		this._extinfobox.ggTop=-181;
		this._extinfobox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._extinfobox.ggVisible=false;
		this._extinfobox.className='ggskin ggskin_external ';
		this._extinfobox.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 417px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -181px;';
		hs+='visibility : hidden;';
		hs+='width : 443px;';
		hs+='pointer-events:auto;';
		this._extinfobox.setAttribute('style',hs);
		this._extinfobox.style[domTransform + 'Origin']='50% 50%';
		me._extinfobox.ggIsActive=function() {
			return false;
		}
		me._extinfobox.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._extinfobox.onclick=function (e) {
			me._extinfobox.style[domTransition]='none';
			me._extinfobox.style.visibility='hidden';
			me._extinfobox.ggVisible=false;
		}
		this._extinfobox.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			var parentWidth = me._extinfobox.clientWidth;
			var parentHeight = me._extinfobox.clientHeight;
			var aspectRatioDiv = me._extinfobox.clientWidth / me._extinfobox.clientHeight;
			var aspectRatioImg = me._extinfobox__img.naturalWidth / me._extinfobox__img.naturalHeight;
			var currentWidth = me._extinfobox__img.naturalWidth;
			var currentHeight = me._extinfobox__img.naturalHeight;
			me._extinfobox__img.setAttribute('style','position: absolute; left: 0px; top: 0px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
		}
		this._button_19=document.createElement('div');
		this._button_19__img=document.createElement('img');
		this._button_19__img.className='ggskin ggskin_button';
		this._button_19__img.setAttribute('src',basePath + 'images/button_19.png');
		this._button_19__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_19__img.className='ggskin ggskin_button';
		this._button_19__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_19__img);
		this._button_19.appendChild(this._button_19__img);
		this._button_19.ggId="Button 19";
		this._button_19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_19.ggVisible=true;
		this._button_19.className='ggskin ggskin_button ';
		this._button_19.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 419px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._button_19.setAttribute('style',hs);
		this._button_19.style[domTransform + 'Origin']='50% 50%';
		me._button_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_19.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_19.onclick=function (e) {
			me._extinfobox.onclick();
		}
		this._button_19.onmouseover=function (e) {
			me._button_19__img.src=basePath + 'images/button_19__o.png';
		}
		this._button_19.onmouseout=function (e) {
			me._button_19__img.src=basePath + 'images/button_19.png';
		}
		this._button_19.ggUpdatePosition=function (useTransition) {
		}
		this._extinfobox.appendChild(this._button_19);
		this._button_42=document.createElement('div');
		this._button_42__img=document.createElement('img');
		this._button_42__img.className='ggskin ggskin_button';
		this._button_42__img.setAttribute('src',basePath + 'images/button_42.png');
		this._button_42__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_42__img.className='ggskin ggskin_button';
		this._button_42__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_42__img);
		this._button_42.appendChild(this._button_42__img);
		this._button_42.ggId="Button 42";
		this._button_42.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_42.ggVisible=true;
		this._button_42.className='ggskin ggskin_button ';
		this._button_42.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 366px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		this._button_42.setAttribute('style',hs);
		this._button_42.style[domTransform + 'Origin']='50% 50%';
		me._button_42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_42.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_42.onclick=function (e) {
			me.player.openUrl("http:\/\/www.prairieskycam.com\/","_blank");
		}
		this._button_42.onmouseover=function (e) {
			me._button_42__img.src=basePath + 'images/button_42__o.png';
		}
		this._button_42.onmouseout=function (e) {
			me._button_42__img.src=basePath + 'images/button_42.png';
		}
		this._button_42.ggUpdatePosition=function (useTransition) {
		}
		this._extinfobox.appendChild(this._button_42);
		this.divSkin.appendChild(this._extinfobox);
		this._vr_instructions=document.createElement('div');
		this._vr_instructions__img=document.createElement('img');
		this._vr_instructions__img.className='ggskin ggskin_image';
		this._vr_instructions__img.setAttribute('src',basePath + 'images/vr_instructions.png');
		this._vr_instructions__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._vr_instructions__img.className='ggskin ggskin_image';
		this._vr_instructions__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vr_instructions__img);
		this._vr_instructions.appendChild(this._vr_instructions__img);
		this._vr_instructions.ggId="VR_instructions";
		this._vr_instructions.ggLeft=-210;
		this._vr_instructions.ggTop=-181;
		this._vr_instructions.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vr_instructions.ggVisible=true;
		this._vr_instructions.className='ggskin ggskin_image ';
		this._vr_instructions.ggType='image';
		hs ='';
		hs+='height : 417px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -181px;';
		hs+='visibility : inherit;';
		hs+='width : 443px;';
		hs+='pointer-events:auto;';
		this._vr_instructions.setAttribute('style',hs);
		this._vr_instructions.style[domTransform + 'Origin']='50% 50%';
		me._vr_instructions.ggIsActive=function() {
			return false;
		}
		me._vr_instructions.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._vr_instructions.onclick=function (e) {
			me._vr_instructions.style[domTransition]='none';
			me._vr_instructions.style.visibility='hidden';
			me._vr_instructions.ggVisible=false;
		}
		this._vr_instructions.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._btncloseinstructions=document.createElement('div');
		this._btncloseinstructions__img=document.createElement('img');
		this._btncloseinstructions__img.className='ggskin ggskin_button';
		this._btncloseinstructions__img.setAttribute('src',basePath + 'images/btncloseinstructions.png');
		this._btncloseinstructions__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btncloseinstructions__img.className='ggskin ggskin_button';
		this._btncloseinstructions__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btncloseinstructions__img);
		this._btncloseinstructions.appendChild(this._btncloseinstructions__img);
		this._btncloseinstructions.ggId="btnCloseInstructions";
		this._btncloseinstructions.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btncloseinstructions.ggVisible=true;
		this._btncloseinstructions.className='ggskin ggskin_button ';
		this._btncloseinstructions.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 419px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._btncloseinstructions.setAttribute('style',hs);
		this._btncloseinstructions.style[domTransform + 'Origin']='50% 50%';
		me._btncloseinstructions.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btncloseinstructions.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btncloseinstructions.onclick=function (e) {
			me._vr_instructions.onclick();
		}
		this._btncloseinstructions.onmouseover=function (e) {
			me._btncloseinstructions__img.src=basePath + 'images/btncloseinstructions__o.png';
		}
		this._btncloseinstructions.onmouseout=function (e) {
			me._btncloseinstructions__img.src=basePath + 'images/btncloseinstructions.png';
		}
		this._btncloseinstructions.ggUpdatePosition=function (useTransition) {
		}
		this._vr_instructions.appendChild(this._btncloseinstructions);
		this._btnwebsitelink=document.createElement('div');
		this._btnwebsitelink__img=document.createElement('img');
		this._btnwebsitelink__img.className='ggskin ggskin_button';
		this._btnwebsitelink__img.setAttribute('src',basePath + 'images/btnwebsitelink.png');
		this._btnwebsitelink__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btnwebsitelink__img.className='ggskin ggskin_button';
		this._btnwebsitelink__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btnwebsitelink__img);
		this._btnwebsitelink.appendChild(this._btnwebsitelink__img);
		this._btnwebsitelink.ggId="btnWebsiteLink";
		this._btnwebsitelink.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btnwebsitelink.ggVisible=true;
		this._btnwebsitelink.className='ggskin ggskin_button ';
		this._btnwebsitelink.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 366px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		this._btnwebsitelink.setAttribute('style',hs);
		this._btnwebsitelink.style[domTransform + 'Origin']='50% 50%';
		me._btnwebsitelink.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btnwebsitelink.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btnwebsitelink.onclick=function (e) {
			me.player.openUrl("http:\/\/www.prairieskycam.com\/","_blank");
		}
		this._btnwebsitelink.onmouseover=function (e) {
			me._btnwebsitelink__img.src=basePath + 'images/btnwebsitelink__o.png';
		}
		this._btnwebsitelink.onmouseout=function (e) {
			me._btnwebsitelink__img.src=basePath + 'images/btnwebsitelink.png';
		}
		this._btnwebsitelink.ggUpdatePosition=function (useTransition) {
		}
		this._vr_instructions.appendChild(this._btnwebsitelink);
		this.divSkin.appendChild(this._vr_instructions);
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_image';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.png');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img.className='ggskin ggskin_image';
		this._loading_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loading_image__img);
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading image";
		this._loading_image.ggLeft=-157;
		this._loading_image.ggTop=-89;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_image ';
		this._loading_image.ggType='image';
		hs ='';
		hs+='height : 150px;';
		hs+='left : -157px;';
		hs+='position : absolute;';
		hs+='top : -89px;';
		hs+='visibility : inherit;';
		hs+='width : 326px;';
		hs+='pointer-events:auto;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading_image.onclick=function (e) {
			me._loading_image.style[domTransition]='none';
			me._loading_image.style.visibility='hidden';
			me._loading_image.ggVisible=false;
		}
		this._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loading_bar=document.createElement('div');
		this._loading_bar__img=document.createElement('img');
		this._loading_bar__img.className='ggskin ggskin_image';
		this._loading_bar__img.setAttribute('src',basePath + 'images/loading_bar.png');
		this._loading_bar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_bar__img.className='ggskin ggskin_image';
		this._loading_bar__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loading_bar__img);
		this._loading_bar.appendChild(this._loading_bar__img);
		this._loading_bar.ggId="loading bar";
		this._loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_bar.ggVisible=true;
		this._loading_bar.className='ggskin ggskin_image ';
		this._loading_bar.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 116px;';
		hs+='visibility : inherit;';
		hs+='width : 277px;';
		hs+='pointer-events:auto;';
		this._loading_bar.setAttribute('style',hs);
		this._loading_bar.style[domTransform + 'Origin']='0% 50%';
		me._loading_bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_bar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_bar.ggUpdatePosition=function (useTransition) {
		}
		this._loading_image.appendChild(this._loading_bar);
		this.divSkin.appendChild(this._loading_image);
		this._compass=document.createElement('div');
		this._compass__img=document.createElement('img');
		this._compass__img.className='ggskin ggskin_image';
		this._compass__img.setAttribute('src',basePath + 'images/compass.png');
		this._compass__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._compass__img.className='ggskin ggskin_image';
		this._compass__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._compass__img);
		this._compass.appendChild(this._compass__img);
		this._compass.ggId="compass";
		this._compass.ggLeft=-130;
		this._compass.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._compass.ggVisible=true;
		this._compass.className='ggskin ggskin_image ';
		this._compass.ggType='image';
		hs ='';
		hs+='height : 125px;';
		hs+='left : -130px;';
		hs+='position : absolute;';
		hs+='top : -125px;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		this._compass.setAttribute('style',hs);
		this._compass.style[domTransform + 'Origin']='50% 50%';
		me._compass.ggIsActive=function() {
			return false;
		}
		me._compass.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._compass.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._compass_needle=document.createElement('div');
		this._compass_needle__img=document.createElement('img');
		this._compass_needle__img.className='ggskin ggskin_image';
		this._compass_needle__img.setAttribute('src',basePath + 'images/compass_needle.png');
		this._compass_needle__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._compass_needle__img.className='ggskin ggskin_image';
		this._compass_needle__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._compass_needle__img);
		this._compass_needle.appendChild(this._compass_needle__img);
		this._compass_needle.ggId="compass needle";
		this._compass_needle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._compass_needle.ggVisible=true;
		this._compass_needle.className='ggskin ggskin_image ';
		this._compass_needle.ggType='image';
		hs ='';
		hs+='height : 81px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 9px;';
		hs+='pointer-events:auto;';
		this._compass_needle.setAttribute('style',hs);
		this._compass_needle.style[domTransform + 'Origin']='50% 50%';
		me._compass_needle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._compass_needle.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._compass_needle.ggUpdatePosition=function (useTransition) {
		}
		this._compass.appendChild(this._compass_needle);
		this.divSkin.appendChild(this._compass);
		this._image_152=document.createElement('div');
		this._image_152__img=document.createElement('img');
		this._image_152__img.className='ggskin ggskin_image';
		this._image_152__img.setAttribute('src',basePath + 'images/image_152.png');
		this._image_152__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_152__img.className='ggskin ggskin_image';
		this._image_152__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_152__img);
		this._image_152.appendChild(this._image_152__img);
		this._image_152.ggId="Image 152";
		this._image_152.ggLeft=-273;
		this._image_152.ggTop=-399;
		this._image_152.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_152.ggVisible=false;
		this._image_152.className='ggskin ggskin_image ';
		this._image_152.ggType='image';
		hs ='';
		hs+='height : 398px;';
		hs+='left : -273px;';
		hs+='position : absolute;';
		hs+='top : -399px;';
		hs+='visibility : hidden;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		this._image_152.setAttribute('style',hs);
		this._image_152.style[domTransform + 'Origin']='50% 50%';
		me._image_152.ggIsActive=function() {
			return false;
		}
		me._image_152.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_152.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_152);
		this._contcontroller=document.createElement('div');
		this._contcontroller.ggId="contController";
		this._contcontroller.ggLeft=-274;
		this._contcontroller.ggTop=-348;
		this._contcontroller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contcontroller.ggVisible=true;
		this._contcontroller.className='ggskin ggskin_container ';
		this._contcontroller.ggType='container';
		hs ='';
		hs+='height : 347px;';
		hs+='left : -274px;';
		hs+='position : absolute;';
		hs+='top : -348px;';
		hs+='visibility : inherit;';
		hs+='width : 273px;';
		hs+='pointer-events:none;';
		this._contcontroller.setAttribute('style',hs);
		this._contcontroller.style[domTransform + 'Origin']='50% 50%';
		me._contcontroller.ggIsActive=function() {
			return false;
		}
		me._contcontroller.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._contcontroller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._image_154=document.createElement('div');
		this._image_154__img=document.createElement('img');
		this._image_154__img.className='ggskin ggskin_image';
		this._image_154__img.setAttribute('src',basePath + 'images/image_154.png');
		this._image_154__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_154__img.className='ggskin ggskin_image';
		this._image_154__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_154__img);
		this._image_154.appendChild(this._image_154__img);
		this._image_154.ggId="Image 154";
		this._image_154.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_154.ggVisible=true;
		this._image_154.className='ggskin ggskin_image ';
		this._image_154.ggType='image';
		hs ='';
		hs+='height : 335px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		this._image_154.setAttribute('style',hs);
		this._image_154.style[domTransform + 'Origin']='50% 50%';
		me._image_154.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_154.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_154.ggUpdatePosition=function (useTransition) {
		}
		this._contcontroller.appendChild(this._image_154);
		this._imgreadout=document.createElement('div');
		this._imgreadout__img=document.createElement('img');
		this._imgreadout__img.className='ggskin ggskin_image';
		this._imgreadout__img.setAttribute('src',basePath + 'images/imgreadout.png');
		this._imgreadout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._imgreadout__img.className='ggskin ggskin_image';
		this._imgreadout__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._imgreadout__img);
		this._imgreadout.appendChild(this._imgreadout__img);
		this._imgreadout.ggId="imgReadout";
		this._imgreadout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._imgreadout.ggVisible=true;
		this._imgreadout.className='ggskin ggskin_image ';
		this._imgreadout.ggType='image';
		hs ='';
		hs+='height : 63px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		this._imgreadout.setAttribute('style',hs);
		this._imgreadout.style[domTransform + 'Origin']='50% 50%';
		me._imgreadout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._imgreadout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._imgreadout.ggUpdatePosition=function (useTransition) {
		}
		this._contcontroller.appendChild(this._imgreadout);
		this._contreadout=document.createElement('div');
		this._contreadout.ggId="contReadout";
		this._contreadout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contreadout.ggVisible=true;
		this._contreadout.className='ggskin ggskin_container ';
		this._contreadout.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : 227px;';
		hs+='pointer-events:none;';
		this._contreadout.setAttribute('style',hs);
		this._contreadout.style[domTransform + 'Origin']='50% 50%';
		me._contreadout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contreadout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contreadout.ggUpdatePosition=function (useTransition) {
		}
		this._extreadout=document.createElement('div');
		this._extreadout__img=document.createElement('img');
		this._extreadout__img.className='ggskin ggskin_external';
		this._extreadout__img.onload=function() {me._extreadout.ggUpdatePosition();}
		this._extreadout__img.setAttribute('src',basePath + '');
		this._extreadout__img['ondragstart']=function() { return false; };
		hs ='';
		this._extreadout.appendChild(this._extreadout__img);
		this._extreadout.ggId="extReadout";
		this._extreadout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._extreadout.ggVisible=true;
		this._extreadout.className='ggskin ggskin_external ';
		this._extreadout.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 227px;';
		hs+='pointer-events:auto;';
		this._extreadout.setAttribute('style',hs);
		this._extreadout.style[domTransform + 'Origin']='50% 50%';
		me._extreadout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._extreadout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._extreadout.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._extreadout.clientWidth;
			var parentHeight = me._extreadout.clientHeight;
			var aspectRatioDiv = me._extreadout.clientWidth / me._extreadout.clientHeight;
			var aspectRatioImg = me._extreadout__img.naturalWidth / me._extreadout__img.naturalHeight;
			var currentWidth = me._extreadout__img.naturalWidth;
			var currentHeight = me._extreadout__img.naturalHeight;
			me._extreadout__img.setAttribute('style','position: absolute; left: 0px; top: 0px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
		}
		this._contreadout.appendChild(this._extreadout);
		this._contcontroller.appendChild(this._contreadout);
		this._btnscreensize=document.createElement('div');
		this._btnscreensize__img=document.createElement('img');
		this._btnscreensize__img.className='ggskin ggskin_button';
		this._btnscreensize__img.setAttribute('src',basePath + 'images/btnscreensize.png');
		this._btnscreensize__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btnscreensize__img.className='ggskin ggskin_button';
		this._btnscreensize__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btnscreensize__img);
		this._btnscreensize.appendChild(this._btnscreensize__img);
		this._btnscreensize.ggId="btnScreenSize";
		this._btnscreensize.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btnscreensize.ggVisible=true;
		this._btnscreensize.className='ggskin ggskin_button ';
		this._btnscreensize.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		this._btnscreensize.setAttribute('style',hs);
		this._btnscreensize.style[domTransform + 'Origin']='50% 50%';
		me._btnscreensize.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btnscreensize.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btnscreensize.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._btnscreensize.onmouseover=function (e) {
			me._btnscreensize__img.src=basePath + 'images/btnscreensize__o.png';
		}
		this._btnscreensize.onmouseout=function (e) {
			me._btnscreensize__img.src=basePath + 'images/btnscreensize.png';
		}
		this._btnscreensize.ggUpdatePosition=function (useTransition) {
		}
		this._contcontroller.appendChild(this._btnscreensize);
		this._btncompass=document.createElement('div');
		this._btncompass__img=document.createElement('img');
		this._btncompass__img.className='ggskin ggskin_button';
		this._btncompass__img.setAttribute('src',basePath + 'images/btncompass.png');
		this._btncompass__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btncompass__img.className='ggskin ggskin_button';
		this._btncompass__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btncompass__img);
		this._btncompass.appendChild(this._btncompass__img);
		this._btncompass.ggId="btnCompass";
		this._btncompass.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btncompass.ggVisible=true;
		this._btncompass.className='ggskin ggskin_button ';
		this._btncompass.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 158px;';
		hs+='pointer-events:auto;';
		this._btncompass.setAttribute('style',hs);
		this._btncompass.style[domTransform + 'Origin']='50% 50%';
		me._btncompass.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btncompass.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btncompass.onclick=function (e) {
			var flag=me._compass.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._compass.style[domTransition]='none';
			} else {
				me._compass.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._compass.ggParameter.rx=0;me._compass.ggParameter.ry=0;
				me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
			} else {
				me._compass.ggParameter.rx=0;me._compass.ggParameter.ry=129;
				me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
			}
			me._compass.ggPositonActive=!flag;
		}
		this._btncompass.onmouseover=function (e) {
			me._btncompass__img.src=basePath + 'images/btncompass__o.png';
		}
		this._btncompass.onmouseout=function (e) {
			me._btncompass__img.src=basePath + 'images/btncompass.png';
		}
		this._btncompass.ggUpdatePosition=function (useTransition) {
		}
		this._contcontroller.appendChild(this._btncompass);
		this._btnhotspots=document.createElement('div');
		this._btnhotspots__img=document.createElement('img');
		this._btnhotspots__img.className='ggskin ggskin_button';
		this._btnhotspots__img.setAttribute('src',basePath + 'images/btnhotspots.png');
		this._btnhotspots__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btnhotspots__img.className='ggskin ggskin_button';
		this._btnhotspots__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btnhotspots__img);
		this._btnhotspots.appendChild(this._btnhotspots__img);
		this._btnhotspots.ggId="btnHotspots";
		this._btnhotspots.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btnhotspots.ggVisible=true;
		this._btnhotspots.className='ggskin ggskin_button ';
		this._btnhotspots.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 156px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		this._btnhotspots.setAttribute('style',hs);
		this._btnhotspots.style[domTransform + 'Origin']='50% 50%';
		me._btnhotspots.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btnhotspots.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btnhotspots.onclick=function (e) {
			var list=me.findElements("hs_ToSpringfield",false);
			if (list.length>0) {
				var e=list[0];
				var flag=e.ggOpacitiyActive;
			}
			while(list.length>0) {
				var e=list.pop();
				if (me.player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					e.style.opacity='1';
					e.style.visibility=e.ggVisible?'inherit':'hidden';
				} else {
					e.style.opacity='0';
					e.style.visibility='hidden';
				}
				e.ggOpacitiyActive=!flag;
			}
			var list=me.findElements("hs_Route29",false);
			if (list.length>0) {
				var e=list[0];
				var flag=e.ggOpacitiyActive;
			}
			while(list.length>0) {
				var e=list.pop();
				if (me.player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					e.style.opacity='1';
					e.style.visibility=e.ggVisible?'inherit':'hidden';
				} else {
					e.style.opacity='0';
					e.style.visibility='hidden';
				}
				e.ggOpacitiyActive=!flag;
			}
			var list=me.findElements("hs_NorthWalnutStreet",false);
			if (list.length>0) {
				var e=list[0];
				var flag=e.ggOpacitiyActive;
			}
			while(list.length>0) {
				var e=list.pop();
				if (me.player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					e.style.opacity='1';
					e.style.visibility=e.ggVisible?'inherit':'hidden';
				} else {
					e.style.opacity='0';
					e.style.visibility='hidden';
				}
				e.ggOpacitiyActive=!flag;
			}
			var list=me.findElements("hs_ToTaylorville",false);
			if (list.length>0) {
				var e=list[0];
				var flag=e.ggOpacitiyActive;
			}
			while(list.length>0) {
				var e=list.pop();
				if (me.player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					e.style.opacity='1';
					e.style.visibility=e.ggVisible?'inherit':'hidden';
				} else {
					e.style.opacity='0';
					e.style.visibility='hidden';
				}
				e.ggOpacitiyActive=!flag;
			}
			var flag=me._imggreenindicatorhotspots_on.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._imggreenindicatorhotspots_on.style[domTransition]='none';
			} else {
				me._imggreenindicatorhotspots_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._imggreenindicatorhotspots_on.style.opacity='1';
				me._imggreenindicatorhotspots_on.style.visibility=me._imggreenindicatorhotspots_on.ggVisible?'inherit':'hidden';
			} else {
				me._imggreenindicatorhotspots_on.style.opacity='0';
				me._imggreenindicatorhotspots_on.style.visibility='hidden';
			}
			me._imggreenindicatorhotspots_on.ggOpacitiyActive=!flag;
		}
		this._btnhotspots.onmouseover=function (e) {
			me._btnhotspots__img.src=basePath + 'images/btnhotspots__o.png';
		}
		this._btnhotspots.onmouseout=function (e) {
			me._btnhotspots__img.src=basePath + 'images/btnhotspots.png';
		}
		this._btnhotspots.ggUpdatePosition=function (useTransition) {
		}
		this._imggreenindicatorhotspots_off=document.createElement('div');
		this._imggreenindicatorhotspots_off__img=document.createElement('img');
		this._imggreenindicatorhotspots_off__img.className='ggskin ggskin_image';
		this._imggreenindicatorhotspots_off__img.setAttribute('src',basePath + 'images/imggreenindicatorhotspots_off.png');
		this._imggreenindicatorhotspots_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._imggreenindicatorhotspots_off__img.className='ggskin ggskin_image';
		this._imggreenindicatorhotspots_off__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._imggreenindicatorhotspots_off__img);
		this._imggreenindicatorhotspots_off.appendChild(this._imggreenindicatorhotspots_off__img);
		this._imggreenindicatorhotspots_off.ggId="imgGreenIndicatorHotspots_OFF";
		this._imggreenindicatorhotspots_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._imggreenindicatorhotspots_off.ggVisible=true;
		this._imggreenindicatorhotspots_off.className='ggskin ggskin_image ';
		this._imggreenindicatorhotspots_off.ggType='image';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._imggreenindicatorhotspots_off.setAttribute('style',hs);
		this._imggreenindicatorhotspots_off.style[domTransform + 'Origin']='50% 50%';
		me._imggreenindicatorhotspots_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._imggreenindicatorhotspots_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._imggreenindicatorhotspots_off.ggUpdatePosition=function (useTransition) {
		}
		this._btnhotspots.appendChild(this._imggreenindicatorhotspots_off);
		this._imggreenindicatorhotspots_on=document.createElement('div');
		this._imggreenindicatorhotspots_on__img=document.createElement('img');
		this._imggreenindicatorhotspots_on__img.className='ggskin ggskin_image';
		this._imggreenindicatorhotspots_on__img.setAttribute('src',basePath + 'images/imggreenindicatorhotspots_on.png');
		this._imggreenindicatorhotspots_on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._imggreenindicatorhotspots_on__img.className='ggskin ggskin_image';
		this._imggreenindicatorhotspots_on__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._imggreenindicatorhotspots_on__img);
		this._imggreenindicatorhotspots_on.appendChild(this._imggreenindicatorhotspots_on__img);
		this._imggreenindicatorhotspots_on.ggId="imgGreenIndicatorHotspots_ON";
		this._imggreenindicatorhotspots_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._imggreenindicatorhotspots_on.ggVisible=true;
		this._imggreenindicatorhotspots_on.className='ggskin ggskin_image ';
		this._imggreenindicatorhotspots_on.ggType='image';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._imggreenindicatorhotspots_on.setAttribute('style',hs);
		this._imggreenindicatorhotspots_on.style[domTransform + 'Origin']='50% 50%';
		me._imggreenindicatorhotspots_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._imggreenindicatorhotspots_on.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._imggreenindicatorhotspots_on.ggUpdatePosition=function (useTransition) {
		}
		this._btnhotspots.appendChild(this._imggreenindicatorhotspots_on);
		this._contcontroller.appendChild(this._btnhotspots);
		this._btninformation=document.createElement('div');
		this._btninformation__img=document.createElement('img');
		this._btninformation__img.className='ggskin ggskin_button';
		this._btninformation__img.setAttribute('src',basePath + 'images/btninformation.png');
		this._btninformation__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btninformation__img.className='ggskin ggskin_button';
		this._btninformation__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btninformation__img);
		this._btninformation.appendChild(this._btninformation__img);
		this._btninformation.ggId="btnInformation";
		this._btninformation.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btninformation.ggVisible=true;
		this._btninformation.className='ggskin ggskin_button ';
		this._btninformation.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 192px;';
		hs+='visibility : inherit;';
		hs+='width : 195px;';
		hs+='pointer-events:auto;';
		this._btninformation.setAttribute('style',hs);
		this._btninformation.style[domTransform + 'Origin']='50% 50%';
		me._btninformation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btninformation.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btninformation.onclick=function (e) {
			me._extinfobox.ggVisible = !me._extinfobox.ggVisible;
			var flag=me._extinfobox.ggVisible;
			me._extinfobox.style[domTransition]='none';
			me._extinfobox.style.visibility=((flag)&&(Number(me._extinfobox.style.opacity)>0||!me._extinfobox.style.opacity))?'inherit':'hidden';
		}
		this._btninformation.onmouseover=function (e) {
			me._btninformation__img.src=basePath + 'images/btninformation__o.png';
		}
		this._btninformation.onmouseout=function (e) {
			me._btninformation__img.src=basePath + 'images/btninformation.png';
		}
		this._btninformation.ggUpdatePosition=function (useTransition) {
		}
		this._contcontroller.appendChild(this._btninformation);
		this._btninstructions=document.createElement('div');
		this._btninstructions__img=document.createElement('img');
		this._btninstructions__img.className='ggskin ggskin_button';
		this._btninstructions__img.setAttribute('src',basePath + 'images/btninstructions.png');
		this._btninstructions__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btninstructions__img.className='ggskin ggskin_button';
		this._btninstructions__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btninstructions__img);
		this._btninstructions.appendChild(this._btninstructions__img);
		this._btninstructions.ggId="btnInstructions";
		this._btninstructions.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btninstructions.ggVisible=true;
		this._btninstructions.className='ggskin ggskin_button ';
		this._btninstructions.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 229px;';
		hs+='visibility : inherit;';
		hs+='width : 203px;';
		hs+='pointer-events:auto;';
		this._btninstructions.setAttribute('style',hs);
		this._btninstructions.style[domTransform + 'Origin']='50% 50%';
		me._btninstructions.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btninstructions.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btninstructions.onclick=function (e) {
			me._vr_instructions.ggVisible = !me._vr_instructions.ggVisible;
			var flag=me._vr_instructions.ggVisible;
			me._vr_instructions.style[domTransition]='none';
			me._vr_instructions.style.visibility=((flag)&&(Number(me._vr_instructions.style.opacity)>0||!me._vr_instructions.style.opacity))?'inherit':'hidden';
		}
		this._btninstructions.onmouseover=function (e) {
			me._btninstructions__img.src=basePath + 'images/btninstructions__o.png';
		}
		this._btninstructions.onmouseout=function (e) {
			me._btninstructions__img.src=basePath + 'images/btninstructions.png';
		}
		this._btninstructions.ggUpdatePosition=function (useTransition) {
		}
		this._contcontroller.appendChild(this._btninstructions);
		this._btnprairieskycam=document.createElement('div');
		this._btnprairieskycam__img=document.createElement('img');
		this._btnprairieskycam__img.className='ggskin ggskin_button';
		this._btnprairieskycam__img.setAttribute('src',basePath + 'images/btnprairieskycam.png');
		this._btnprairieskycam__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btnprairieskycam__img.className='ggskin ggskin_button';
		this._btnprairieskycam__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btnprairieskycam__img);
		this._btnprairieskycam.appendChild(this._btnprairieskycam__img);
		this._btnprairieskycam.ggId="btnPrairieSkyCam";
		this._btnprairieskycam.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btnprairieskycam.ggVisible=true;
		this._btnprairieskycam.className='ggskin ggskin_button ';
		this._btnprairieskycam.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		this._btnprairieskycam.setAttribute('style',hs);
		this._btnprairieskycam.style[domTransform + 'Origin']='50% 50%';
		me._btnprairieskycam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btnprairieskycam.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btnprairieskycam.onclick=function (e) {
			me.player.openUrl("http:\/\/www.prairieskycam.com\/","_blank");
		}
		this._btnprairieskycam.onmouseover=function (e) {
			me.elementMouseOver['btnprairieskycam']=true;
		}
		this._btnprairieskycam.onmouseout=function (e) {
			me._btnprairieskycam.style[domTransition]='none';
			me._btnprairieskycam.ggParameter.sx=1;me._btnprairieskycam.ggParameter.sy=1;
			me._btnprairieskycam.style[domTransform]=parameterToTransform(me._btnprairieskycam.ggParameter);
			me.elementMouseOver['btnprairieskycam']=false;
		}
		this._btnprairieskycam.ontouchend=function (e) {
			me.elementMouseOver['btnprairieskycam']=false;
		}
		this._btnprairieskycam.ggUpdatePosition=function (useTransition) {
		}
		this._contcontroller.appendChild(this._btnprairieskycam);
		this.divSkin.appendChild(this._contcontroller);
		this._btnshow=document.createElement('div');
		this._btnshow__img=document.createElement('img');
		this._btnshow__img.className='ggskin ggskin_button';
		this._btnshow__img.setAttribute('src',basePath + 'images/btnshow.png');
		this._btnshow__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btnshow__img.className='ggskin ggskin_button';
		this._btnshow__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btnshow__img);
		this._btnshow.appendChild(this._btnshow__img);
		this._btnshow.ggId="btnShow";
		this._btnshow.ggLeft=-127;
		this._btnshow.ggTop=-48;
		this._btnshow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btnshow.ggVisible=false;
		this._btnshow.className='ggskin ggskin_button ';
		this._btnshow.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -127px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : hidden;';
		hs+='width : 107px;';
		hs+='pointer-events:auto;';
		this._btnshow.setAttribute('style',hs);
		this._btnshow.style[domTransform + 'Origin']='50% 50%';
		me._btnshow.ggIsActive=function() {
			return false;
		}
		me._btnshow.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._btnshow.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._contcontroller.style[domTransition]='none';
			} else {
				me._contcontroller.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._contcontroller.ggParameter.rx=0;me._contcontroller.ggParameter.ry=0;
			me._contcontroller.style[domTransform]=parameterToTransform(me._contcontroller.ggParameter);
			me._btnshow.style[domTransition]='none';
			me._btnshow.style.visibility='hidden';
			me._btnshow.ggVisible=false;
			me._btnhide.style[domTransition]='none';
			me._btnhide.style.visibility=(Number(me._btnhide.style.opacity)>0||!me._btnhide.style.opacity)?'inherit':'hidden';
			me._btnhide.ggVisible=true;
		}
		this._btnshow.onmouseover=function (e) {
			me._btnshow__img.src=basePath + 'images/btnshow__o.png';
		}
		this._btnshow.onmouseout=function (e) {
			me._btnshow__img.src=basePath + 'images/btnshow.png';
		}
		this._btnshow.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._btnshow);
		this._btnhide=document.createElement('div');
		this._btnhide__img=document.createElement('img');
		this._btnhide__img.className='ggskin ggskin_button';
		this._btnhide__img.setAttribute('src',basePath + 'images/btnhide.png');
		this._btnhide__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._btnhide__img.className='ggskin ggskin_button';
		this._btnhide__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._btnhide__img);
		this._btnhide.appendChild(this._btnhide__img);
		this._btnhide.ggId="btnHide";
		this._btnhide.ggLeft=-127;
		this._btnhide.ggTop=-48;
		this._btnhide.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btnhide.ggVisible=true;
		this._btnhide.className='ggskin ggskin_button ';
		this._btnhide.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -127px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 107px;';
		hs+='pointer-events:auto;';
		this._btnhide.setAttribute('style',hs);
		this._btnhide.style[domTransform + 'Origin']='50% 50%';
		me._btnhide.ggIsActive=function() {
			return false;
		}
		me._btnhide.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._btnhide.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._contcontroller.style[domTransition]='none';
			} else {
				me._contcontroller.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._contcontroller.ggParameter.rx=0;me._contcontroller.ggParameter.ry=350;
			me._contcontroller.style[domTransform]=parameterToTransform(me._contcontroller.ggParameter);
			me._btnhide.style[domTransition]='none';
			me._btnhide.style.visibility='hidden';
			me._btnhide.ggVisible=false;
			me._btnshow.style[domTransition]='none';
			me._btnshow.style.visibility=(Number(me._btnshow.style.opacity)>0||!me._btnshow.style.opacity)?'inherit':'hidden';
			me._btnshow.ggVisible=true;
		}
		this._btnhide.onmouseover=function (e) {
			me._btnhide__img.src=basePath + 'images/btnhide__o.png';
		}
		this._btnhide.onmouseout=function (e) {
			me._btnhide__img.src=basePath + 'images/btnhide.png';
		}
		this._btnhide.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._btnhide);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._extinfobox.ggText=me.ggUserdata.comment;
			me._extinfobox__img.src=me._extinfobox.ggText;
			me._loading_image.style[domTransition]='none';
			me._loading_image.style.visibility='hidden';
			me._loading_image.ggVisible=false;
			me._compass_needle.style[domTransition]='none';
			me._compass_needle.ggParameter.a=me.ggUserdata.source;
			me._compass_needle.style[domTransform]=parameterToTransform(me._compass_needle.ggParameter);
			me._extreadout.ggText=me.ggUserdata.information;
			me._extreadout__img.src=me._extreadout.ggText;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading_image.style[domTransition]='none';
			me._loading_image.style.visibility=(Number(me._loading_image.style.opacity)>0||!me._loading_image.style.opacity)?'inherit':'hidden';
			me._loading_image.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._loading_bar.ggParameter) {
			hs+=parameterToTransform(me._loading_bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar.style[domTransform]=hs;
		var hs='';
		if (me._compass_needle.ggParameter) {
			hs+=parameterToTransform(me._compass_needle.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanN() + 0)) + 'deg) ';
		me._compass_needle.style[domTransform]=hs;
		if (me.elementMouseOver['btnprairieskycam']) {
			me._btnprairieskycam.style[domTransition]='none';
			me._btnprairieskycam.ggParameter.sx=1.05;me._btnprairieskycam.ggParameter.sy=1.05;
			me._btnprairieskycam.style[domTransform]=parameterToTransform(me._btnprairieskycam.ggParameter);
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='hs_ToTaylorville') {
			this.__div=document.createElement('div');
			this.__div.ggId="hs_ToTaylorville";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 140px;';
			hs+='position : absolute;';
			hs+='top : 331px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:none;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._hs_img_aerial04=document.createElement('div');
			this._hs_img_aerial04__img=document.createElement('img');
			this._hs_img_aerial04__img.className='ggskin ggskin_image';
			this._hs_img_aerial04__img.setAttribute('src',basePath + 'images/hs_img_aerial04.png');
			this._hs_img_aerial04__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hs_img_aerial04__img.className='ggskin ggskin_image';
			this._hs_img_aerial04__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hs_img_aerial04__img);
			this._hs_img_aerial04.appendChild(this._hs_img_aerial04__img);
			this._hs_img_aerial04.ggId="hs_img_aerial04";
			this._hs_img_aerial04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hs_img_aerial04.ggVisible=true;
			this._hs_img_aerial04.className='ggskin ggskin_image ';
			this._hs_img_aerial04.ggType='image';
			hs ='';
			hs+='height : 61px;';
			hs+='left : -115px;';
			hs+='position : absolute;';
			hs+='top : -39px;';
			hs+='visibility : inherit;';
			hs+='width : 178px;';
			hs+='pointer-events:none;';
			this._hs_img_aerial04.setAttribute('style',hs);
			this._hs_img_aerial04.style[domTransform + 'Origin']='50% 50%';
			me._hs_img_aerial04.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hs_img_aerial04.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hs_img_aerial04.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hs_img_aerial04);
			this.ggUse3d=true;
			this.gg3dDistance=600;
		} else
		if (hotspot.skinid=='hs_NorthWalnutStreet') {
			this.__div=document.createElement('div');
			this.__div.ggId="hs_NorthWalnutStreet";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 170px;';
			hs+='position : absolute;';
			hs+='top : 449px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:none;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._hs_img_aerial03=document.createElement('div');
			this._hs_img_aerial03__img=document.createElement('img');
			this._hs_img_aerial03__img.className='ggskin ggskin_image';
			this._hs_img_aerial03__img.setAttribute('src',basePath + 'images/hs_img_aerial03.png');
			this._hs_img_aerial03__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hs_img_aerial03__img.className='ggskin ggskin_image';
			this._hs_img_aerial03__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hs_img_aerial03__img);
			this._hs_img_aerial03.appendChild(this._hs_img_aerial03__img);
			this._hs_img_aerial03.ggId="hs_img_aerial03";
			this._hs_img_aerial03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hs_img_aerial03.ggVisible=true;
			this._hs_img_aerial03.className='ggskin ggskin_image ';
			this._hs_img_aerial03.ggType='image';
			hs ='';
			hs+='height : 79px;';
			hs+='left : -129px;';
			hs+='position : absolute;';
			hs+='top : -42px;';
			hs+='visibility : inherit;';
			hs+='width : 260px;';
			hs+='pointer-events:none;';
			this._hs_img_aerial03.setAttribute('style',hs);
			this._hs_img_aerial03.style[domTransform + 'Origin']='50% 50%';
			me._hs_img_aerial03.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hs_img_aerial03.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hs_img_aerial03.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hs_img_aerial03);
			this.ggUse3d=true;
			this.gg3dDistance=600;
		} else
		if (hotspot.skinid=='hs_Route29') {
			this.__div=document.createElement('div');
			this.__div.ggId="hs_Route29";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 141px;';
			hs+='position : absolute;';
			hs+='top : 218px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:none;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._hs_img_aerial02=document.createElement('div');
			this._hs_img_aerial02__img=document.createElement('img');
			this._hs_img_aerial02__img.className='ggskin ggskin_image';
			this._hs_img_aerial02__img.setAttribute('src',basePath + 'images/hs_img_aerial02.png');
			this._hs_img_aerial02__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hs_img_aerial02__img.className='ggskin ggskin_image';
			this._hs_img_aerial02__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hs_img_aerial02__img);
			this._hs_img_aerial02.appendChild(this._hs_img_aerial02__img);
			this._hs_img_aerial02.ggId="hs_img_aerial02";
			this._hs_img_aerial02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hs_img_aerial02.ggVisible=true;
			this._hs_img_aerial02.className='ggskin ggskin_image ';
			this._hs_img_aerial02.ggType='image';
			hs ='';
			hs+='height : 38px;';
			hs+='left : -98px;';
			hs+='position : absolute;';
			hs+='top : -21px;';
			hs+='visibility : inherit;';
			hs+='width : 179px;';
			hs+='pointer-events:none;';
			this._hs_img_aerial02.setAttribute('style',hs);
			this._hs_img_aerial02.style[domTransform + 'Origin']='50% 50%';
			me._hs_img_aerial02.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hs_img_aerial02.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hs_img_aerial02.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hs_img_aerial02);
			this.ggUse3d=true;
			this.gg3dDistance=600;
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="hs_ToSpringfield";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 134px;';
			hs+='position : absolute;';
			hs+='top : 111px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:none;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._hs_img_aerial01=document.createElement('div');
			this._hs_img_aerial01__img=document.createElement('img');
			this._hs_img_aerial01__img.className='ggskin ggskin_image';
			this._hs_img_aerial01__img.setAttribute('src',basePath + 'images/hs_img_aerial01.png');
			this._hs_img_aerial01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hs_img_aerial01__img.className='ggskin ggskin_image';
			this._hs_img_aerial01__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hs_img_aerial01__img);
			this._hs_img_aerial01.appendChild(this._hs_img_aerial01__img);
			this._hs_img_aerial01.ggId="hs_img_aerial01";
			this._hs_img_aerial01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hs_img_aerial01.ggVisible=true;
			this._hs_img_aerial01.className='ggskin ggskin_image ';
			this._hs_img_aerial01.ggType='image';
			hs ='';
			hs+='height : 52px;';
			hs+='left : -105px;';
			hs+='position : absolute;';
			hs+='top : -30px;';
			hs+='visibility : inherit;';
			hs+='width : 224px;';
			hs+='pointer-events:none;';
			this._hs_img_aerial01.setAttribute('style',hs);
			this._hs_img_aerial01.style[domTransform + 'Origin']='50% 50%';
			me._hs_img_aerial01.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hs_img_aerial01.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hs_img_aerial01.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hs_img_aerial01);
			this.ggUse3d=true;
			this.gg3dDistance=600;
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};