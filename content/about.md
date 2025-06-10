---
layout: templates/base.liquid
---

# About {.no-margin}
<div>{% include 'components/modified.liquid' %}</div>
<div class="about-container">
    <div class="pfp-wrapper">
        <img class="pfp" src="/static/images/pfp/pfp_t.png" alt="me"/>
    </div>
    <div>
        <p>
            Hello, internet. My name is <a href=""https://en.wikipedia.org/wiki/Sean>Sean</a>
            (pronounced to ryhme with John). I write software. I live in Vancouver, Canada.
            I'm a <a href="https://en.wikipedia.org/wiki/Zillennials">Zillenial</a> (geriatric Gen-Z?).
        </p>
        <!--<p>-->
            <!--My <a href="https://en.wikipedia.org/wiki/McAuliffe_(surname)">surname</a> is an-->
            <!--Anglicisation of the Norse-Irish <i>Mac Amhlaoibh</i>, translating to-->
            <!--<i>Son of Olaf</i>. In reality I don't even <i>know</i> an Olaf.-->
        <!--</p>-->
        <p>
            I've lived on the west coast of Canada my whole life, primarily on
            <a href="https://en.wikipedia.org/wiki/Vancouver_Island">Vancouver Island</a>.
            I attended the <a href="https://uvic.ca">University of Victoria</a>,
            where I studied <del>Mechanical</del> Software Engineering, with a
            somewhat discordant focus on both embedded systems and on artificial
            intelligence. I graduated with a Bachelor’s of Software Engineering.
        </p>
        <p>
            I've always been interested in how software can be integrated into
            the "real world".
        </p>
    </div>
</div>

The underlying interest which lead be towards a career in engineering is space.
I recall as a child watching [this scene](https://www.youtube.com/watch?v=ry55--J4_VQ)
(and the movie broadly) being a formative experience in my figuring out what I
wanted to do in life.

I was involved in undergraduate [rocketry](https://onlineacademiccommunity.uvic.ca/rocketry/)
and [satellite design](https://home.uvsd.ca/) teams in university. This culminated
in the opportunity to work with some very talented people designing the RF
communication subsystem for [ORCASat](https://www.orcasat.ca/) - which spent 195
days in low Earth orbit.

Professionally, I write embedded C++ for motion-automation applications. In my
spare time I'm working on a game engine. I like to tinker and build. When I have
more space I'd love to get into something more hands-on, but for now, I mostly
write code.

I like to [read](/reading). I like to run. Hiking is negotiable. I'm trying my
hand at some artwork (inspired by a game project I'm working on). And, most 
recently I like to write on the internet.

I share my name with many others on the internet. Unfortunately, some of them are
way cooler. I mean, a race car driver and an actor?—Tough break. There are only
few Google search results that I am associated with, and they are likely all
linked to from this site.

# Colophon

The first incarnation of this site went live at [seanmcauliffe.ca](https://www.seanmcauliffe.ca)
in early 2024. I entirely remade the site in early 2025. You might be visiting it
at either [smca.dev](https://www.smca.dev) (canonical) or
[seanmcauliffe.ca](https://www.seanmcauliffe.ca).


Designed and developed by me, with inspiration taken from many places on the
indie-web.

Built with [11ty](https://www.11ty.dev/) and hosted on a
[Digital Ocean VPS](https://www.digitalocean.com/).

The primary typeface used is [Recursive](https://fonts.google.com/specimen/Recursive)
The header typeface is [Signika Negative](https://fonts.google.com/specimen/Signika+Negative)
All fonts and other static assets are delivered from my server, not from third
parties.

Code-block syntax highlighting uses the *GitHub Dark Dimmed* theme.

SVG icons are sourced from [iconnmonstr](https://iconmonstr.com/).

This site is statically generated. The build processes uses the following
dependencies:

* [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
* [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote)
* [katex](https://www.npmjs.com/package/katex)
* [highlight.js](https://highlightjs.org/)
