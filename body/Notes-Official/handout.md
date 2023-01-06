# Handouts on Introduction to HTML
## Definitions
- **Hypertext**: Hypertext is plain text with references (hyperlinks) to other text that the user can immediately access. The hypertext opens a new webpage, when clicked on.
- **Markup Language**: It is a language that uses special symbols called ‘tags’ to markup the text document which instructs the browser to display the text. Ex: HTML           
- HTML is a markup language used for designing web pages on the World Wide Web. It comes as a complete code package that enables the creation of webpages containing text and graphics. All web browsers are designed to understand and interpret this language.
- **Text Editor**: A computer program that lets a user enter, change, store and print text. Text editors use HTML tags to create a webpage. Ex: Notepad, Word pad, Brackets etc.
- **HTML tags**: HTML tags are keywords enclosed in a pair of angular brackets. The first tag (< >) is known as opening tag or ON tag. The end tag (</ >) is known as closing tag or OFF tag. The main content is placed between ON and OFF tags. Ex: `<html> </html>`
- **HTML Element**: The opening tag, closing tag and the content between the tags together is called an HTML element. Ex: `<p>OXFORD</p>`. HTML elements can be categorized as Container Element: These elements have a beginning and an end tag.
  - `<html>,<head>,<body>,<b>,<u>` etc.
- **Empty Element**: These elements have only an opening or start tag. They do not have a closing tag.
  - Ex: `<hr>,<br>,<img>`
- **Attributes**: Keywords that provide additional information about the HTML tags are called Attributes.

## Structure of a HTML document
```
    <html>
    <head>
    <title>Page title</title>
    </head>
    <body>
        <h1> This is a heading</h1>
        <p>This is a paragraph.</p>
    </body>
    </html>
```
## Cascading style Sheets
- **CSS** (Cascading Style Sheet): CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
### Features of CSS
  - CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
  - CSS saves a lot of work. It can control the layout of multiple web pages all at once.
  - External stylesheets are stored as .css files.
### Different ways to insert CSS
  -  **External CSS**: With an external style sheet, you can change the look of an entire website by changing just one file. Each HTML page must include a reference to the external style sheet file inside the `<link>` element,inside the head section. An external style sheet can be written in any text editor, and must be saved with a .css extension.
  -  **Internal CSS**: An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the `<style>` element, inside the head section.
  -  **Inline CSS**: An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.