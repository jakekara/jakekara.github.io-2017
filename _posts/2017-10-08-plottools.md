---
layout: post
title:  "A basic plotting toolbox for d3"
date:   2017-10-07 00:00:30 -0500
categories: javascript
---

I'm building a set of chart-making tools that don't get between you and D3.

* Here's the repo:
  [https://github.com/jakekara/jk-plottools](https://github.com/jakekara/jk-plottools). For
  documentation and demo code, check out the repo.

## Not getting in the way

So, what I mean by not getting between you and D3 is that these tools do
not reimplement or abstract D3's powerful tools or notions. Instead, it
glues together some of the discrete capabilities of D3 in order to simplify
the process of basic chart building. Wherever this tool set creates an
instance of a d3 object, such as d3.axisBottom, it exposes that object, so
you can use this tool to create basic charts, and then modify them in a way
you're already familiar with if you use D3.

Basic charts, sometimes called "daily" graphics in the news dev world,
include bars, lines, scatter plots and maybe some other basic charts that
get the job done most of the time. These are charts that non-data staff
members can produce on their own, or they can be output from a Pandas or R
analysis.

This tool set combines D3 features in a way you would most likely want to
use them when building daily graphics in "layers" from the ground up.

## The base layer, plotter, packages and SVG with X and Y scales

Ingredients:

* An SVG element
* Two d3 axes: One for X, one for Y

All of the "daily graphics" I'm responsible for in the newsroom have an X
and a Y dimension, so, the base object in the library, plotter, takes an
SVG, an x scale and a y scale. Since I am not trying to abstract D3, you
supply any d3 scale, such d3.scaleLinear or d3.scaleTime.

You only need to set the scale's domain using d3's syntax. You do not need
to add the range, as the plotter will map that to the SVG's dimensions each
time its draw method is called.

Once you've created a plotter, you now have an SVG that you can map data
inputs to positions.

## Adding drawables 

Once you have a plotter, you add any number of "drawables" -- objects that
can draw themselves when tied to a plotter. I have implemented axes,
scatter and line drawables. A bar drawable will be added next.

### The axes drawable: No more margin geometry

Ingredients:

* Nothing

This drawable adds a left and bottom axis, based on the scale information
provided to the plotter. All of the positioning to make the axes fit within
the axes are handled internally. As needed, this drawable will modify the
plotter's margins and redraw the SVG automatically, triggering all other
drawables to be redrawn. Since all drawables can access the plotter's
margins, they will be redrawn with the axes dimensions and position taken
into account.

The process of adding an axis drawable to a plotter is simply creating a
new instance of one, and adding with the plotter's addDrawable
method. Since you already passed an X and Y scale to the plotter, it has
all the information it needs to render on the left and bottom of the plot.

Most of my daily graphics also have axes, but you can skip this step if
you're making a sparkline for instance.

_Note that I do not support top and right axes at this time, and that is the
most opinionated piece of this code base so far._

## Scatter, line drawables

Ingredients:

* A data array
* Two functions that return X and Y values from the array

Adding a scatter or line drawable are identical processes. You provide some
array of data, and a function that returns X values and a function that
returns Y values.

## Status

Currently, this project is just in the form of several JavaScript files you
can include with script tags. They are not bundled or minified yet.

