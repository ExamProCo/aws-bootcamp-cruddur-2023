#! /usr/bin/bash

gem i jwt -Ni /tmp/lambda-layers/ruby-jwt/ruby/gems/2.7.0
cd /tmp/lambda-layers/ruby-jwt

zip -r lambda-layers . -x ".*" -x "*/.*"
zipinfo -t lambda-layers

aws lambda publish-layer-version \
  --layer-name jwt \
  --description "Lambda Layer for JWT" \
  --license-info "MIT" \
  --zip-file fileb://lambda-layers.zip \
  --compatible-runtimes ruby2.7