function init() {
    Tabletop.init( {
      key: 'https://docs.google.com/spreadsheets/d/1lupfqBIWuExmeB1eDWYkeh0RRCV0nusDmnbpFLLcm6A/edit?usp=sharing',
      simpleSheet: true }
    ).then(function(data, tabletop) { 
      //console.log(data)
      postToPage(data);
    })
  }
  window.addEventListener('DOMContentLoaded', init)
  
  
// Only display the last X posts in the sheet
var postsToShow = 5;

// go through each row and generate posts to the page
  function postToPage(sheet) {
    // cut down the sheet to only the last X rows
    var sheetLastX = sheet.slice(-postsToShow);

    var postsEl = document.getElementById('js-posts-container');

    // create the content we'll write to the page
    var postContent = document.createElement('div');
    postContent.setAttribute('id', 'js-posts');
    
    // loop through the last X rows most recent first (ie, process the sheet bottom up)
    for (var i = sheetLastX.length - 1; i >= 0; --i) {
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

    var post = document.createElement('div');
    post.setAttribute('id', 'js-post');

    var postDate = document.createElement('div');
    postDate.textContent = row['date-of-announcement'];
    post.appendChild(postDate);

    var postTitle = document.createElement('div');
    postTitle.textContent = row['title-of-announcement'];
    post.appendChild(postTitle);

    var postBody = document.createElement('div');
    postBody.textContent = row['body-of-announcement'];
    post.appendChild(postBody);

    var postProduce = document.createElement('div');
    postProduce.textContent = row['produce-list'];
    post.appendChild(postProduce);

    var postLink = document.createElement('a');
    postLink.setAttribute('href', row['link-destination']);
    postLink.textContent = 'the link';
    post.appendChild(postLink);

    return post;
  };
