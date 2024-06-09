var posts=["posts/3eeb.html","posts/8ffd.html","posts/c720.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };