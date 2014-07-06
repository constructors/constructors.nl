# The Constructors website #

Made using Jekyll, Twitter Bootstrap and a Bootswatch theme.

## Getting this thing up and running ##

Make sure you've got a recent Ruby and ImageMagick installed. Install pygments
from pip. Then, run in the souce directory:

    bundle

And to develop and/or write new blog posts:

    bundle exec jekyll serve -w --drafts

That's all there is to it.

## Writing blog posts ##

Blog posts reside in `blog/_posts` and drafts live in `blog/_drafts`. Drafts
won't be published, posts will. So if you need to collaborate on a blog post;
leave it a draft until it's finished. The naming convention is as follows:

    blog/_drafts/name-of-post.EXT
    blog/_posts/YYYY-MM-DD-name-of-post.EXT

Where `EXT` can either be `html` or `md`. Drafts don't have a fixed date. That's
because the last modification date of the draft will function as that post's
date.

The post itself has some YAML front matter:

    ---
    title: The Title Of My Post
    lang: en
    author: joris
    category: operations
    image: spaghetti.jpg
    attribution: poppet with a camera
    ---

* `title`: The title of your post.
* `lang`: The language of your post. Either `nl` or `en`.
* `author`: Your shortname, as defined in `_data/constructors.yml`.
* `category`: The name of the category, as defined in `_data/blog.yml`.
* `image`: Optional; the background image (more on that later).
* `attribution`: Optional; attribution for the background image. Otherwise public domain.

### Blog post graphics ###

Every blog post can have a full screen graphic presented to the user. If
disabled, the category color is used. To enable this, add the `image` tag to the
YAML front matter with the name of the photo you've stored in `img/blog/`. Make
sure you only use images that we can use commercially, like Creative Commons
without the NC clause. The
[Creative Commons Search](http://search.creativecommons.org/) is a great source
of images. Don't forget to properly add the `attribution` tag when required!

Because these photos are full screen, the resolution needs to be massive. We
default on photos with a width of 1600px. Resize yours to fit. To make sure they
won't hog people's internet connection, compress the photo by stripping lots of
detail. JPEG quality of 75 with the chroma halved is a good idea. Also add
progressive for a better user experience.

Afterwards you can create a thumbnail for the blog index by running:

    bin/generate_thumbs.sh

## Photos on the front page ##

Photos used on the front page are Creative Commons licensed. See the Flickr
pages for the license that applies.

0. [R/DV/RS](https://www.flickr.com/photos/redvers/4786421242)
1. [Robby van Moor](http://www.flickr.com/photos/robby_van_moor/)
2. [Lennart Tange](https://www.flickr.com/photos/lennartt/7545547388)
3. [Metro Centric](https://secure.flickr.com/photos/16782093@N03/9843810486)
4. [Metro Centric](https://secure.flickr.com/photos/16782093@N03/9844598793)
5. [Jason Eppink](https://secure.flickr.com/photos/jasoneppink/9229657285)
6. [Lennart Tange](https://secure.flickr.com/photos/lennartt/8190790472)
7. [Metro Centric](https://www.flickr.com/photos/16782093@N03/9823458975)
8. [Ntcrwlr](https://www.flickr.com/photos/ntcrwler/6694016989)
9. [R/DV/RS](https://www.flickr.com/photos/redvers/4786423422)
