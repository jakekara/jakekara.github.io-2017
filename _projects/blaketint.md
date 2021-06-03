---
layout: project
title: "BlakeTint"
description: "Analyzing William Blake's use of color across editions of prints"
tags: 
    - Python
    - Color quantization
    - Typescript
image: BlakeTint
link: https://dhlab.yale.edu/projects/blaketint/
twitterImage: /assets/images/square/BlakeTint-1200.png
---

BlakeTint is a
[Yale Digital Humanities Lab project](https://dhlab.yale.edu/projects/blaketint/)
supporting analysis of William Blake's use of color across multiple editions of
his illuminated manuscripts.

This project had two phases, and I served as the primary developer on each.

In the first phase, I wrote a [data processing pipeline to quantize images](https://github.com/jakekara/color-extraction-methodology) — to
"delete" background pixels and generate 20-color summary palettes. This pipeline
is available as a suite of modular Jupyter notebooks (enabled by my modular
notebook software, [Margo](/projects/margo)), which may be be [run online](https://mybinder.org/v2/zenodo/10.5281/zenodo.4554402/) without
installation.

The second phase of this project was building a React-based web application with
the following views: an index page that renders the entire collection of
(4,000+) palettes; and a print viewer page that compares different editions of
the same print.

## Index view  

{% include imgset.html slug="BlakeTintIndex" alt="View of the BlakeTint index view" %}  

In this view, the objective was to be able to observe macro-level trends in
color uses, such as similarities within an edition of a book, or changes over
time. Each palette represents a single print. This both compresses the work of
Blake visually into a "scannable" and abstracts it, creating a high-level view
of the artist and poet's use of color.  

## Detail view, comparison slider mode  

{% include imgset.html slug="BlakeTint" alt="View of the BlakeTint comparison view" %}  

In this mode, a user can compare different editions of prints to observe minute
differences in color use. Blake didn't just mass produce prints; he augmented
them with hand coloration that makes each edition quite unique.  

## Detail view, quantization mode

{% include imgset.html slug="BlakeTintQuantize" alt="View of the BlakeTint detail view" %}  

In this mode, a user can view an image as the computer "sees" it. The image is recreated using only the 20-color palette, and is shown with the background pixels "deleted."

## Links  

* Yale DHLab project page for BlakeTint - [https://dhlab.yale.edu/projects/blaketint/](https://dhlab.yale.edu/projects/blaketint/)
* Color extraction methodology repository - [https://github.com/jakekara/color-extraction-methodology](https://github.com/jakekara/color-extraction-methodology)
* Color extraction methodology live demo - [https://mybinder.org/v2/zenodo/10.5281/zenodo.4554402/](https://mybinder.org/v2/zenodo/10.5281/zenodo.4554402/)
* Summarizing Blake (slide deck) -[https://docs.google.com/...](https://docs.google.com/presentation/d/1gLmLhmNTH9jmEaEbgpMgjRRW64TZzeRyxtSzOB0PYfg/edit?usp=sharing)