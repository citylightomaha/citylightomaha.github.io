# City Light Family
### [Website](http://citylightomaha.github.io/)

# Development
I've been running the site locally with ruby version `2.2.0`. Some of the newer versions don't play nice with the `github-pages` gem.

## Installation
1. [Install Jekyll](http://jekyllrb.com/docs/installation/)
2. Install Bundler - `gem install bundler`
3. Install Github Pages - `bundle`

## Running Locally
1. `jekyll serve`
2. Check out `localhost:4000`

## JS Development
If you need to run edit any javascript for the site there is some additional setup needed.

### Installation
1. [Install NPM](https://nodejs.org/en/download/)
2. Install Bower: `npm i -g bower`

### Running Gulp Javascript Task
You'll want to run the `gulp` and `jekyll serve` commands in unison.
1. `npm install`
2. `bower install`
3. `gulp`

# ffmpeg Installation and Video Compression
1. `brew install ffmpeg --with-fdk-aac`
2. Compression: `ffmpeg -i header-high.mp4 -codec:v libx264 -profile:v high -preset slow -b:v 500k -maxrate 500k -bufsize 1000k -vf scale=-1:720 -threads 0 -codec:a libfdk_aac -b:a 128k header-low.mp4`
3. Create Poster Image: `ffmpeg -i header-low.mp4 -ss 0 -vframes 1 ../images/header-poster.jpg`
