/// <reference path="jquery-1.12.0.js" />



$.getJSON('//api.github.com/users/renelopez/repos', {}, function (data) { console.log(data.name) });