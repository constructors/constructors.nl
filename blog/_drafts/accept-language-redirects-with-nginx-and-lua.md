---
title: Accept-Language redirects with Nginx and Lua
lang: en
author: joris
category: operations
image: flags.jpg
attribution:  Max Klingensmith
---

So you've got your fancy static HTML website in several languages. Now what? Add
some backend to just handle the redirects? Or worse, javascript? You don't have
to.

That is, if you use Nginx to serve your website. We've had exactly the same
problem. Having a static website is wonderful. Deployment is super easy and the
pages are served to you about as fast as they can get. For a site like ours it's
the right choice. No forms, no database and no state to speak of. Just some
pages and blog posts. This website is built using [Jekyll](http://jekyllrb.com/)
and has both English and Dutch pages. If you're interested in the source code,
it's
[available on our Github account](https://github.com/constructors/constructors.nl).

Of course we want to be friendly to our visitors. That's why there's both
English and Dutch content. Redirecting the Dutch to Dutch content and the
international visitors to English content would be even friendlier, now wouldn't
it? Jeklyll helped us creating the multilingual content. Helping us redirect
users isn't part of its job description. We need something else for this.

What we need is a very simple solution for a very simple problem;

* The user visits */*
* Redirect to */$lang/* if the cookie is set to something else than Dutch
* Check the `Accept-Language` header
* Save the language preference in a cookie
* Redirect to */$lang/* if not Dutch

And:

* The user changes the language preference
* Save the preference in a cookie

That's a job for Rails! Right? No. That would defeat the purpose of using Jekyll
in the first place. The same goes for Django. Something faster maybe, like Flask
or Sinatra?  Go? Node? Too many dependencies for a simple website like ours.

As it turns out, Nginx can do all of this for us with the
[Lua module](http://wiki.nginx.org/HttpLuaModule). No extra dependencies, quite
fast and just as easily deployable. Debian and Ubuntu have Lua support bundled
in the `nginx-extras` package.

The first bit of Lua action goes into its own `location`. We're using `=` here
to make sure this only happens for */*. The added benefit of this construction
is that this `location` has precedence over our standard `location`, defined
below.

    location = / {
        default_type text/html;

        rewrite_by_lua '
        if ngx.var.cookie_lang == "en" then
            ngx.redirect("/en/")
            return
        elseif ngx.var.cookie_lang == "nl" then
            return
        end

        if ngx.var.http_accept_language then
            for lang in (ngx.var.http_accept_language .. ","):gmatch("([^,]*),") do
                if string.sub(lang, 0, 2) == "nl" then
                    ngx.header["Set-Cookie"] = "lang=nl; path=/"
                    return
                end
            end
        end

        ngx.header["Set-Cookie"] = "lang=en; path=/"
        ngx.redirect("/en/")
        ';
    }

This location has no root. To help nginx determine the content type of the
response we've added a `default_type`. Normally this is
`application/octet-stream`, making most browsers present a download instead of
the page. We also have to check if the `Accept-Language` header is even present
before trying to parse it. The little for loop, which we've
[borrowed from Mark](http://stackoverflow.com/a/23432310), is a clever solution
to parse (parts of) the `Accept-Language` header. The header value is a comma
separated list of language codes, with an optional preference identifier. Here's
an example of a user who prefers Dutch but also speaks English. And if English
is available, this user prefers British English:

    Accept-Language: nl, en-gb;q=0.8, en-us;q=0.7, en;q=0.6

We only check if the user can understand Dutch. If not, we redirect to the
English site. We also assume that the languages are ordered by preference. This
for loop does exactly that.

Now, in the standard `location /` we only need to store the language
preference. If the user adds the `lang` parameter to any request, the new
language preference will be stored.

    location / {
             rewrite_by_lua '
             if ngx.var.arg_lang == "nl" then
                 ngx.header["Set-Cookie"] = "lang=nl; path=/"
             elseif ngx.var.arg_lang == "en" then
                 ngx.header["Set-Cookie"] = "lang=en; path=/"
             end
             ';

             root /path/to/webroot;
             index  index.html;
    }

The way we've integrated this in our website can be found in
[\_language\_select.html](https://github.com/constructors/constructors.nl/blob/master/_includes/language_select.html).

So there we go. Simple language selection and redirection with nothing more than
Nginx and a few lines of Lua code.
