$(document).ready(function() {

	var suggested_post	=	{
		'english_us':'Suggested Post',
		'portugues_br':'Publicação sugerida',
		'spanish':'Publicación sugerida'
	}

	var sponsored_post	=	{
		'english_us':'Sponsored',
		'portugues_br':'Patrocinado'
	}

	$.each( suggested_post, function( key, value ) {
		$("div:contains('" + value + "')").closest('li').hide();
	});

	/*$.each( sponsored_post, function( key, value ) {
		$("div:contains('" + value + "')").closest('div').closest('div').closest('div').closest('div').closest('div').closest('div').hide();
	});*/

});