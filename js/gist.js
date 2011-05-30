jQuery(document).ready( function($){
	
	var repos = $('#gists');
	var username = 'bueltge';
	repos.ready(function() {
		$.getJSON('https://gist.github.com/api/v1/json/gists/' + username + '?callback=?', function(data, status) {
			$.each(data.gists, function() {
				var created_at = document.createElement('span');
				$(created_at).html(this.created_at);
				
				var description = document.createElement('p');
				$(description).html(this.description);
				
				if (this.description == '') {
					$(description).html('<em>no description</em>');
				}
				
				var repolink = document.createElement('a');
				$(repolink).attr('href', 'https://gist.github.com/'+this.repo);
				$(repolink).html(this.repo);
				
				var title = document.createElement('h3');
				$(title).append(repolink).attr('class', 'repo-title')

				var text = document.createElement('p');
				var line = document.createElement('li');
				$(line).hide().append(title).append(created_at).append(description).attr('class', 'repo');
				
				if (this.name != username + '.github.com') {
					$(repos).append(line);
				}
				$(line).fadeIn(700);
			});
		});
	})
});
