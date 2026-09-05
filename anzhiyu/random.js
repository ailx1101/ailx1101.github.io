var posts=["posts/ea2b/","posts/613a/","posts/badc/","posts/8ffd/","posts/d21f/","posts/18f7/","posts/4bec/","posts/ee98/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };