Project Gitenberg FAQ
=====================

###Why are we putting books on Github?

[start with more ideological response. description of how gitenberg will improve the books and access to them. rephrase bottom paragraph and move it up here.]

Because GitHub hosts all of this for free. Also, because GitHub is more than just storage for git repos, it is also a social network for code. Lastly, we can use GitHub's API functionality for GITenberg, without having to reproduce it ourselves.

Importantly, this project is GITenberg, not GITHUBerg. If we could provide better tools with a separate website that we write and maintain, then we may [don't discuss pre-failures, move suggested forks and help to "how can I help?" section].

Also, putting GITenberg on GitHub means that it isn't owned by me. If someone wants to fork a book on github, that book is now theirs.

###Who did you design this for?

The early versions of GITenberg are going to be mainly for developers, and for people who know how to use git and GitHub. But we hope that the results of our project can be used by anyone who wants quality ebooks for free.

###What can I do with these books?
Anything you want, really! These books are in the [public domain](TODO link!). You may quote them, edit them, print them, sell them, or give them away in whole or in part. [Project Gutenberg](TODO link!) would appreciate a note saying they transcribed the book.

[if possible, a link to nifty other projects that used public domain books, like free education or artistic projects, would be helpful]

####Can I sell these books?

Yes. They are in the public domain, anything you can imagine, you can do.

###How do I find books I may want to use?
* Explain that we have book metadata Link to metadata break down in issue 
* Explain that the only way to search the book metadata is the metadata.json file I am generating.

###I found an error in a book, what do?

####How to report an error in a book:

* Find the book on github <>
* Click the "issues" tab
* Click "New Issue" (you may have to register for Github (and you should, github is awesome!))
* In the issue, Copy and paste the sentence with an error as written so we can find the error in the book
* Describe what the text should say instead

If you follow these steps, we (or you) should have enough information to fix the book.

####How to suggest corrections for a book:

* Signup/login for Github
* Find the book on github <>
* Click the "Fork" button. This will create a copy of the book for your user account on github. You can edit this version in your browser or on your computer using GitHub for mac or windows. <>
* When you are satisfied with your changes, click "Pull Request" and offer the changes back to the GITenberg account. GITenberg volunteers can then review your changes, suggest additional corrections and eventually merge your changes into our copy of the book

###What files are in a book repo?
* README.rst
* CONTRUBUTING.rst
* metadata.json (link to metadata breakdown)
* `$(book_id).{.rst, .tei, .txt, ??}`
* Sometimes LaTeX.tex
* sometimes a folder that contains images (what is this folder usually called?)
* Sometimes a folder called 'old'

###What metadata is available for books?
* Link to metadata.json
* Explain that each repo contains an individual metadata.json
* Describe the metadata fields we have
* List metadata fields we would like to create in the future, and link to their github issues

```
{
    "lang": "en", 
    "loc": [
        "PR"
    ], 
    "mdate": "2006-05-13", 
    "bookid": "2072", 
    "title": "Michael", 
    "author": "Benson, E. F. (Edward Frederic), 1867-1940", 
    "subj": [
        "Men -- England -- Fiction"
    ]
}
```

LOC is Library of Congress Code
mdate is when the book was added to PG
bookid is PG's unique id for a book
title is title
subject is PG's subject system

We would like to add:

* Reading level (computed using Flesch-Kincaid)
* Word count
* Vocab count

###How can I help?

Good question.

We need to make these books better, so finding errors [link to examples or another part of the faq] in books and reporting them link to how to report error is important.

We need people to process and accept pull requests on books. The best way to do this is to join our [discussion mailing list](TODO Link!).

Finally, you can join our [mailing list for announcements](TODO Link!). This way when we need help, we can ask.
