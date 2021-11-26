var getUserRepos = function() {
    fetch("http://api.github.com/users/octcat/repos");
};

getUserRepos();