jQuery(document).ready(function($) {

	var repos = $('#repositories');
	var username = 'bueltge';

	$.getJSON('http://github.com/api/v2/json/repos/show/' + username + '?callback=?', function(data, status) {
		$.each(data.repositories.reverse(), function() {

			if (this.name != username + '.github.com') {
				var fork = this.fork ? ('<span class="forked">forked</span>') : (''),
					page = this.homepage ? ('<a title="Link to Homepage or Post" href="' + this.homepage + '">Homepage or Post</a>') : ('')
					line = $('<li> \
						<h3><a href="' + this.url + '">' + this.name + '</a></h3> \
						' + fork + ' \
						<span title="Pushed at">' + this.pushed_at.slice(0, 10) + '</span> \
						<div> \
							<span>' + this.language + '</span> \
							<span title="Watchers">' + this.watchers + '</span> \
							<span title="Forks">' + this.forks + '</span> \
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
