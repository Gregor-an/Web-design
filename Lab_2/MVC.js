class EventEmitter {
  constructor() {
    this._events = {};
  }
  on(evt, listener) {
    (this._events[evt] || (this._events[evt] = [])).push(listener);
    return this;
  }
  emit(evt, arg) {
    (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
  }
}
class Model {
    constructor(items) {
      this._items = items || [];
    }
    deletePost(){
      console.log("delete !");
        var postobj = document.getElementById("post");
        postobj.remove();
        postobj = document.getElementById("post_body");
        postobj.remove();
        postobj = document.getElementById("cont");
        postobj.remove();
        $('#aft_del').append("<h2>This post was deleted</h2>");
    }
    get addComment(){
      console.log("add comment !");
        var t = $('#comtext').val();
        if(t.length > 0){
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var addObj ={
                "username": "Yehor Poliakov",
                "time": date,
                "text": t
            };
            this._items.push(addObj);
            $('#comtext').val('');
            return addObj;
        }
    }
  }
  class View extends EventEmitter {
    constructor(model, elements) {
      super();
      this._model = model;
      this._elements = elements;
      for(var i=0; i < this._model.length;i++){
        comm_add(this._model._items[i]);
      }
      elements.sendButton.addEventListener('click',
      () => this.emit('SendButtonClicked'));
      elements.delButton.addEventListener('click',() => this.emit('delButtonClicked'));
    }
    comm_add(data){
      var html  = `<div class='col-md-5'>
      <div>
          <div>
           <section>
              <div class='row'>
                  <div>
                      <a href='#' class='anchor-username'>
                          <h4 class='media-heading'>`+data.username+`</h4>
                      </a>
                      <a href='#' class='anchor-time'>`+data.time+`</a>
                  </div>
              </div>
            </section>
            <section class='post-body'>
              <p class="overflow-visible">`+data.text+`</p>
          </section>
          </div>
      </div></div>
      <hr>`
      $('#cont').append(html);
    }
    
  }
  class Controller {
    constructor(model, view) {
      this._model = model;
      this._view = view;
      view.on('SendButtonClicked', () => this.addComm());
      view.on('delButtonClicked', () => this.delPost());
    }
    addComm(){
      var cobj = this._model.addComment;
      this._view.comm_add(cobj);
    }
    delPost(){
      this._model.deletePost();
    }
  }

  window.addEventListener('load', () => {
    var comm = [
        {"username":"Yehor Poliakov","time": "2021-4-14","text": "Something about this post"}
    ];
    var post = 
        {"title":"Say so",
        "description": "Blog written by Yehor Poliakov.",
        "post_title": "Blog about blog",
        "time": "2021-4-14",
        "username":"Yehor Poliakov",
        "text": `<p>A blog (a truncation of <a href="">"weblog"</a>) is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts).</p>
        <hr>
        <p>Posts are typically displayed in reverse chronological order,
             so that the most recent post appears first, at the top of the web page. Until 2009,
              blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic.
               In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited.
                MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic.
                 The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb,
                  meaning to maintain or add content to a blog.</p>
        <h2>History</h2>
        <p>The term "weblog" was coined by <a href="">Jorn Barger</a> on December 17, 1997.
             The short form, "blog", was coined by Peter Merholz, who jokingly broke the word weblog into the phrase we blog in the sidebar of his blog Peterme.com in April or May 1999.
            Shortly thereafter, Evan Williams at Pyra Labs used "blog" as both a noun and verb ("to blog", meaning "to edit one's weblog or to post to one's weblog")
             and devised the term "blogger" in connection with Pyra Labs' Blogger product, leading to the popularization of the terms.[</p>
        <ul>
          <li>Bruce Ableson launched <a href="">Open Diary</a> in October 1998,
               which soon grew to thousands of online diaries. Open Diary innovated the reader comment,
                becoming the first blog community where readers could add comments to other writers' blog entries..</li>
          <li>Brad Fitzpatrick started <a href="">LiveJournal</a> in March 1999.</li>
          <li><a href="">Evan Williams</a> and <a href="">Meg Hourihan</a> (Pyra Labs) launched <a href="">Blogger.com</a> in August 1999 (purchased by Google in February 2003)</li>
        </ul>`
    };
    addPost(post);
    const model = new Model(comm),
      view = new View(model, {
        'sendButton' : document.getElementById('send'), 
        'delButton' : document.getElementById('del')
      }),
      controller = new Controller(model, view);
  });

  function addPost(Blog){
    post_t(Blog);
    post_add(Blog);
  }
  function post_t(data){
    var html = `<div class="blog-header">
    <h1 class="blog-title">`+data.title+`</h1>
    <p class="lead blog-description">`+data.description+`</p>
    </div>`
    $('#post').append(html);
  }
  function post_add(data){
    var html = `
      <div class="blog-post">
        <h2 class="blog-post-title">`+data.post_title+`</h2>
        <p class="blog-post-meta">`+ data.time + ` by <a href="#">`+data.username+`</a></p> `+ data.text + `</div>
      <hr>
      <form>
          <div class="delete_button">
              <button type="button" class="btn btn-primary" id = "del">Delete post</button>
          </div>
      </form>
      <hr>
      <form>
        <span class="input-group-text">Add comment</span>
        <textarea class="form-control" aria-label="With textarea" id= "comtext"></textarea>
        <button type="button" class="btn btn-primary" id = "send">Send</button>
      </form>
      <hr>`
      $('#post_body').append(html);
  }