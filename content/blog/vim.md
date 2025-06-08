---
title: They're Right About Vim
date: 2024-01-18
brief: I'm sorry to tell you that all of the evangelists had a point.
layout: templates/post.liquid
headIncludes:
    - tweet.liquid
---

If you travel in the kinds of circles that I do, you've no doubt read before
about the wondrous heights of productivity and spiritual transcendence that can
be unlocked if only you learned how to use Vim. Even if you haven't personally
been admonished by a professor, gray-beard colleague, or internet personality
about your lack of license to call yourself a programmer ([don't call yourself a
programmer](https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/))
if you don't know how to edit text with Vim, it's nearly impossible to have
avoided hearing the distant thunder of the editor wars. Now, I'm sorry to tell
you this, but everybody was right.

The usual caveats apply. There are talented and successful engineers who do their
work with all kinds of tools. And, if you use Emacs I don't intend to convert
you; stick with what you've got. But, my satisfaction with the day to day work
of writing and reading large amounts of code (and almost any plain text) has
never been higher since I learned to be comfortable with Vim. It wasn't an easy
process. Like everybody else, when I was first introduced to Vim my immediate
instinct was that this was dead tech from a bygone age. Once I figured out how
to save and quit and navigate with the hjkl keys I could at least type. But, I
was nowhere near as quick as I was in Atom (my favourite text editor of the day).

The first I ever heard of Vim was in a second year software engineering course at
my university. The professor was well liked among the ambitious students,
generally respected by most, and feared by some. It was my first encounter with
the kind of no-nonsense bit for byte nose to the grindstone type of computer
science education that I understand to have been more common in the previous
millennium. This professor insisted that his students use Vim for assignments.
At the time I was willing to believe that he knew something I didn't, but
despite my faith, as soon as I no longer had to write code in Vim, I stopped,
having never progressed further than learning to y-yank a line.

I can't remember who finally inspired me to commit myself to the way of the
keyboard. Perhaps it was [The Primeagen](https://www.youtube.com/c/theprimeagen).
In 2022 I finally sat down with a [list of shortcuts](https://vim.rtorr.com/),
and over the course of some months forced myself to learn. I would only use Vim
to edit code, and would make a point of going out of my way to find a new shortcut
that I could integrate into my workflow. It paid off. Perhaps you have more
patience than I do. But, after 5 or 6 or 8 or 12 hours of typing, I get
absolutely sick of all of the small repetitive wrist motions I had to make to
use the mouse to highlight words, make small edits, find UI elements to activate
certain features, highlight text entry fields, and the like. All of this physical
pain and discomfort, and the associated time wasted has been removed from my life.
It's really rather freeing.

I don't have the skill to sell you on all of the particular QoL improvements
which Vim can bring to various kinds of work. Take this as a personal
testimonial; as a former skeptic I say our metaphorical (perhaps literal, it's
been around long enough) ancestors weren't wrong.

This website and all of its posts are written entirely in Vim. Pg's writing
setup has inspired me to take all of my writing from Obsidian, Google Drive,
Microsoft Word (🤢) to Vim [1].

{% tweet "1617833154680848384" %}

My attempt to recreate his setup uses the [foot](https://codeberg.org/dnkl/foot) terminal emulator which I favour for its minimalism, and a short .vimrc. That's
it. I haven't yet found a better distraction-free writing experience. It's a
wonder to me how much some distraction free writing softwares sell for when this
is sitting right there, one apt get away!

```vim
set encoding=utf-8
syntax off
set tabstop=4
set shiftwidth=4
set expandtab
set mouse=a
set fillchars=eob:\ 
imap kj <Esc> 
set colorcolumn=88
highlight ColorColumn ctermbg=240
command W write
```

{% include 'components/inlineImage.liquid',
    source: "/static/images/blog/foot_vim.png"
    alt: "Foot Term"
%}

Professionally I use Neovim for it's extensive plugin ecosystem and relative
ease of configuration. I grant you that configuring Neovim can feel like a full
time job. When you first open Neovim you'll certainly have the thought that you
must be missing something. It's vanilla configuration is not very appealing as
an alternative to plain old Vim. I consider an nvim configuration to be almost
like a personal journal. It's a living document which I carry with me always
(git), and continually edit to suit my changing needs as I learn more about
myself and what is possible with lua.

There are quite a few configuration guides readily findable via Google. But let
me point you to a small collection of some plugins I find indispensable.

1. Any package manager, they all provide the same service, I use [Packer](https://github.com/wbthomason/packer.nvim)
2. [Telescope](https://github.com/nvim-telescope/telescope.nvim) for fuzzy finding and file search (goodbye file tree)
3. [Harpoon](https://github.com/ThePrimeagen/harpoon) (great for when you're working on a feature across a relatively small number of files)
4. [Leap](https://github.com/ggandor/leap.nvim) Neovims answer to the mouse (replaces almost all Vim motions with one simple rule!)*
5. [Treesitter](https://github.com/nvim-treesitter/nvim-treesitter) for syntax highlighting
6. [LSP Zero](https://github.com/VonHeikemen/lsp-zero.nvim) for autocompletion suggestions, linting, etc.

If you want to have the experience of a full IDE, it's fairly easy to get. You
just keep installing plugins. I'm not sure how this would compare to someone
who is genuinely relies on their IDE-specific features (perhaps XCode users
should stay away), as opposed to casually editing Python in Pycharm because
it's a free-ish Python editor with plenty of polish). But it get's you much of
the way there.

*I really shouldn't have saved this piece of wisdom until last, if I intended
to convert anyone. This let's you cheat the Vim gods. You can become insanely
productive in Vim without going through the pain of learning all of the motions
up front. Leap is a plugin which provides one-rule-to-anywhere navigation.
Rather than memorizing `f` `F` `$` `0` `w`, etc and all of the modifiers and
repeaters, just memorize this.

1. Press `s` *
2. Type character you want your cursor to land on.
3. Type the next character, or if there is none, press space.
4. Leap will highlight each such sequence of characters, type one last character to disambiguate your selection.
6. BAM! You're there.

\* If the character you want to jump to is behind / above your cursor, it's a
capital `S`. 

That's it! Four keystrokes to anywhere on the screen. One rule to remember. If
that doesn't convince you to use Vim, well, I don't know what will. It's all of
the benefit for not that much more brain-effort than a mouse.

Vim motions become really fun, especially if you have a good keyboard you like
typing on. There's nothing like the experience of rattling away on an IBM model
M writing K&R style C in Vim. It'll make you feel like you were *really there*,
man!

[Bram Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar) the original
author and long time maintainer of Vim passed away recently, in August 2023. May
he be remembered for a thousand years.

[1] [https://www.paulgraham.com/pfaq.html](https://www.paulgraham.com/pfaq.html)
