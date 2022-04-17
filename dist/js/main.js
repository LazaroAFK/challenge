let messageInput = document.getElementById("message");
let commentsBox = document.getElementById("commentsBox");
let messageTemplate = document.getElementById("messageTemplate");

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

function registerComment() {
  let messageInput = document.getElementById("message");
  let data = {
    message: messageInput.value,
  };
  fetch("http://localhost:3000/new/comment", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  loadComments();
}

function upvoteComment(commentId) {
  let data = {
    commentId: commentId,
  };
  fetch("http://localhost:3000/comment/upvote", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  loadComments();
}

function loadComments() {
  fetch("http://localhost:3000/comments/5", {
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((comments) => {
      commentsBox.innerHTML = "";
      comments.forEach((comment) => {
        let newComment = document.importNode(messageTemplate.content, true);
        newComment.querySelector(".message").innerHTML = comment.message;
        newComment.querySelector(".user_name").innerHTML = comment.author;
        newComment.querySelector(".comment_time").innerHTML = timeSince(
          comment.date
        );
        newComment.querySelector(".upvotes").innerHTML = comment.votes
          ? comment.votes
          : "";
        newComment
          .querySelector(".upvoteButton")
          .setAttribute("data-comment-id", comment.id);
        newComment
          .querySelector(".replyButton")
          .setAttribute("data-comment-id", comment.id);
        commentsBox.appendChild(newComment);
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

commentsBox.addEventListener('click', function(e){
    let target = e.target;
    console.log(e);
    if(target.classList && target.classList.contains('upvoteButton')){
        upvoteComment(target.getAttribute('data-comment-id'));
    }
});

loadComments();
