jQuery(document).ready( function($) {
	
	// https://api.github.com/users/bueltge/repos?sort=updated
	var apiUrl = 'https://api.github.com/users/',
	    repos = $('#repositories'),
	    username = 'bueltge',
	    urlParam = '?sort=updated';
	$.getJSON( apiUrl + username + '/repos' + urlParam + '&callback=?', function(data, status) {
		
		$.each(data.data, function(i, value) {
			
			if ( this.homepage != username + '.github.com' ) {
				console.dir(this);
				var fork = this.fork ? ('<span class="forked">forked</span>') : (''),
					open_issues = this.open_issues ?  ('<span title="Open Issues">I ' + this.open_issues + '</span>') : (''),
					page = this.homepage ? ('<a title="Link to Homepage or Post" href="' + this.homepage + '">Homepage or Post</a>') : ('')
					line = $('<li> \
						<h3><a href="' + this.html_url + '">' + this.name + '</a></h3> \
						' + fork + ' \
						<span title="Pushed at">' + this.pushed_at.slice(0, 10) + '</span> \
						<div> \
							<span>' + this.language + '</span> \
							<span title="Watchers">W ' + this.watchers + '</span> \
							<span title="Forks">F ' + this.forks + '</span> \
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
