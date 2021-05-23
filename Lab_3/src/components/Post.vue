<template>
    <div>
        <div class="blog-header">
            <h1 class="blog-title">{{Post.title}}</h1>
            <p class="lead blog-description">{{Post.description}}</p>
        </div>
        <div class="blog-post" v-html = "Post.text">
        <h2 class="blog-post-title">{{Post.post_title}}</h2>
        <p class="blog-post-meta">{{Post.time}} by <a href="#">{{Post.username}}</a></p> {{Post.text}}</div>
        <hr>
        </div>
</template>
<script>
    export default {
        name: 'Post',
        data: function() {
            return {
                Post:{
                title: "Say so",
            description: "Blog written by Yehor Poliakov.",
            post_title: "Blog about blog",
            time: "2021-4-14",
            username: "Yehor Poliakov",
            text: `<p>A blog (a truncation of <a href="">"weblog"</a>) is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts).</p>
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
            }
          }
        }
    }
</script>