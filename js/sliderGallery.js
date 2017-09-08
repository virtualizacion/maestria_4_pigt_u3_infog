(function ( $ ) {

	$.fn.sliderGallery = function(options) {

		var settings = $.extend({
			heightSG: "300px",			
			slideSG:[]
		}, options);

		//------------------------------------------------------------
		//funciones para crear la estructura html
		/**/
		var self = $(this);
		var selfT = this;		

		this.getContentSG = function(index, cont) {
			return '<div class="slide">'+
					  '<div class="bxsl" id="bxslSG'+index+'">'+cont+'</div></div>'+
				   '</div>';
		}

		this.renderContentsSG = function(){

			var it = $.each(settings.slideSG, function(index, val) {

				console.log(index)
					
				self.append(selfT.getContentSG(index, val.cont)	)		

			    //asignar el alto general para todos los elementos backgroundColorSG

			    $("#bxslSG"+index).css({
			    			    	'height': settings.heightSG,
			    			    	'background-color': val.backgroundColor,
			    			    	'color': val.color
			    			    });			    	    
			});

			$.when(it).then(function(){
				console.log("Generado.")
				//define plugin con las opciones pasadas
				self.bxSlider(options);				
			});			
		}

		console.log("sliderGallery!")

		this.renderContentsSG()
		
	};

}( jQuery ));