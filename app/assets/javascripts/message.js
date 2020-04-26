
$(function(){
     function buildHTML(message){
      if ( message.image) {
        var html =
          `<div class="main-chat__messages_message">
            <div class="main-chat__messages_message__upper-info">
              <div class="main-chat__messages_message__upper-info__taker">
               ${message.user_name}
              </div>
              <div class="main-chat__messages_message__upper-info__date">
                ${message.create_at}
              </div>
            </div>
            <div class="main-chat__messages-message__text">
              <p class="main-chat__message-message__text__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
         </div>`
        return html;
      } else {
        var html =
          `<div class="main-chat__messages_message">
            <div class="main-chat__messages_message__upper-info">
              <div class="main-chat__messages_message__upper-info__taker">
               ${message.user_name}
              </div>
              <div class="main-chat__messages_message__upper-info__date">
                ${message.create_at}
              </div>
            </div>
            <div class="main-chat__messages-message__text">
              <p class="main-chat__message-message__text__content">
                ${message.content}
              </p>
            </div>
          </div> `
        return html;
      };
     }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__messages').append(html);
      $('.main-chat__messages').animate({ scrollTop: $('.main-chat__messages') [0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    .always(function() {
      $('.submit-btn').prop('disabled', false);
    });
  });
});

