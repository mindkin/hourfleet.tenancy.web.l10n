# Hourfleet Localization Site

Welcome translators!

Here you will find instructions on how to contribute a new language to the Hourfleet Web application.

A big thanks to you, and your generous efforts. We rely on people like you to provide these translations to bring new languages to Hourfleet.



The idea with this site, is that you can add or modify these language files. We then build them into Hourfleet, and you and others can use the Hourfleet applications in the new language!

Thanks very much for your contributions, without which Hourfleet would not be able to reach people all around the world.

## Add a new Language

Before you start, either clone this GitHub repository (using standard git tools), or simply use the GitHub web interface to copy an edit the necessary files.

Steps: 

1. Create a new file in the `src/languages` folder, name it with the language code (found from [Language Codes 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) a two-letter code, e.g. `en` for English.
2. Copy the contents of `'src/base.js` to your new language file.
3. Start changing the phrases to your new language, or leave them in English, and come back later.
4. Commit the changes, and submit a 'Pull Request'. Explain your changes in the comment.
5. You are done.

We will then review your changes, and merge them into Hourfleet, and release them with the next release.

## Modify a Language

You can perform this step quickest in the GitHub web interface.

1. Open the language file you wish to edit from the folder `src/langauges`
2. Make your changes
3. Commit your changes and create a new Pull Request. Explain your changes

We will then review your changes, and merge them into Hourfleet, and release them with the next release.

> Note: Hourfleet releases are frequent, and can be tracked [here](https://feedback.hourfleet.com/changelog)

## How It Works 

Hourfleet will use the translations provided on this site



When Hourfleet customers go to use the web application, assuming the language of their browser is set to a language that we have a language file for in this repository, they will see the translated phrases.

If a phrases is missing or empty from the language file, or the language file is missing altogether, then the default language file (`en`) will be used instead.

If you see an English phrase in your app, that indicates one of two things: 
- A new translation is required. You will need to provide that value in your chosen language file. 
- That part of Hourfleet has not yet been enhanced with local language support. We have a large product development backlog, and this feature expansion as part of that overall work. Please contact us if there are pages you would like to have include local language support

> Note: Updates to changes made on this site will be made each release. You can follow the releases of Hourfleet [here](https://feedback.hourfleet.com/changelog). The introduction of local language support is therefore an incremental process. Each time we fit local language support to new pages in Hourfleet, you'll need to re-visit your local language file and enter the new translations.
