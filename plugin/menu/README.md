# reveal.js-menu

A slideout menu plugin for [Reveal.js](https://github.com/hakimel/reveal.js) to quickly jump to any slide by title. Also optionally change the theme and set the default transition. [Check out the live demo](https://denehyg.github.io/reveal.js-menu)

## Installation

### Bower

Download and install the package in your project:

`bower install reveal.js-menu`

Add the plugin to your presentation, as below.

```javascript
<script src="bower_components/reveal.js-menu/menu.js"></script>
<script>
  Reveal.initialize({
    plugins: [ RevealMenu ]
  });
</script>
```

### npm

Download and install the package in your project:

`npm install --save reveal.js-menu`

Add the plugin to your presentation, as below.

```javascript
<script src="node_modules/reveal.js-menu/menu.js"></script>
<script>
  Reveal.initialize({
    plugins: [ RevealMenu ]
  });
</script>
```

### Manual

Copy this repository into the plugins folder of your reveal.js presentation, ie `plugins/menu`.

Add the plugin to the dependencies in your presentation, as below.

```javascript
<script src="plugin/menu/menu.js"></script>
<script>
  Reveal.initialize({
    plugins: [ RevealMenu ]
  });
</script>
```

## Configuration

You can configure the menu for your presentation by providing a `menu` option in the reveal.js initialization options. Note that all config values are optional and will default as specified below.

```javascript
Reveal.initialize({
  // ...

  menu: {
    // Określa, po której stronie prezentacji menu będzie
    // wyświetlone. Użyj 'left' lub 'right'.
    side: 'left',

    // Określa szerokość menu.
    // Może być jedną z następujących:
    // 'normal', 'wide', 'third', 'half', 'full', ub
    // dowolna ważna wartość długości w css
    width: 'normal',

    // Dodaj numery slajdów do tytułów na liście slajdów.
    // Użyj 'true' lub łańcucha formatowego (tak samo jak numery slajdów w reveal.js)
    numbers: false,

    // Określa, które elementy slajdu będą używane do generowania
    // tytułów slajdów w menu. Domyślnie wybierany jest pierwszy
    // element nagłówka znaleziony w slajdzie, ale możesz określić dowolny
    // poprawny selektor css, a tekst z pierwszego pasującego
    // zostanie użyty tekst z pierwszego pasującego elementu.
    // Uwaga: atrybut data-menu-title sekcji lub element
    // z klasą menu-title będą miały pierwszeństwo przed tą opcją
    titleSelector: 'h1, h2, h3, h4, h5, h6',

    // Jeśli slajdy nie mają pasującego tytułu, spróbuj użyć
    // początek zawartości tekstowej jako tytuł
    useTextContentForMissingTitles: false,

    // Ukryj slajdy z menu, które nie mają tytułu.
    // Ustaw na 'true', aby wyświetlić tylko slajdy z tytułami.
    hideMissingTitles: false,

    // Dodaje znaczniki do tytułów slajdów, aby wskazać
    // postęp w prezentacji. Ustaw na 'false'
    // aby ukryć markery.
    markers: true,

    // Określa niestandardowe panele, które mają być włączone do menu, poprzez
    // podajnie tablicę obiektów z właściwościami 'title', 'icon'
    // , oraz właściwością 'src' lub 'content'.
    custom: false,
	
    // Określa tematy, które będą dostępne w themes
    // panel menu. Ustaw na 'true', aby wyświetlić panel menu tematów
    // z domyślną listą tematów. Alternatywnie, podaj
    // tablicę, aby określić tematy, które mają być dostępne w panelu menu
    // themes menu panel, na przykład...
    //
    // [
    //     { name: 'Black', theme: 'dist/theme/black.css' },
    //     { name: 'White', theme: 'dist/theme/white.css' },
    //     { name: 'League', theme: 'dist/theme/league.css' },
    //     {
    //       name: 'Dark',
    //       theme: 'lib/reveal.js/dist/theme/black.css',
    //       highlightTheme: 'lib/reveal.js/plugin/highlight/monokai.css'
    //     },
    //     {
    //       name: 'Code: Zenburn',
    //       highlightTheme: 'lib/reveal.js/plugin/highlight/zenburn.css'
    //     }
    // ]
    //
    // Uwaga: określenie highlightTheme bez motywu spowoduje.
    // zmieni motyw podświetlenia kodu, pozostawiając motyw
    // temat prezentacji bez zmian.
    themes: false,

    // Określa ścieżkę do domyślnych plików motywu. Jeśli Twoja
    // prezentacja wykorzystuje inną ścieżkę niż standardowy
    // to musisz podać tę opcję, ale tylko wtedy
    // gdy 'themes' jest ustawione na 'true'. Jeśli dostarczasz własną
    // własną listę tematów lub 'themes' jest ustawione na 'false' to opcja
    // opcja 'themesPath' jest ignorowana.
    themesPath: 'dist/theme/',

    // Określa, czy zostanie pokazany panel menu przejść.
    // Ustawienie na 'true' powoduje wyświetlenie panelu menu przejść z
    // domyślną listą przejść. Alternatywnie, podaj
    // tablicę, aby określić przejścia, które mają być dostępne w
    // panelu przejść, na przykład.
    // ['None', 'Fade', 'Slide']
    transitions: false,

    // Dodaje przycisk menu do slajdów, aby otworzyć panel menu.
    // Ustaw na 'false', aby ukryć przycisk.
    openButton: true,

    // Jeśli 'true' pozwala numerowi slajdu w prezentacji na.
    // otworzyć panel menu. Opcja reveal.js slideNumber musi.
    // być wyświetlona, aby to zadziałało
    openSlideNumber: false,

    // Jeśli true pozwala użytkownikowi otworzyć i poruszać się po menu za pomocą
    // klawiatury. Standardowa interakcja klawiatury z reveal
    // będzie wyłączona, gdy menu jest otwarte.
    keyboard: true,

    // Normalnie menu zostanie zamknięte przy działaniach użytkownika takich jak np.
    // wybranie pozycji menu, lub kliknięcie obszaru prezentacji.
    // Jeśli 'true', to opcja sticky pozostawi menu otwarte
    // dopóki nie zostanie wyraźnie zamknięte, np. za pomocą przycisku close
    // przycisku close lub naciśnięcia klawisza ESC lub m (gdy opcja
    // opcja interakcji jest włączona).
    sticky: false,

    // Jeżeli "true" to standardowe pozycje menu będą automatycznie otwierane
    // podczas nawigacji za pomocą klawiatury. Uwaga: funkcja działa tylko wtedy
    // działa tylko wtedy, gdy są włączone obie opcje 'keyboard' i 'sticky'.
    autoOpen: true,

    // Jeśli "true", menu nie zostanie utworzone, dopóki nie zostanie wyraźnie
    // żądania przez wywołanie RevealMenu.init(). Zauważ, że opóźni to
    // utworzenie wszystkich paneli menu, w tym paneli niestandardowych, oraz
    // przycisku menu.
    delayInit: false,

    // Jeśli "true", menu zostanie pokazane podczas inicjalizacji menu.
    openOnInit: false,

    // Domyślnie menu załaduje własną bibliotekę font-awesome
    // ikony. Jeśli twoja prezentacja wymaga załadowania innej
    // biblioteki font-awesome, opcja 'loadIcons' może być ustawiona na false
    // i menu nie będzie próbowało załadować biblioteki font-awesome.
    loadIcons: true
  }
});
```

### Themes Stylesheet

If you are using the themes panel you need to ensure the theme stylesheet in the presentation uses the `id="theme"` attribute. For example...

```html
<link rel="stylesheet" href="css/theme/black.css" id="theme" />
```

If your themes configuration includes code highlight themes you need to ensure the highlights theme stylesheet in the presentation uses the `id="highlight-theme"` attribute. For example...

```html
<link
  rel="stylesheet"
  href="plugin/highlight/zenburn.css"
  id="highlight-theme"
/>
```

## Slide Titles

The slide titles used in the menu can be supplied explicitly or are taken directly from the presentation, using the following rules...

###### 1. The section's `data-menu-title` attribute.

If the slide's section element contains a `data-menu-title` attribute this will be used for the slide title in the menu. For example...

```html
<section data-menu-title="Custom Menu Title">
  <h1>Title</h1>
  <p>...</p>
</section>
```

###### 2. Any element with the class `menu-title`.

If the slide's section contains an element with the class `menu-title` then the element's text will be used for the title. The first such element found will be used if there are more than one. Note the element need not be displayed to be used. For example...

```html
<section>
  <h1>Title</h1>
  <span class="menu-title" style="display: none">Custom Menu Title</span>
  <p>...</p>
</section>
```

###### 3. The first heading found or a custom element selector

The `titleSelector` option can be used to customise the elements that will be used to generate the slide titles in the menu. The default option selects the first heading element found in the slide. For example...

```html
<section>
  <h3>This will be the slide title in the menu</h3>
  <h1>Title</h1>
  <p>...</p>
</section>
```

Any valid CSS selector should work but note the selector will only be applied to elements contained within the slide section. You could use the `'h1'` selector to only use level 1 headings or `'p'` to use the first paragraph element. For example, `titleSelector: 'p.lead'` would be used like this...

```html
<section>
  <h1>Title</h1>
  <p class="lead">This will be the slide title in the menu</p>
  <p>...</p>
</section>
```

Using `titleSelector: ''` will ignore all elements and no title will be provided, unless the slide section contains a `data-menu-title` attribute or an element with the `menu-title` class.

###### 4. No title is provided

If no title can be found using the above methods, a default title incorporating the slide number will be used. For example, the following would result in a slide title in the format of 'Slide 12'...

```html
<section>
  <p>...</p>
</section>
```

If the `hideMissingTitles` option is set to `true`, however, the slide will not be listed in the menu.

## Custom Menu Panels

Additional custom panels can be added the menu using the `custom` option.

```javascript
Reveal.initialize({
  // ...

  menu: {
    // ...

    custom: [
      {
        title: 'Links',
        icon: '<i class="fa fa-external-link">',
        src: 'links.html'
      },
      {
        title: 'About',
        icon: '<i class="fa fa-info">',
        content: '<p>This slidedeck is created with reveal.js</p>'
      }
    ]
  }
});
```

`title` and `icon` are used for the toolbar buttons at the top of the menu. There are two approaches you can use to provide content for the panels...

- You can provide a URL in `src` to load html from another file.
- Alternatively, you can provide html in `content` and this will be added to the custom panel.

###### Custom slide menu items

You can provide menu items in your custom panels using the following format. This allows you to define your own navigation links for your presentation.

```html
<h1>Links</h1>
<ul class="slide-menu-items">
  <li class="slide-menu-item"><a href="#/transitions">Transitions</a></li>
  <li class="slide-menu-item"><a href="#/13">Code highlighting</a></li>
</ul>
```

You are not limited to linking to presentation slides. You can provide any link you wish.

```html
<h1>External Links</h1>
<ul class="slide-menu-items">
  <li class="slide-menu-item">
    <a href="https://github.com/denehyg/reveal.js-menu">Reveal.js-menu</a>
  </li>
  <li class="slide-menu-item">
    <a href="https://github.com/hakimel/reveal.js">Reveal.js</a>
  </li>
</ul>
```

Using menu items enables keyboard navigation of your links as with the other panels. However, you don't have to use menu items for your links. You can simply provide standard links and unordered lists in your html. Notice you can provide your custom menu items mixed with other html if you wish.

## Ready Event

A 'menu-ready' event is fired when reveal.js-menu has loaded all non-async dependencies and is ready to start navigating.

```javascript
Reveal.addEventListener('menu-ready', function (event) {
  // your code
});
```

## API

The `RevealMenu` object exposes a JavaScript API for controlling the menu:

| Function                | Description                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| toggle(event)           | Toggles the open state of the menu, ie open if it is closed, and close if it is open                         |
| openMenu(event)         | Opens the menu                                                                                               |
| closeMenu(event, force) | Closes the menu. To force the menu to close (ie when `sticky` option is `true`) call `closeMenu(null, true)` |
| openPanel(event, ref)   | Opens the menu to a specific panel, passing the name of the panel or the panel element itself                |
| isOpen()                | Returns true if the menu is open                                                                             |
| initialiseMenu()        | Initialises the menu if it has not already been initialised. Used in conjunction with the `delayInit` option |
| isMenuInitialised()     | Returns true if the menu has been initialised                                                                |

## Compatibility

reveal.js-menu v2.0 is built for reveal.js v4. It will not work with reveal.js v3. If you require a menu for reveal.js v3 you will need to install reveal.js-menu v1.2.0.

v2.0 also introduces API changes that are not backwards compatible. `init()` has been renamed to `initMenu()` to deconflict with the reveal.js v4 plugin API. `isInit()` has also been changed to `isMenuInitialised()`.

## License

MIT licensed

Copyright (C) 2020 Greg Denehy
