---
layout: project
title: "Critical Editions"
description: ""
tags: 
    - Typescript
    - React
image: CriticalEditions
link: https://editions.fortunoff.library.yale.edu/
twitterImage: /assets/images/square/CriticalEditions-1200.png

---

The [Critial Editions](https://editions.fortunoff.library.yale.edu/) project for
the Yale Fortunoff Video Archive for Holocaust Testimonies is a static site
generator for publishing scholarly material that makes heavy use of footnotes,
particular embedded video footnotes. The initial use case was the archive's
critical editions produced by research fellows that include a scholarly
introductory essay, as well as an extensive set of footnotes for a particular
testimony. The site builder will also be used in forthcoming projects in which
we will publish web editions of printed books that make heavy use of Fortunoff
material.

Specially-crafted Markdown files are used to maintain content, and a
command-line [site builder](https://github.com/jakekara/essay-formatter) can be
used to make new instances of the Critical Edition app.

I was the lead developer both for the React application and the site builder
tool.

## Index Page  

{% include imgset.html slug="CriticalEditions" alt="The Critical Editions index page" %}  

## Video footnotes  

{% include imgset.html slug="CriticalEditionsFootnote" alt="A video footnote in a critical edition introduction." %}  


## Site builder  

In order for this project to be reusable in other applications, I made a site builder that's pretty easy to use. From the [docs](https://github.com/jakekara/essay-formatter):

```bash
$ pip install git+https://github.com/jakekara/essay-formatter
$ essay-formatter init my-project

Initiating Critical Editions site
=================================
 📂 Created directory my-project
 📄 Copied start content

 ✨ Finished building project in my-project!

To start hacking, type: 
	cd "my-project"

To build with start content, run:
	 essay-formatter build content

To view the site run:
	essay-formatter serve build
```

## Links  

* Fortunoff Critical Editions site - [https://editions.fortunoff.library.yale.edu/](https://editions.fortunoff.library.yale.edu/)
* Static site builder - [https://github.com/jakekara/essay-formatter](https://github.com/jakekara/essay-formatter)