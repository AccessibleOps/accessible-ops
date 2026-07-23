# Accessible Ops — dev tasks. Run `just` to list.

# list available recipes
default:
    @just --list

# preview locally with live reload at http://localhost:1313
serve:
    hugo server --buildDrafts --disableFastRender

# build the production site into ./public
build:
    hugo --gc --minify

# remove build output
clean:
    rm -rf public resources
