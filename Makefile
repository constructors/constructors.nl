.PHONY: develop bundle-install

bundle-install:
	bundle install

develop:
	bundle exec jekyll serve -w --drafts
