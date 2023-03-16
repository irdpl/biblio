Reveal.addEventListener( 'ready', function( event ) {
    // event.currentSlide, event.indexh, event.indexv

	var mySpeakerNotes = document.querySelector("div.speaker-notes");

	mySpeakerNotes.setAttribute('tabindex', '1');
	mySpeakerNotes.addEventListener("keydown", function(e) {
		if (e.keyCode === 38 || e.keyCode === 40) {
			console.log("klawisz jest naciśnięty");
			e.stopPropagation();
		}
	}, false);

} );
