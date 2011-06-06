jQuery(document).ready(function($) {

	var repos = $('#repositories');
	var username = 'bueltge';

	$.getJSON('http://github.com/api/v2/json/repos/show/' + username + '?callback=?', function(data, status) {
		$.each(data.repositories.reverse(), function() {

			if (this.name != username + '.github.com') {
				var repoDescription = this.fork ? ('<span class="forked">forked</span>') : this.description,
				    line = $('<li style="" class="repo"> \
						<h3 class="repo-title"><a href="' + this.url + '">' + this.name + '</a></h3> \
						<span class="pushed_at" title="Pushed at">' + this.pushed_at.slice(0, 10) + '</span> \
						<div> \
							<span>' + this.language + '</span> \
							<span class="watchers" title="Watchers">' + this.watchers + '</span> \
							<span class="forks" title="Forks">' + this.forks + '</span> \
						</div> \
						<p> \
							' + repoDescription + ' \
							<a class="homepage" title="Link to Homepage or Post" href="' + this.homepage + '">Homepage or Post</a> \
						</p> \
					</li>').hide();

				$(repos).append(line);
				$(line).fadeIn(500);
			}

		});
	});
});
