## Images Manager 0.0.1 alpha

This module allows you to manage images from one central repository. You create a root page "/images/" where you can then add categories and images as pages. From there the new admin page created "ImagesManager" will show categories and images added in a ajax data table, from where you can see and search/filter all images, upload and create new categories and edit images too.

Every image will also show an image tag generated to copy into a textarea. This tag looks like this:

`{image:/path/to/image/imagename/:100,0}`

And can be altered to contain also classes:

`{image:/path/to/image/imagename/:100,0:align_left}`

Or you can enter the id directly:

`{image:1033:100,0}`

Once inserted into a textarea field it will get parsed when saved and loaded automaticly. It will store an abstract id tag in Database and convert it back to the image HTML tag. So after first save you'll see the image inserted in a Wysiwyg and be able to resize and place it as usual. Once it's inserted somewhere Images Manager will show a search link with the pages containing the image (you can configure the fields int the module setting). You can change the image or move it to a different category, it will still work and show the correct image. This also works with multilanguage fields.

You can still also use the regular insert image dialog in TinyMCE and chose image from those pages. And it will start keeping track of those aswell (they're the same after all).

You can use those central images pages also with page fields to reference them single or even whole categories, search them with API and do what you like.

Images Manager will also parse the page render on front-end and replace any found image tags with the HTML code. It will also look for a description on the image and output it as alt tag. If you want to have multilangauge description you can add a `image_description` TextLanguage field to the image page template and have images parser use them.

Along with this module, you can also install the `PageListImageLabel` module to add thumbnails to the image pages in the tree.

### To get it working you need to have the basic setup:

1. Create new `image` field with input setting to 1 max image
2. Create new `image` template and add `title` and the `image` field created before
3. Create a 'image-category' template with only title and allow the `image` template and `image-category` as child pages under family settings.
4. Create a `image-root` template with only the title field for the root of the images tree. Allow only `image-category` as child page under family settings.
5. Create the root page with the `image-root` under the home page as "/images/"
6. Done.

Now you can use the ImagesManager to add categories and images. But you can also still use the page tree to add new stuff as usual.


### How to install the module:

- Download the contents of this repository and put the folder renamed as "ImagesManager" into your site/modules/ folder
- Login to processwire and got to Modules page and click "Check for new modules". You should see a note that the new module were found. Install it.
- A new admin page "ImagesManager" should appear
- You may configure the option on the module screen to suit your neeeds.



