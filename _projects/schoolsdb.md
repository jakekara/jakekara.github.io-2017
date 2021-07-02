---
layout: project
title: "Your School database, CT Mirror"
description: "A database of Connecticut schools that emphasizes disparities."
tags: 
    - Journalism
    - JavaScript
    - Django
image: YourSchool
link: https://web.archive.org/web/20170718220349/https://schools.ctmirror.org/school/0156211
twitterImage: /assets/images/square/BlakeTint-1200.png
permalink: /projects/your-school
---

The [Your School database](https://web.archive.org/web/20170718220349/https://schools.ctmirror.org/school/0156211) was built for [CT Mirror](https://ctmirror.org) in 2018.

When we started this project, we had several ambitious goals. We wanted to make
a vast amount of data that the state tracks more accessible, with parents as the
key user in mind. We also wanted to highlight the racial disparities that are
prevalent in Connecticut's highly segregated schools.

We decided to make something like a dashboard for each school, but rather than a
wall of charts, we wanted it read like a narrative. In fact, we the
visualizations themselves are quite minimal in design. I had just read a book by
Edward Tufte, and I was very big on the idea of what he calls
["sparklines."](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR)

{% include imgset.html slug="YourSchool" alt="A screenshot of the Your School
page for Central High School in Bridgeport, Conn." %}  

There are several types of in-line visualizations: sparklines, sparkline-style
bar charts, tables with circular area charts, pictographs and simple tables.
Throughout, color is used consistently to identify data as either relating to
the particular school whose page we are on, the district reference group that
school belongs to, or the aggegated state data. (If you're wondering what a
"district reference group" is, you should read through one of the school profiles!)

I served as the sole designer and developer on this project. Data was pulled
primarily from a state database. I reconciled all of the data and built a
backend database that fed this site. I built the backend Django of this web app
with Django, and I used JavaScript and D3.js in particular for the data
visualizations.

This project was launched originally at *schools.ctmirror.org*, but it was among
a number of major data projects The Mirror shuddered. The Mirror has a very
small staff and did not hire a developer after I left. All of the projects that
had backend servers running on AWS, including this one, were eventually taken
offline. This emphasizes the importance of sustainability, and right-sizing a
project's scope for the client. While the "server-side" architecture I used was
highly conventional, the composition of a news room staff is not like a
conventional software company, today I am much more aggressive about designing
projects so that use the least infrastructure possible. Today I would instead
build this site as a static site generator, meaning it would not require a
database backend, instead of using Django. This would make the project more cost
effective and simple to host in perpetuity, even if there was no developer
around to update it.
