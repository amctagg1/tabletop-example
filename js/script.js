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
  
  
// Only display the last X posts in the sheet
var postsToShow = 100;

// go through each row and generate posts to the page
  function lastPosts(sheet) {
    var postsEl = document.getElementById('posts');
    var lastXRows = sheet.slice(-postsToShow);
    
    // loop through the last X rows most recent first (ie, bottom up)
    for (var i = lastXRows.length - 1; i >= 0; --i) {
      var row = lastXRows[i];
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
