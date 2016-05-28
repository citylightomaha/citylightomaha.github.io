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

## ffmpeg Installation and Video Compression
1. `brew install ffmpeg --with-fdk-aac`
2. `ffmpeg -i header-high.mp4 -codec:v libx264 -profile:v high -preset slow -b:v 500k -maxrate 500k -bufsize 1000k -vf scale=-1:720 -threads 0 -codec:a libfdk_aac -b:a 128k header-low.mp4`
