jQuery(document).ready( function($) {
	
	// https://api.github.com/users/bueltge/repos?sort=updated
	var apiUrl = 'https://api.github.com/users/',
	    repos = $('#gists'),
	    username = 'bueltge';
	
	$.getJSON( apiUrl + username + '/gists?callback=?', function(data, status) {
		
		$.each(data.data, function( i, value ) {
			
			var desc = (this.description !== '') ? this.description : '<em>no description</em>',
			    comments_url = this.html_url + '#comments',
			    comments = (this.comments !== 0) ? '<a href="' + comments_url + '"><span title="There are comments">!</span></a>' : '',
			    line = $('<li> \
					<h3><a href="' + this.html_url + '">gist: ' + this.id + '</a></h3> \
					<span title="Created at">' + this.created_at.slice(0, 10) + '</span> \
					<div>' + comments + '</div> \
					<p>' + this.description + '</p> \
				</li>').hide();
			
			$(repos).append(line);
			$(line).fadeIn(500);
		
		});
		
	});
});
