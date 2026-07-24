# Accessible Ops — dev tasks. Run `just` to list.

# list available recipes
default:
    @just --list

# open the content editor at http://localhost:4747
edit:
    node editor/serve.mjs

# preview locally with live reload at http://localhost:1313
serve:
    hugo server --buildDrafts --disableFastRender

# build the production site into ./public
build:
    hugo --gc --minify

# remove build output
clean:
    rm -rf public resources
