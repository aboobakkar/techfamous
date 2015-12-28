Package.on_use(function(api){
  api.use("templating", "client");
  api.add_files("aTemplate.html", "client");
    api.add_files("aTemplate.css", "client");
});

Package.describe({
  documentation: '/home/aboo/gitfolder/techfamous/techfamous',
  git: 'https://github.com/user/repo.git'
});