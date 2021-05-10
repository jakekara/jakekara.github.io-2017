---
layout: post
title: "Margo: Margin Notes for Jupyter Notebooks"
subtitle: "Margin Notes for Computational Notebooks"
permalink: /margo/
---

## Margo Loader: Modular Jupyter Notebooks

The motivating use case for developing Margo was building a system for importing
Jupyter Notebooks in Python. This had be
[done](https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Importing%20Notebooks.html)
[before](https://github.com/grst/nbimporter), but there was one problem. A lot
of cells in notebooks contain code that doesn't make sense to include in a
module. I wanted to execlude certain cells during import, so I started adding
special comments to cells I wanted to ignore. I eventually formalized the syntax
for these comments and called it Margo. They look like this:

```python
# :: ignore-cell ::
```

To get started importing Jupyter Notebooks, check out the [Margo Loader project](https://github.com/margo-notebooks/margo-loader-py)

## Margo syntax

Instead of just creating a standard set of weird looking comments for the
notebook importing project, I decided to create a generalized syntax that could
be used for any kind of annotating notebook cells. I called the concept "margin
notes," and I called the syntax "Margo." This ended up being the topic of my
thesis in software engineering.

Margo supports two kinds of statements: directives and assignments. Directives,
like the `ignore-cell` example, have a name but no value. Assignments have both
a name and a value. We've already seen a directive. This is what an assignment
looks like:

```margo
# :: name: "Jake" ::
```

Assignments can take more than one value, separated by commas.

```margo
# :: name: "jake","kara" ::
```

Values can be strings, like in the previous examples, or they can be numbers, or the special values true, false, or null — just like in JSON.

```margo
# :: some_values: "one", 2, true, false, null ::
```

To learn more about Margo Syntax, check out [XX](XX)