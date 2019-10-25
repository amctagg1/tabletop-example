function init() {
    Tabletop.init( {
      key: 'https://docs.google.com/spreadsheets/d/1lupfqBIWuExmeB1eDWYkeh0RRCV0nusDmnbpFLLcm6A/edit?usp=sharing',
      simpleSheet: true }
    ).then(function(data, tabletop) { 
      //console.log(data)
      lastPosts(data);
    })
  }
  window.addEventListener('DOMContentLoaded', init)
  
  
//implement a posts to show variable to get only the last X posts?

// go through each row and generate posts to the page
  function lastPosts(sheet) {
    var postsEl = document.getElementById('posts');
    // loop through the most recent rows first (ie, bottom up)
    for (var i = sheet.length - 1; i >= 0; --i) {
      var row = sheet[i];
      var post = generatePost(row);
      postsEl.innerHTML += post;
    }
  }
  
  function generatePost(row) {
    var post = '<div>' + row["date-of-announcement"] + '</div>'
    + '<div>' + row["body-of-announcement"] + '</div>'
    + '<a href="' + row["link-destination"] + '">' + 'the link' + '</a>';
    return post;
  };
