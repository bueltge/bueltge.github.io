jQuery(document).ready( function($) {

	var repos = $('#repositories');
	var username = 'bueltge';

	$.getJSON('http://github.com/api/v2/json/repos/show/' + username + '?callback=?', function(data, status) {
		$.each(data.repositories.reverse(), function() {
			var repolink = document.createElement('a');
			$(repolink).attr('href', this.url);
			$(repolink).html(this.name);
			
			var title = document.createElement('h3');
			$(title).append(repolink).attr('class', 'repo-title');

			var language = document.createElement('span');
			$(language).html(this.language);
			
			if ( this.homepage ) {
				var homepage = document.createElement('a');
				$(homepage).attr('class', 'homepage');
				$(homepage).attr('title', 'Link to Homepage or Post');
				$(homepage).attr('href', this.homepage);
				$(homepage).html('Homepage or Post');
			}
			
			var forkbatch = document.createElement('span');
			$(forkbatch).attr('class', 'forked').text('forked');
			
			var watchers = document.createElement('span');
			$(watchers).html(this.watchers).attr('class', 'watchers').attr('title', 'Watchers');
			
			var forks = document.createElement('span');
			$(forks).html(this.forks).attr('class', 'forks').attr('title', 'Forks');
			
			var pushed_at = document.createElement('span');
			$(pushed_at).html( this.pushed_at.slice(0, 10) ).attr('class', 'pushed_at').attr('title', 'Pushed at');
			
			var text = document.createElement('p');
			var line = document.createElement('li');
			var more = document.createElement('div');
			if (this.language)
				$(more).append(language);
			$(more).append(watchers).append(forks);
			$(line).hide().append(title).append(pushed_at).append(more).append(text).attr('class', 'repo');
			this.fork ? $(line).append(forkbatch) : $(text).html(this.description).append(homepage);
			
			if (this.name != username + '.github.com') {
				$(repos).append(line);
			}
			$(line).fadeIn(500);
		});
	});

});
