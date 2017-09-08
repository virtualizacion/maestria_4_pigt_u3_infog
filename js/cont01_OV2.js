$("document").ready(function(){
	//$('.bxslider').bxSlider();


	$('.slider8').sliderGallery({
		//pager:false,
		mode: 'vertical',
		slideWidth: 1100,
		heightSG: "150px",
		minSlides: 2,
		slideMargin: 20,
		slideSG:[
				{
					cont:"<p class='text-cont-sg'>1. El deber de respetar la paz y la seguridad.</p>",
					backgroundColor:"#8868ad",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>2. La cuestión del deber de abstenerse de toda propaganda en favor de la guerra.</p>",
					backgroundColor:"#43c4e1",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>3. El deber de abstenerse de la apología del odio nacional, racial o religioso.</p>",
					backgroundColor:"#2380c3",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>4. Deberes para con la humanidad (contra el genocidio y los crímenes de lesa humanidad).</p>",
					backgroundColor:"#4bc4d2",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>5. La obligación de respetar el derecho internacional.</p>",
					backgroundColor:"#8868ad",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>6. La responsabilidad respecto de la promoción y la observancia de los derechos humanos y las libertades fundamentales.</p>",
					backgroundColor:"#43c4e1",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>7. El deber de los Magistrados de la Corte Internacional de Justicia y de los expertos de los órganos especializados, de ejercer sus funciones con independencia, imparcialidad y objetividad.</p>",
					backgroundColor:"#2380c3",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>8. El deber de respetar el bien general.</p>",
					backgroundColor:"#4bc4d2",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>9. La cuestión del deber de examinar críticamente y oponerse.</p>",
					backgroundColor:"#8868ad",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>10. La cuestión de la obediencia a la ley.</p>",
					backgroundColor:"#43c4e1",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>11. Las “órdenes superiores” como argumento de defensa.</p>",
					backgroundColor:"#2380c3",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>12. El deber de proteger el medio humano (medio ambiente).</p>",
					backgroundColor:"#4bc4d2",
					color:"#ffffff"
				},
				{
					cont:"<p class='text-cont-sg'>13. El deber de participar en el progreso social y el desarrollo.</p>",
					backgroundColor:"#43c4e1",
					color:"#ffffff"
				}
			]
	});

    /* initiate pugin assigning the desired button labels  */
    $("div.holder").jPages({
        containerID : "itemContainer",
        perPage     : 1,
        first       : false,
        previous    : "span.arrowPrev",
        next        : "span.arrowNext",
        last        : false
    });



});    