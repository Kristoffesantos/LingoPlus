# AI usage

This project was built with AI assistance. This file is the record of it. It is
graded as the finals badge, and it is worth 100 points.

Start it in week 1 and keep it up as you go. The commit history of this file is
part of the evidence: a file written all at once the night before the deadline
looks exactly like what it is.

## 1. How I used AI

At least six entries. One per real use. Every entry needs a commit link.

### YYYY-MM-DD - short title

- **Tool:**
- **What I asked for:**
- **What it gave back:**
- **What I kept, what I changed, and why:**
- **Commit:** https://github.com/YOUR-USERNAME/YOUR-REPO/commit/SHA

## 2. Where the AI got it wrong

Three cases. Be specific. If you write that the AI was never wrong, this section
scores zero.

### Case 1 - short title

- **What it gave me:**
- **What was wrong with it:**
- **What I did instead:**
- **Commit:** https://github.com/YOUR-USERNAME/YOUR-REPO/commit/SHA

## 3. Who wrote what

At least a fifth of this project is code you wrote yourself. Name it, and explain
it in your own words.

> Group projects: give each member their own heading below, and use your GitHub
> handle as the heading. You are graded on your own section.

### Written by me

- **File:**
- **Commit:**
- **What it does and why it is built this way:**

### The AI-written part I understand best

- **File:**
- **Commit:**
- **What it does and why we kept it:**








# Builds for the Web and AI

This file documents how AI was used during the development of LingoPlus.

The main AI assistant used during development was ChatGPT. AI was used for brainstorming, code suggestions, debugging, content ideas, and understanding parts of the code. The generated suggestions were tested and modified in VS Code before being used in the project.

---

# 1. How I Used AI

## Entry 1 — Initial Website Structure

**Date:** September 24, 2026
**AI Tool:** ChatGPT

**What I asked for:**
I asked ChatGPT for help planning a simple website structure for LingoPlus, a digital dictionary for IT terms and programming concepts.

**What AI gave back:**
It suggested a basic structure containing sections such as Home, About, Terms, Code Basics, and Contact.

**What I kept:**
I kept the general idea of separating the website into these sections.

**What I changed:**
I changed the content and organization to fit our LingoPlus project and our target users.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36500182016

---

## Entry 2 — Website Content and Structure

**Date:** September 30, 2026
**AI Tool:** ChatGPT

**What I asked for:**
I asked for help improving the content and structure of the LingoPlus webpage.

**What AI gave back:**
It suggested additional IT terms, explanations, and ways to organize the website sections.

**What I kept:**
I kept some of the suggested terms and the general card-based structure.

**What I changed:**
I selected and edited the content that was appropriate for beginners and changed the website structure to match our project.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36725722052

---

## Entry 3 — CSS Layout

**Date:** September 29–30, 2026
**AI Tool:** ChatGPT

**What I asked for:**
I asked for help improving the CSS layout and making the website look cleaner.

**What AI gave back:**
It suggested changes to spacing, grids, cards, buttons, typography, and responsive layouts.

**What I kept:**
I kept the general card and grid layout.

**What I changed:**
I adjusted the spacing and layout because some versions had too much empty space. I also changed the styling to better match the simple black-and-white design of LingoPlus.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36500212297

---

## Entry 4 — Search Functionality

**Date:** September 30, 2026
**AI Tool:** ChatGPT

**What I asked for:**
I asked for help adding a search function to the IT Terms and Code Basics sections.

**What AI gave back:**
It provided JavaScript that checks the text inside the cards and hides cards that do not match the search.

**What I kept:**
I kept the basic search and filter approach.

**What I changed:**
I adjusted the JavaScript to work with our actual HTML structure and added behavior for searches that have no matching results.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36725781078

---

## Entry 5 — CSS Refinement

**Date:** September 30, 2026
**AI Tool:** ChatGPT

**What I asked for:**
I asked for help making the website more compact and improving the overall styling.

**What AI gave back:**
It suggested reducing unnecessary spacing and reorganizing some CSS rules.

**What I kept:**
I kept some of the layout improvements.

**What I changed:**
I tested the changes in VS Code and the browser and adjusted the CSS when the result did not look right.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36725830943

---

## Entry 6 — CSS Cleanup

**Date:** September 30, 2026
**AI Tool:** ChatGPT

**What I asked for:**
I asked for help cleaning up the CSS and removing unnecessary rules.

**What AI gave back:**
It suggested simplifying some CSS and removing unused styling.

**What I kept:**
I kept the useful styling and organization improvements.

**What I changed:**
I checked the website after the changes and kept only the rules that were useful for the current design.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36726584084

---

## Entry 7 — Additional Content

**Date:** October 2026
**AI Tool:** ChatGPT

**What I asked for:**
I asked for more IT terms and basic programming examples because the website needed more useful content.

