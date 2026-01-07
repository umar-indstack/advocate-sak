// Script block 1
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = 'compiled';

// Script block 2 - setREVStartSize function
function setREVStartSize(e){
	//window.requestAnimationFrame(function() {
		window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;
		window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;
		try {
			var pw = document.getElementById(e.c).parentNode.offsetWidth,
				newh;
			pw = pw===0 || isNaN(pw) || (e.l=="fullwidth" || e.layout=="fullwidth") ? window.RSIW : pw;
			e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
			e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
			e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
			e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
			e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
			e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
			e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);
			if(e.layout==="fullscreen" || e.l==="fullscreen")
				newh = Math.max(e.mh,window.RSIH);
			else{
				e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
				for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];
				e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
				e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
				for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
									
				var nl = new Array(e.rl.length),
					ix = 0,
					sl;
				e.tabw = e.tabhide>=pw ? 0 : e.tabw;
				e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
				e.tabh = e.tabhide>=pw ? 0 : e.tabh;
				e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;
				for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
				sl = nl[0];
				for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}
				var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);
				newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
			}
			var el = document.getElementById(e.c);
			if (el!==null && el) el.style.height = newh+"px";
			el = document.getElementById(e.c+"_wrapper");
			if (el!==null && el) {
				el.style.height = newh+"px";
				el.style.display = "block";
			}
		} catch(e){
			console.log("Failure at Presize of Slider:" + e)
		}
	//});
  }

// Script block 3 - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-P3VGC2M2NL');

// Script block 4 - Google Analytics (AW)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16448034128');

// Script block 5 - RS Modules initialization
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = 'compiled';

// Script block 6 - Lazy load observer
const lazyloadRunObserver = () => {
	const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
	const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
		entries.forEach( ( entry ) => {
			if ( entry.isIntersecting ) {
				let lazyloadBackground = entry.target;
				if( lazyloadBackground ) {
					lazyloadBackground.classList.add( 'e-lazyloaded' );
				}
				lazyloadBackgroundObserver.unobserve( entry.target );
			}
		});
	}, { rootMargin: '200px 0px 200px 0px' } );
	lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
		lazyloadBackgroundObserver.observe( lazyloadBackground );
	} );
};
const events = [
	'DOMContentLoaded',
	'elementor/lazyload/observe',
];
events.forEach( ( event ) => {
	document.addEventListener( event, lazyloadRunObserver );
} );

// Script block 7 - RevSlider error handler
if(typeof revslider_showDoubleJqueryError === "undefined") {
	function revslider_showDoubleJqueryError(sliderID) {
		console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");
		console.log("To fix this, you can:");
		console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");
		console.log("2. Find the double jQuery.js inclusion and remove it");
		return "Double Included jQuery Library";
	}
}

// Script block 8 - RevSlider initialization
var	tpj = jQuery;
var	revapi1;
if(window.RS_MODULES === undefined) window.RS_MODULES = {};
if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
	window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
	if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
	window.revapi1 = jQuery(window.revapi1);
	if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
	revapi1.revolutionInit({
			revapi:"revapi1",
			DPR:"dpr",
			sliderLayout:"fullwidth",
			visibilityLevels:"1240,1240,778,480",
			gridwidth:"1600,1600,778,480",
			gridheight:"855,855,980,320",
			lazyType:"smart",
			spinner:"spinner14",
			perspective:600,
			perspectiveType:"global",
			editorheight:"855,768,980,320",
			responsiveLevels:"1240,1240,778,480",
			progressBar:{disableProgressBar:true},
			navigation: {
				onHoverStop:false
			},
			viewPort: {
				global:true,
				globalDist:"-200px",
				enable:false
			},
			fallbacks: {
				allowHTML5AutoPlayOnAndroid:true
			},
	});
	
}} // End of RevInitScript

if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

// Appointment Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointment-form');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const legalMatter = document.getElementById('legal-matter').value;
            const situation = document.getElementById('situation').value;
            
            // Create message
            const message = `New Appointment Request:\n\n` +
                          `Full Name: ${fullName}\n` +
                          `Email: ${email}\n` +
                          `Phone: ${phone}\n` +
                          `Legal Matter: ${legalMatter}\n` +
                          `Situation: ${situation}`;
            
            // Encode message for WhatsApp
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=+918886906996&text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Show success message
            alert('Thank you! Your appointment request has been sent. We will contact you shortly.');
            
            // Reset form
            appointmentForm.reset();
        });
    }
});
