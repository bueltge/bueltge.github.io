jQuery(document).ready( function($){
	
	var repos = $('#repositories');
	var username = 'bueltge';
	repos.ready(function() {
		$.getJSON('http://github.com/api/v2/json/repos/show/' + username + '?callback=?', function(data, status) {
			$.each(data.repositories.reverse(), function() {
				var repolink = document.createElement('a');
				$(repolink).attr('href', this.url);
				$(repolink).html(this.name);
				
				var title = document.createElement('h3');
				$(title).append(repolink).attr('class', 'repo-title')

				var language = document.createElement('span');
				$(language).html(this.language);
				
				var homepage = document.createElement('a');
				$(homepage).attr('class', 'post')
				$(homepage).attr('href', this.homepage);
				$(homepage).html('Post about this');
				
				var forkbatch = document.createElement('span');
				$(forkbatch).attr('class', 'forked').text('forked');

				var text = document.createElement('p');
				var line = document.createElement('li');
				$(line).hide().append(title).append(language).append(text).attr('class', 'repo');
				this.fork ? $(line).append(forkbatch) : $(text).html(this.description).append(homepage);
				
				if (this.name != username + '.github.com') {
					$(repos).append(line);
				}
				$(line).fadeIn(700);
			});
		});
	})
});