**What AI gave back:**
It suggested additional terms and examples covering areas such as programming, networking, databases, security, HTML, CSS, JavaScript, Python, and SQL.

**What I kept:**
I kept terms and examples that were appropriate for beginners.

**What I changed:**
I organized the content into the existing LingoPlus cards and removed or changed content that did not fit the website.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36725722052

---

# 2. Where the AI Got It Wrong

## Case 1 — Too Much Empty Space

**AI Tool:** ChatGPT

**What AI gave me:**
One version of the CSS used larger spacing and padding throughout the website.

**What was wrong with it:**
After testing the website, I noticed that there was too much empty space between sections and around the cards. The website looked less compact than we wanted.

**What I did instead:**
I reduced the section padding, gaps, margins, and card spacing and tested the result in the browser.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36725830943

---

## Case 2 — View More Needed Actual Functionality

**AI Tool:** ChatGPT

**What AI gave me:**
An earlier version had a View More button, but the implementation did not properly hide and reveal the additional cards.

**What was wrong with it:**
The button did not provide a useful View More/View Less experience when the cards were already visible.

**What I did instead:**
I changed the JavaScript so that only part of the list is shown at first. View More displays the remaining cards, while View Less hides them again.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36725781078

---

## Case 3 — Search Needed a No-Results Message

**AI Tool:** ChatGPT

**What AI gave me:**
The first search implementation mainly hid cards that did not match the search.

**What was wrong with it:**
When there were no matching results, the user could just see an empty section without knowing what happened.

**What I did instead:**
I added a message:

> "We can't find what you're searching for."

The message is shown when there are no matching cards and hidden again when results are found or the search is cleared.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36725781078

---

# 3. Who Wrote What

## @Kristoffesantos

I mainly worked on the LingoPlus website in VS Code and helped with the website content, HTML structure, JavaScript functionality, and testing.

### Website Structure and Content

**File:** `index.html`

I worked on the structure and content of the LingoPlus webpage, including the different sections and the IT term and code cards.

The HTML provides the main structure of the website. The sections are separated so users can navigate between the Home, About, Terms, Code Basics, and Contact areas.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36500182016

### Testing and Fixing

I tested the website in VS Code and the browser after making changes.

I checked whether the navigation, search, cards, buttons, and responsive layout behaved correctly. When something did not look or work correctly, I modified the code and tested it again.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36726584084

### AI-Written Part I Understand

One of the parts where I received significant AI assistance was the JavaScript search functionality.

The JavaScript reads the search input and compares it with the text inside each card. If the text matches, the card is displayed. If it does not match, the card is hidden.

I understand this part because I tested it in the browser and changed the behavior to fit our actual website. I also added the no-results behavior so that users receive a message when their search does not match anything.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/36725781078

---

## @ShilonyPara

I mainly worked on the website's CSS and visual design.

### CSS Layout and Responsive Design

**File:** `style.css`

I worked on the website's layout and styling, including the cards, grids, spacing, buttons, navigation, and responsive behavior.

I also adjusted the spacing because some versions had too much empty space. I tested the CSS in the browser and changed the layout when it did not look right.

Media queries were also used to help the website adjust to smaller screen sizes.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/37176391544

**Additional CSS Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/37176391544

### AI-Written Part I Understand

One of the parts where I received AI assistance was the CSS layout.

The AI suggested different CSS rules for the cards, spacing, grids, and responsive layout. I tested these suggestions and changed the values and rules when they did not match the design we wanted.

I understand how the CSS controls the appearance and layout of the website because I tested the changes in the browser and adjusted them based on the result.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/37176391544

---

## @MarkAdrianWaje

I mainly worked on the JavaScript functionality of the website.

### Search and Website Interaction

**File:** `script.js`

I worked on the JavaScript used for the search and other website interactions.

The search function gets the text entered by the user and compares it with the text inside the cards. Matching cards are shown while cards that do not match are hidden.

I also worked on the behavior of the View More and View Less buttons and the message shown when there are no matching search results.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/37176366974

### AI-Written Part I Understand

One of the parts where I received AI assistance was the JavaScript search functionality.

The AI provided a basic approach for checking the user's search input against the text inside the cards. I tested the code and modified it so it worked with our actual HTML structure.

I also helped make the search display a message when there were no matching results.

**Commit:** https://github.com/Kristoffesantos/LingoPlus/actions/runs/37176366974

---

# README AI Credit

LingoPlus was developed with AI assistance using ChatGPT for brainstorming, code suggestions, debugging, content ideas, and understanding code. AI-generated suggestions were reviewed, tested, and modified by the group.

See [AI-USAGE.md](AI-USAGE.md) for our AI usage and development evidence.

[![Made with AI](https://img.shields.io/badge/Made_with-AI_assistance-blue)](AI-USAGE.md)

