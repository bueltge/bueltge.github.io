jQuery(document).ready( function($) {
	
	// https://api.github.com/users/bueltge/repos?sort=updated
	var apiUrl = 'https://api.github.com/users/',
	    repos = $('#repositories'),
	    username = 'bueltge',
	    urlParam = '?sort=updated';
	
	$.getJSON( apiUrl + username + '/repos' + urlParam + '&callback=?', function(data, status) {
		
		$.each( data.data, function( i, value ) {
			
			if ( this.homepage != username + '.github.com' ) {
				
				var fork = this.fork ? ('<span class="forked">forked</span>') : (''),
				    open_issues = this.open_issues ? ('<span title="Open Issues" aria-hidden="true" data-icon=\'"\'>' 
				                  + this.open_issues + '</span>') : (''),
				    page = this.homepage ? ('<a title="Link to Homepage or Post" href="' 
				           + this.homepage + '">Homepage or Post</a>') : ('')
				    line = $('<li> \
						<h3><a href="' + this.html_url + '">' + this.name + '</a></h3> \
						' + fork + ' \
						<span title="Pushed at" aria-hidden="true" data-icon="%">' + this.pushed_at.slice(0, 10) + '</span> \
						<div> \
							<span title="Language" aria-hidden="true" data-icon="#">' + this.language + '</span> \
							<span title="Watchers" aria-hidden="true" data-icon="$">' + this.watchers + '</span> \
							<span title="Forks" aria-hidden="true" data-icon="!">' + this.forks + '</span> \
							' + open_issues + ' \
						</div> \
						<p> \
							' + this.description + page + ' \
						</p> \
					</li>').hide();
					
				$(repos).append(line);
				$(line).fadeIn(500);
				
			}
			
		});
	});
});
