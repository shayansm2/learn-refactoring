## the purpose of refactoring

people get trapped on when they try to justify refactoring in terms of “clean code,” “good engineering practice,” or
similar moral reasons. The point of refactoring isn’t to show how sparkly a code base is—it is purely economic. We
refactor because it makes us faster—faster to add features, faster to fix bugs.

> **The whole purpose of refactoring is to make us program faster, producing more value with less effort.**

## Refactoring VS Performance optimization

Four Reasons to Change Software

1. Adding a feature
2. Fixing a bug
3. Improving the design
4. Optimizing resource usage

|                   | Adding a Feature | Fixing a Bug | Refactoring | Optimizing |  
|-------------------|------------------|--------------|-------------|------------|  
| Structure         | Changes          | Changes      | Changes     |            |  
| New Functionality | Changes          |              |             |            |  
| Functionality     |                  | Changes      |             |            |  
| Resource Usage    |                  |              |             | Changes    |  

**Refactoring is very similar to performance optimization**, as both involve carrying out code manipulations that
**don’t change the overall functionality** of the program. **The difference is the purpose: Refactoring is always done
to make the code “easier to understand and cheaper to modify.” This might speed things up or slow things down.** With
performance optimization, I only care about speeding up the program, and am prepared to end up with code that is harder
to work with if I really need that improved performance.

## Why Should We Refactor?

1. Refactoring Improves the Design of Software

   As people change code to achieve short-term goals, often without a full comprehension of the architecture, the code
   loses its structure.
2. Refactoring Makes Software Easier to Understand
3. Refactoring Helps Me Find Bugs
4. Refactoring Helps Me Program Faster

![img.png](img.png)

## When Should We Refactor?

The best time to refactor is just before I need to add a new feature to the code base.

When you have to add a feature to a program but the code is not structured in a convenient way, first refactor the
program to make it easy to add the feature, then add the feature.

> It’s like I want to go 100 miles east but instead of just traipsing through the woods, I’m going to drive 20 miles
> north to the highway, and then I’m going to go 100 miles east at three times the speed I could have if I just went
> straight there. When people are pushing you to just go straight there, sometimes you need to say, ‘Wait, I need to
> check the map and find the quickest route.’ The preparatory refactoring does that for me.
>
> — Jessica Kerr,

Whether I’m adding a feature or fixing a bug, refactoring helps me do the immediate task and also sets me up to make
future work easier. This is an important point that’s frequently missed. Refactoring isn’t an activity that’s separated
from programming—any more than you set aside time to write if statements. I don’t put time on my plans to do
refactoring; most refactoring happens while I’m doing other things.

### 2 hats method (refactoring while you add feature or fix the bug)

My experience is that refactoring is a big aid to building software quickly. If I need to add a new function and the
design does not suit the change, I find it’s quicker to refactor first and then add the function. If I need to fix a
bug, I need to understand how the software works—and I find refactoring is the fastest way to do this.

As I develop software, I find myself swapping hats frequently. I start by trying to add a new capability, then I realize
this would be much easier if the code were structured differently. So I swap hats and refactor for a while. Once the
code is better structured, I swap hats back and add the new capability. Once I get the new capability working, I realize
I coded it in a way that’s awkward to understand, so I swap hats again and refactor. All this might take only ten
minutes, but during this time I’m always aware of which hat I’m wearing and the subtle difference that makes to how I
program.

One bit of advice I’ve heard is to separate refactoring work and new feature additions into different version-control
commits

### continues refactoring

Often, a useful strategy is to agree to gradually work on the problem over the course of the next few weeks. Whenever
anyone goes near any code that’s in the refactoring zone, they move it a little way in the direction they want to
improve.

### planned refactoring

If a team has neglected refactoring, it often needs dedicated time to get their code base into a better state for new
features. But such planned refactoring episodes should be rare.

## when should we not refactor

1. If I run across code that is a mess, but I don’t need to modify it, then I don’t need to refactor it. Some ugly code
   that I can treat as an API may remain ugly. It’s only when I need to understand how it works that refactoring gives
   me any benefit.
2. when rewrite is more logical than refactoring

## self-testing code, continuous integration and refactoring

there is a strong synergy between the three practices of self-testing code, continuous integration, and refactoring.

### self-testing code

Before you start refactoring, make sure you have a solid suite of tests. These tests must be self-checking. why?
refactoring carries too much risk of introducing bugs. Without self-testing code, that’s a reasonable worry.

Legacy code is often complex, frequently comes with poor tests, and, above all, is written by Someone Else (shudder).
These tests must be self-checking. Refactoring can be a fantastic tool to help understand a legacy system. Functions
with misleading names can be renamed, so they make sense. However, if you have a big legacy system with no tests, you  
can’t safely refactor it into clarity. If all this sounds difficult, that’s because it is. Sadly, there’s no shortcut to
getting out of a hole this deep—which is why I’m such a strong proponent of writing self-testing code from the start.

### continuous integration

Many people, therefore, argue for keeping feature branches short—perhaps just a couple of days. Others, such as me, want
them even shorter than that. This is an approach called Continuous Integration (CI), also known as Trunk-Based
Development. With CI, each team member integrates with mainline at least once per day. Feature branches may be the
right technique for open source projects where you have infrequent commits from programmers who you don’t know well (and
thus don’t trust). But in a full-time development team, the cost that feature branches impose on refactoring is
excessive

## refactoring in a code review

it’s hard for people to put themselves in the shoes of someone unfamiliar with whatever they are working on. The common
pull request model, where a reviewer looks at code without the original author, doesn’t work too well. It’s better to
have the original author of the code present because the author can provide context on the code and fully appreciate the
reviewers’ intentions for their changes. I’ve had my best experiences with this by sitting one-on-one with the original
author, going through the code and refactoring as we go (pair programming).

### sources

1. chapter 1 and 2 of Refactoring book
2. chapter 1 of Working Effectively with Legacy Code