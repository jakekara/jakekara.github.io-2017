---
layout: post
title: Mongo Docker's use of ENTRYPOINT and CMD
date: '2020-05-13 06:00:00 -0500'
categories: docker
---

When using the official Mongo Docker image, I ran into a problem that had me scratching my head for a while.

### The problem 
When I ran:

<pre><code>
    $ docker run --network app-net -p 27017:27017 mongo
</code></pre>

I was able to connect to the DB from my host (or another container on the "app-net" network).

However, when I ran:

<pre><code>
    $ docker run --network app-net -p 27017:27017 mongo /bin/sh -c "mongod"
</code></pre>

### The cause of the problem

It turns out that this is because the [official Dockerfile](https://github.com/docker-library/mongo) uses a combination of <code>ENTRYPOINT</code> and <code>CMD</code>. This causes the value of <code>CMD</code> to be passed as an argument to <code>ENTRYPOINT</code>, which in this case is a [helper script](https://github.com/docker-library/mongo/blob/master/docker-entrypoint.sh). So, when using <code>docker run</code> with no command, the <code>ENTRYPOINT</code> script runs with the argument <code>mongod</code>. When run with the <code>/bin/sh -c "mongod"</code> command, this skips the <code>ENTRYPOINT</code> and only runs the bare <code>mongod</code> command without the helper script's initialization steps.

This is entirely in line with [recommended practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#entrypoint), but wasn't obvious to me right away.

### The solution

The solution for me was to make sure I call <code>docker-entrypoint.sh mongod</code> when I'm ready to launch the server process, whether from the command line or in the Dockerfile.
