function init() {
    Tabletop.init( {
      key: 'https://docs.google.com/spreadsheets/d/1lupfqBIWuExmeB1eDWYkeh0RRCV0nusDmnbpFLLcm6A/edit?usp=sharing',
      simpleSheet: true }
    ).then(function(data, tabletop) { 
      console.log(data)
      postToPage(data);
    })
  }
  window.addEventListener('DOMContentLoaded', init)
  
  
// Only display the last X posts in the sheet
var postsToShow = 5;

// go through each row and generate posts to the page
// sheet is an array of objects
  function postToPage(sheet) {
    // cut down the sheet to only the last X rows
    var sheetLastX = sheet.slice(-postsToShow);

    var postsEl = document.getElementById('js-posts-container');

    // create the content we'll write to the page
    var postContent = document.createElement('div');
    postContent.setAttribute('id', 'js-posts');
    
    // loop through the last X rows most recent first (ie, process the sheet bottom up)
    for (var i = sheetLastX.length - 1; i >= 0; --i) {
      // sheet is an array of objects, row is an object
      var row = sheetLastX[i];
      // go generate the post html for this row
      var post = generatePost(row);
      // add that post to our content
      postContent.appendChild(post);
    }
    // write once to the page
    postsEl.appendChild(postContent);
  }
  
  function generatePost(row) { 
    // row is an object

    var post = document.createElement('div');
    post.setAttribute('class', 'post');

    var date = row['date-of-announcement'];
    if (date != "") {
      var postDate = document.createElement('div');
      postDate.setAttribute('class', 'post-date');
      postDate.textContent = date;
      post.appendChild(postDate);
    }
    
    var title = row['title-of-announcement'];
    if (title != "") {
      var postTitle = document.createElement('div');
      postTitle.setAttribute('class', 'post-title');
      postTitle.textContent = title;
      post.appendChild(postTitle);
    }

    var body = row['body-of-announcement'];
    if (body != "") {
      var postBody = document.createElement('div');
      postBody.setAttribute('class', 'post-body');
      postBody.textContent = body;
      post.appendChild(postBody);
    }
    
    var produce = row['produce-list'];
    if (produce != "") {
      var postProduce = document.createElement('div');
      postProduce.setAttribute('class', 'post-produce');
      postProduce.textContent = produce;
      post.appendChild(postProduce);
    }
    
    var link = row['link-destination'];
    if (link != "") {
      var postLink = document.createElement('a');
      postLink.setAttribute('class', 'post-link');
      postLink.setAttribute('href', link);
      postLink.textContent = 'the link';
      post.appendChild(postLink);
    }    

    return post;
  };
